<template>
  <v-dialog v-model="dialog" max-width="1200px" @click:outside="cleanCurrentComponent">
    <v-card>
      <v-card-title class="headline">Image</v-card-title>


      <!--
        Dette componentet er noe jeg har laget tidligere, og bestemte meg for
        å ta i bruk. Cropperen er importert, samme er pictureinput og base64toblob,
        som gjør base64 om til blob for lagring i json.
      -->


      <v-card-text>
        <v-container>
          <v-row>
            <v-col class="col-lg-4">
              <picture-input
                ref="pictureInput"
                :hideChangeButton="true"
                removeButtonClass="v-btn v-btn--contained theme--light v-size--default"
                :removable="true"
                :zIndex="0"
                :crop="false"
                @change="onImageChange"
                @remove="onImageRemoval"
                :prefill="row.bilde"
                :custom-strings="{
                            upload: '<h1>Error!</h1>',
                            drag: 'Upload Image'
                        }"
              ></picture-input>

              <v-col style="text-align:center;" cols="12" v-if="img">
                <b>Before:</b>
                <span>{{ original.size }}</span>
                <span>|</span>
                <b>After:</b>
                <span>{{ compressed.size }}</span>
              </v-col>
            </v-col>

            <v-col class="col-lg-8">
              <v-tabs grow v-model="currentItem">
                <v-tab>Cropper</v-tab>
                <v-tab>Compress</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <!-- TODO: Place an advanced-image-cropper here. -->
                      <v-row justify="center">
                        <v-col>
                          <v-text-field
                            type="number"
                            hide-details
                            v-model="aspectHeight"
                            filled
                            label="Height Aspect"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-text-field
                            type="number"
                            hide-details
                            v-model="aspectWidth"
                            filled
                            label="Width Aspect"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-btn height="100%" @click="ChangeAspect" class="mb-2">Change Aspect</v-btn>
                        </v-col>

                        <v-btn @click="cropImage" class="mt-2">Crop Image</v-btn>

                        <cropper
                          v-if="currentItem == 0"
                          class="cropper"
                          ref="cropper"
                          :src="row.bilde"
                          :stencil-props="{
                            aspectRatio: aH/aW
                          }"
                        ></cropper>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat class="pa-0">
                    <v-card-text>
                      <v-row justify="center">
                        <v-col>
                          <v-text-field
                            type="number"
                            hide-details
                            v-model="scale"
                            filled
                            label="Image Scale"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-text-field
                            type="number"
                            hide-details
                            v-model="quality"
                            filled
                            label="Image Quality"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-btn height="100%" @click="compressImage" class="mb-2">Compress Image</v-btn>
                        </v-col>

                        <v-col cols="12" style="width:100%;" class="pt-0" v-if="img">
                          <img v-if="img" alt :src="img" />
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn color="green darken-1" text @click="cleanCurrentComponent">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// The component used to upload and Blob-ify an image.
import PictureInput from "vue-picture-input";

// Used to crop the image.
import { Cropper } from "vue-advanced-cropper";

import base64toblob from "base64toblob";

