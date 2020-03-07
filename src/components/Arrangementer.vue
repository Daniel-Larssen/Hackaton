<template>
  <div style="text-align:center; " class="pb-5">
    <!-- Nav Bar som inneholder søke felt og selects -->
    <v-row align="center" class="px-3" style="background-color:lightgrey;">
      <v-col icon class="text-center">
        <v-btn @click="cleanCurrentComponent()" style="color:black">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>

      <v-col>
        <v-select
          hide-details
          :items="maneder"
          v-model="maned"
          item-text="text"
          item-value="value"
          placeholder="Alle"
          filled
          label="Måned"
        ></v-select>
      </v-col>

      <v-col>
        <v-select
          placeholder="Alle"
          hide-details
          :items="datoer"
          v-model="dato"
          item-text="text"
          item-value="text"
          filled
          label="Dato"
        ></v-select>
      </v-col>

      <v-col>
        <v-text-field placeholder="Alle" hide-details v-model="vert" filled label="Vert"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field hide-details filled v-model="soketekst" label="Søk"></v-text-field>
      </v-col>
      <v-col cols="1" v-if="currentItem==2">
        <v-row>
        <v-col cols="6" >
          <v-btn icon @click.stop="editorModeIsOn = !editorModeIsOn">
            <v-icon>mdi-wrench</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn icon @click.stop="currentComponent='appNyttArrangement'">
            <v-icon>mdi-file-plus</v-icon>
          </v-btn>
        </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Arrangement, Skal-på, og Egne arrangementer ligger her -->
    <v-tabs grow class="mx-1" v-model="currentItem">
      <v-tab>Arrangementer Liste</v-tab>
      <v-tab @click="hentSkal()">Interessert</v-tab>
      <v-tab>Egne Arrangementer</v-tab>

      <!-- Liste over arrangementer -->
      <v-tab-item>
        <v-row class="pa-4 mx-1 display-flex">
          <v-col
            @click="detaljer(arrangement)"
            cols="3"
            class="arrangement"
            v-for="arrangement in arrangementListe"
            :key="arrangement.index"
          >
            <v-img :src="arrangement.bilde" style="width:100%;"></v-img>
            <div style="background-color:white;">
              <h3 class="mb-0" v-html="$sanitize(arrangement.tittel)"></h3>
              <br />

              <h6
                class="mt-n4"
                style="white-space: pre-line;"
                v-html="$sanitize(arrangement.vert + '<br>' + arrangement.sted + ' ' + arrangement.tidspunkt + ' ' + arrangement.dato + '/' + arrangement.maned)"
              ></h6>

              <p style="text-align:justify;" v-html="$sanitize(arrangement.tekst)"></p>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- Arrangementer som bruker har trykket SKAL på -->
      <v-tab-item>
        <v-row class="pa-4 mx-1 display-flex">
          <v-col
            cols="3"
            @click="detaljer(arrangement)"
            class="arrangement"
            v-for="arrangement in arrangementListe"
            :key="arrangement.index"
          >
            <v-img :src="arrangement.bilde" style="width:100%;"></v-img>
            <div style="background-color:white;">
              <h3 class="mb-0" v-html="$sanitize(arrangement.tittel)"></h3>
              <br />

              <h6
                class="mt-n4"
                style="white-space: pre-line;"
                v-html="$sanitize(arrangement.vert + '<br>' + arrangement.sted + ' ' + arrangement.tidspunkt + ' ' + arrangement.dato + '/' + arrangement.maned)"
              ></h6>

              <p style="text-align:justify;" v-html="$sanitize(arrangement.tekst)"></p>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- Egne Arrangementer og deres editorer -->
      <v-tab-item>
        <v-row class="pa-4 mx-1 display-flex">
          <v-col
            cols="3"
            class="arrangement"
            v-for="arrangement in arrangementListe"
            :key="arrangement.index"
          >
            <!-- Her er editoren som blir vist når editormodeIsOn rt true -->
            <v-row v-if="!editorModeIsOn" class="pa-2">
              <v-img :src="arrangement.bilde" style="width:100%;"></v-img>
              <div>
                <h3 class="mb-0" v-html="$sanitize(arrangement.tittel)"></h3>
                <br />

                <h6
                  class="mt-n4"
                  style="white-space: pre-line;"
                  v-html="$sanitize(arrangement.vert + '<br>' + arrangement.sted + ' ' + arrangement.tidspunkt + ' ' + arrangement.dato + '/' + arrangement.maned)"
                ></h6>

                <p style="text-align:justify;" v-html="$sanitize(arrangement.tekst)"></p>
              </div>
            </v-row>

            <v-row v-else class="pa-2">
              <!-- The  of Image -->
              <v-col @click="detaljer(arrangement)" cols="12">
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

              <v-btn
                @click="slettArrangement(arrangement.id)"
                class="mb-2"
                style="color:black"
              >Slett Arrangement</v-btn>

              <v-btn
                @click="oppdaterArrangement(arrangement)"
                style="color:black"
              >Oppdater Arrangement</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>

    <component
      :is="currentComponent"
      :arrangement="arrangement"
      @cleanCurrentComponent="currentComponent = $event"
    ></component>
  </div>
