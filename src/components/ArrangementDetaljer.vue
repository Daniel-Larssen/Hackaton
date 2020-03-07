<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="1900px" @click:outside="cleanCurrentComponent">
      <v-card>
        <v-card-title class="headline">{{ arrangement.tittel}}</v-card-title>

        <v-card-text>
          <v-container>
            <v-row class="py-0">
              <v-col cols="3" class="arrangement">
                <v-img :src="arrangement.bilde" style="width:100%;"></v-img>
                <div style=" text-align:center;">
                  <h3 class="mb-0" v-html="$sanitize(arrangement.tittel)"></h3>
                  <br />

                  <h6
                    class="mt-n4"
                    style="white-space: pre-line;"
                    v-html="$sanitize(arrangement.vert + '<br>' + arrangement.sted + ' ' +arrangement.tidspunkt + ' ' + arrangement.dato + '/' + arrangement.maned)"
                  ></h6>

                  <p style="text-align:justify;" v-html="$sanitize(arrangement.tekst)"></p>
                </div>
              </v-col>

              <v-col cols="6" class="arrangement">
                <v-row>
                  <v-col class="py-0 pr-0" cols="10">
                    <v-textarea
                      hide-details
                      filled
                      height="60px"
                      v-model="kommentar.tekst"
                      label="Skriv Kommentar Her"
                    ></v-textarea>
                  </v-col>
                  <v-col class="py-0" cols="2">
                    <v-btn @click="nyKommentar()" style="color:black; height:60px;">Post</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-for="melding in kommentarer" :key="melding.index" cols="4">
                    <v-card class="mx-auto">
                      <v-card-text>
                        <div v-text="melding.skaper"></div>
                        <div class="text--primary" v-text="melding.tekst"></div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="3" class="arrangement">
                <v-btn @click="nySkal()" style="color:black; height:60px;">Skal</v-btn>

                <v-row>
                  <v-chip
                    v-for="skal in alleSkal"
                    class="ma-2"
                    :key="skal.index"
                    v-text="skal.skaper"
                  >Default</v-chip>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cleanCurrentComponent">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <component
      v-bind:is="currentComponent"
      :currentComponent="currentComponent"
      :row="arrangement"
      @cleanCurrentComponent="currentComponent = $event"
    ></component>
  </v-row>
</template>

<script>
import AppImageUpload from "./ImageUpload.vue";

import PictureInput from "vue-picture-input";

export default {
  props: {
    arrangement: Object
  },
  data: function() {
    return {
      currentComponent: "",
      dialog: true,
      img: "",
      brukerSkal: false,

      // V-model objekter for kommentar og 'Skal'
      kommentar: {
        tekst: "",
        skaper: "",
        arrangement: this.arrangement.id
      },
      skal: {
        skaper: "",
        arrangement: this.arrangement.id
      },

      // Hvor kommentarer og 'Skal' blir lagret.
      kommentarer: [],
      alleSkal: []
    };
  },
  components: {
    AppImageUpload,
    PictureInput
  },
  computed: {
    app() {
      return this.$store.state.app;
    }
  },
  created() {
    // Henter inn kommentarer og 'Skal'
    this.kommentar.skaper == this.$store.state.userData.id;
    this.hentKommentarer();
    this.hentSkal();
  },
  methods: {
    cleanCurrentComponent() {
      this.$emit("cleanCurrentComponent", "");
    },

    // De fire  neste metodene er et rot, men har ikke tid til å lage ordentlig CRUD.
    nyKommentar() {
      var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 6; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
      this.kommentar.id = text;

      this.kommentar.skaper = this.$store.state.userData.id;

      this.$http
        .post(
          "https://hackathon-daniel.firebaseio.com/kommentarer.json",
          this.kommentar
        )
        .then(
          response => {
            console.log(response);
            this.hentKommentarer();
          },
          error => {
            console.log(error);
          }
        );
    },
    nySkal() {
      this.skal.skaper = this.$store.state.userData.id;

      let teller = 0;
      for (var i = 0; i < this.alleSkal.length; i++) {
        if (this.alleSkal[i].skaper == this.$store.state.userData.id) {
          teller++;
        }
      }

      if (teller > 0) {
        this.$http
          .delete(
            "https://hackathon-daniel.firebaseio.com/skal/" +
              this.$store.state.userData.id +
              "" +
              this.arrangement.id +
              ".json",
            this.skal
          )
          .then(
            response => {
              console.log(response);
              this.hentSkal();
            },
            error => {
              console.log(error);
            }
          );
      } else {
        this.$http
          .put(
            "https://hackathon-daniel.firebaseio.com/skal/" +
              this.$store.state.userData.id +
              "" +
              this.arrangement.id +
              ".json",
            this.skal
          )
          .then(
            response => {
              console.log(response);
              this.hentSkal();
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    hentSkal() {
      this.$http
        .get("https://hackathon-daniel.firebaseio.com/skal.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }

          this.alleSkal = [];
          for (var i = 0; i < resultArray.length; i++) {
            if (this.arrangement.id == resultArray[i].arrangement) {
              this.alleSkal.push(resultArray[i]);
            }
            if (this.$store.state.userData.id == resultArray[i].skaper) {
              this.brukerSkal = !this.brukerSkal;
            }
          }
        });
    },
    hentKommentarer() {
      this.$http
        .get("https://hackathon-daniel.firebaseio.com/kommentarer.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }

          this.kommentarer = [];
          for (var i = 0; i < resultArray.length; i++) {
            if (this.arrangement.id == resultArray[i].arrangement) {
              this.kommentarer.push(resultArray[i]);
            }
          }
        });
    }
  }
};
</script>