export default {
  props: {
    row: Object
  },
  data: function() {
    return {
      dialog: true,
      aH: 1,
      aW: 1,

      currentItem: 0,

      img: "",
      scale: 100,
      quality: 75,
      originalSize: true,
      original: {},
      compressed: {},

      file: {},
      result: {},
      reader: {},
      imgSrc: ""
    };
  },
  mounted: function() {
    this.img = this.row.bilde;
    this.onChange();
  },
  watch: {
    scale() {
      return this.redraw();
    },
    quality() {
      return this.redraw();
    }
  },
  components: {
    PictureInput,
    Cropper
  },
  methods: {
    onChange() {
      this.file = this.row.bilde;
      this.reader = new FileReader();
      this.reader.readAsDataURL(
        base64toblob(this.file.split(",")[1], "image/jpeg")
      );
      this.reader.onload = this.fileOnLoad;
    },

    drawImage(imgUrl) {
      let canvas = document.createElement("canvas");
      this.canvas = canvas;
      let ctx = this.canvas.getContext("2d");
      let img = new Image();
      img.src = imgUrl;
      let scale = this.scale / 100;
      let width = img.width * scale;
      let height = img.height * scale;
      this.canvas.setAttribute("width", width);
      this.canvas.setAttribute("height", height);
      ctx.drawImage(img, 0, 0, width, height);
      let quality = this.quality ? this.quality / 100 : 1;
      let base64 = this.canvas.toDataURL("image/jpeg", quality);
      let fileName = this.result.file.name;
      fileName = ".jpeg";
      var stringLength = base64.length - "data:image/png;base64,".length;
      var sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
      let objToPass = {
        canvas: this.canvas,
        original: this.result,
        compressed: {
          blob: base64,
          base64: base64,
          name: fileName,
          file: this.buildFile(this.toBlob(base64), fileName)
        }
      };
      objToPass.compressed.size = Math.round(sizeInBytes / 1000) + " kB";
      objToPass.compressed.type = "image/jpeg";
      this.getFiles(objToPass);
    },

    redraw() {
      if (this.result.base64) {
        this.drawImage(this.result.base64);
      }
    },

    fileOnLoad() {
      let { file } = this;
      var stringLength =
        this.reader.result.length - "data:image/png;base64,".length;
      var sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(sizeInBytes / 1000) + " kB",
        base64: this.reader.result,
        file: file
      };
      this.result = fileInfo;
      this.drawImage(this.result.base64);
    },

    toBlob(imgUrl) {
      let blob = base64toblob(imgUrl.split(",")[1], "image/jpeg");
      let url = window.URL.createObjectURL(blob);
      return url;
    },

    buildFile(blob, name) {
      return new File([blob], name);
    },

    compressImage() {
      this.row.bilde = this.compressed.blob;
      this.rowWasChanged();
    },

    getFiles(obj) {
      this.img = obj.compressed.blob;
      this.original = obj.original;
      this.compressed = obj.compressed;
    },

    deleteEvent: function(index, array) {
      array.splice(index, 1);
    },

    onImageChange(image) {
      console.log(image);
      this.row.bilde = image;
      this.onChange();
      this.rowWasChanged();
      if (this.$refs.pictureInput.image) {
        console.log("Picture loaded.");
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },

    onImageRemoval() {
      this.row.bilde = "";
      this.rowWasChanged();
    },

    cleanCurrentComponent() {
      this.$emit("cleanCurrentComponent", "");
    },

    rowWasChanged() {
      this.$emit("rowWasChanged", this.row);
    },

    cropImage() {
      const { coordinates, canvas } = this.$refs.cropper.getResult();
      this.coordinates = coordinates;
      // You able to do different manipulations at a canvas
      // but there we just get a cropped image
      this.row.bilde = canvas.toDataURL();
      this.onChange();
    },

    ChangeAspect() {
      this.aH = this.aspectHeight;
      this.aW = this.aspectWidth;
      this.row.defaultAspectWidth = this.aspectWidth;
      this.row.defaultAspectHeight = this.aspectHeight;
    }
  }
};
</script>

<style scoped>
body {
  font-family: Roboto;
}
p {
  margin-bottom: 25px;
}
.image-info {
  margin: 15px 0;
}
.separator {
  margin: 0 5px;
}
input {
  width: 75%;
  display: block;
  padding: 5px;
  text-align: center;
  margin-bottom: 10px;
  max-width: 250px;
  border: 2px solid #ddd;
}
input:focus {
  border: 2px solid blue;
}
.compressor {
  display: none;
}
.button {
  display: inline-block;
  border-radius: 3px;
  background: #1a237e;
  color: white;
  padding: 7px 15px;
  border: 0;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
}
label {
  margin-bottom: 10px;
  display: block;
}
.input-group {
  margin: 25px 0;
}
.checkbox {
  margin: 15px 0 20px;
  background: #eee;
  padding: 10px 0;
}
.checkbox input {
  width: auto;
  display: inline-block;
}
img {
  margin: 0 auto;
  display: block;
}
a {
  margin: 25px 0 75px;
}

.btn {
  margin: 5px;
  font-size: small;
}

.cropper {
  width: 100%;
  background: #ddd;
}

.row {
  padding: 10px;
}

/* Important part */
.modal-dialog {
  overflow-y: initial !important;
}
.modal-body {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

@media (min-width: 768px) {
  .modal-xl {
    width: 90%;
    max-width: 1200px;
  }
}
</style>


