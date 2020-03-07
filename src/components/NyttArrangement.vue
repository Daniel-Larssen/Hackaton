<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="800px" @click:outside="cleanCurrentComponent">
      <v-card>
        <v-card-title class="headline">Nytt Arrangement</v-card-title>

        <v-card-text>
          <v-container>
            <v-row class="py-0">
              <!-- The  of Image -->
              <v-col cols="12">
                <v-img
                  @click="currentComponent='appImageUpload'"
                  max-height="175"
                  contain
                  :src="arrangement.bilde"
                ></v-img>

                <v-btn
                  @click="currentComponent='appImageUpload'"
                  class="my-2"
                  style="color:black"
                >Legg Til Bilde</v-btn>
              </v-col>

              <v-col cols="12">
                <v-textarea hide-details filled v-model="arrangement.tekst" label="Tekst"></v-textarea>
              </v-col>

              <v-row class="py-0">
                <v-col>
                  <v-text-field hide-details v-model="arrangement.tittel" label="Tittel" filled></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field hide-details v-model="arrangement.sted" label="Sted" filled></v-text-field>
                </v-col>
              </v-row>

              <v-row class="py-0">
                <v-col>
                  <v-text-field
                    hide-details
                    v-model="arrangement.vert"
                    label="Arrangement Vert"
                    filled
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    hide-details
                    type="number"
                    v-model="arrangement.maned"
                    label="Måned"
                    filled
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    hide-details
                    type="number"
                    v-model="arrangement.dato"
                    label="Dato"
                    filled
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    hide-details
                    type="time"
                    v-model="arrangement.tidspunkt"
                    label="Tidspunkt"
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
              

              <v-col cols="12">
                <v-btn @click="nyttArrangement()" class="my-2" style="color:black">Lag Arrangement</v-btn>
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
// The Image-upload where one can upload the row image.
import AppImageUpload from "./ImageUpload.vue";

// The Picture Upload Component.
import PictureInput from "vue-picture-input";

export default {
  props: {
    arrangementPre: Object
  },
  data: function() {
    return {
      currentComponent: "",
      dialog: true,
      img: "",

      // Her bygges arrangementet opp før det blir sendt.
      arrangement: {
        tekst: "",
        tittel: "",
        tidspunkt: "",
        bilde: "",
        vert: "",
        maned: "",
        dato: "",
        id: "",
        skaper: ""
      }
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
  methods: {
    cleanCurrentComponent() {
      this.$emit("cleanCurrentComponent", "");
    },

    nyttArrangement() {
      var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 4; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
      this.arrangement.id = text;

      this.arrangement.skaper = this.$store.state.userData.id;

      this.$http
        .put(
          "https://hackathon-daniel.firebaseio.com/arrangementer/"+ this.$store.state.userData.id + "" + this.arrangement.id + ".json",
          this.arrangement
        )
        .then(
          response => {
            console.log(response);
            this.hentArrangement();
          },
          error => {
            console.log(error);
          }
        );
    },
    hentArrangement() {
      this.$http
        .get("https://hackathon-daniel.firebaseio.com/arrangementer.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          
          this.app.arrangementListe = resultArray;
        });
    }
  }
};
</script>