</template>

<script>
import NyttArrangement from "./NyttArrangement.vue";
import ArrangementDetaljer from "./ArrangementDetaljer.vue";
import AppImageUpload from "./ImageUpload.vue";

import PictureInput from "vue-picture-input";

export default {
  data: function() {
    return {
      editorModeIsOn: false,
      arrangement: {},
      currentComponent: "",

      // v-model for søk.
      maned: "",
      dato: "",
      soketekst: "",
      vert: "",

      currentItem: 0,
      skal: false,
      maneder: [
        { text: "Alle", value: "" },
        { text: "Januar", value: "1" },
        { text: "Februar", value: "2" },
        { text: "Mars", value: "3" },
        { text: "April", value: "4" },
        { text: "Mai", value: "5" },
        { text: "Juni", value: "6" },
        { text: "Juli", value: "7" },
        { text: "August", value: "8" },
        { text: "September", value: "9" },
        { text: "Oktober", value: "10" },
        { text: "November", value: "11" },
        { text: "Desember", value: "12" }
      ],
      datoer: [
        { text: "Alle" },
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "7" },
        { text: "8" },
        { text: "9" },
        { text: "10" },
        { text: "11" },
        { text: "12" },
        { text: "13" },
        { text: "14" },
        { text: "15" },
        { text: "16" },
        { text: "17" },
        { text: "18" },
        { text: "19" },
        { text: "20" },
        { text: "21" },
        { text: "22" },
        { text: "23" },
        { text: "24" },
        { text: "25" },
        { text: "26" },
        { text: "27" },
        { text: "28" },
        { text: "29" },
        { text: "30" }
      ],
      alleSkal: []
    };
  },
  components: {
    appNyttArrangement: NyttArrangement,
    appArrangementDetaljer: ArrangementDetaljer,
    PictureInput,
    AppImageUpload
  },
  computed: {
    app() {
      return this.$store.state.app;
    },
    // Denne er et rot.
    arrangementListe() {
      let liste = [];

      for (var n = 0; n < this.app.arrangementListe.length; n++) {
        if (
          this.app.arrangementListe[n].maned == this.maned ||
          this.maned == ""
        )
          if (
            this.app.arrangementListe[n].dato == this.dato ||
            this.dato == "" ||
            this.dato == "Alle"
          )
            if (
              this.soketekst == "" ||
              this.app.arrangementListe[n].tittel.includes(this.soketekst)
            )
              if (
                this.app.arrangementListe[n].vert.includes(this.vert) ||
                this.vert == "2"
              )
                if (this.currentItem == 0) {
                  liste.push(this.app.arrangementListe[n]);

                  // Hvis bruker befinner seg på 'Skap på'-tabben
                } else if (this.currentItem == 1) {
                  for (let e = 0; e < this.alleSkal.length; e++) {
                    if (
                      this.alleSkal[e].arrangement ==
                      this.app.arrangementListe[n].id
                    ) {
                      liste.push(this.app.arrangementListe[n]);
                    }
                  }
                  // Hvis bruker finner seg på 'Egne'-tabben
                } else if (
                  this.app.arrangementListe[n].skaper ==
                  this.$store.state.userData.id
                ) {
                  liste.push(this.app.arrangementListe[n]);
                }
      }

      return liste;
    }
  },
  methods: {
    // Rensjer componentet som dette componentet ligger i.
    cleanCurrentComponent() {
      this.$emit("cleanCurrentComponent", "");
    },
    // Åpner detaljer om et arrangement.
    detaljer(arrangement) {
      this.arrangement = arrangement;
      this.currentComponent = "appArrangementDetaljer";
    },
    slettArrangement(arrangementId) {
      this.$http
        .delete(
          "https://hackathon-daniel.firebaseio.com/arrangementer/" +
            this.$store.state.userData.id +
            "" +
            arrangementId +
            ".json"
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
    },
    oppdaterArrangement(arrangement) {
      this.$http
        .put(
          "https://hackathon-daniel.firebaseio.com/arrangementer/" +
            this.$store.state.userData.id +
            "" +
            arrangement.id +
            ".json",
          arrangement
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
    sorter() {
      if (this.sortType == "1") {
        // If the user wants to sort the objects after text length.
        this.app.arrangementListe.sort(function(a, b) {
          var keyA = a.maned,
            keyB = b.maned;
          // Compare the 2 dates
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      } else if (this.sortType == "2") {
        // If the user
        this.row.objects.sort(function(a, b) {
          var keyA = a.dato,
            keyB = b.dato;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      } else if (this.sortType == "3") {
        // If the user
        this.row.objects.sort(function(a, b) {
          var keyA = a.vert,
            keyB = b.vert;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      }
    },
    // Henter her inn alle 'Skal' som tillhører brukeren, ville vært bedre med en query.
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
            if (this.$store.state.userData.id == resultArray[i].skaper) {
              this.alleSkal.push(resultArray[i]);
            }
          }
        });
    }
  },
  created() {
    this.hentSkal();
  }
};
</script>

<style>
.arrangement {
  border: double 5px grey;
  background-color: white;
}
</style>
