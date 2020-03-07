<template>
  <v-app>
    <v-row v-if="currentComponent==''" style="text-align:center;">
      <v-dialog persistent v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>Arrangementer</v-card-title>
          <v-card-text>
            <v-container>


          <v-tabs grow class="mx-1">
            <v-tab>Login</v-tab>
            <v-tab>Ny Bruker</v-tab>


            <!-- Liste over arrangementer -->
            <v-tab-item>
              <v-row>
                <v-col cols="12">
                  <v-text-field hide-details v-model="user.userEmail" label="Epost/Brukernavn" filled></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field hide-details v-model="user.userPassword" label="Passoord" filled></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn @click="checkLogin" style="color:black">Login</v-btn>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col cols="12">
                  <v-text-field hide-details v-model="user.userEmail" label="Epost/Brukernavn" filled></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field hide-details v-model="user.userPassword" label="Passoord" filled></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn @click="lagBruker" style="color:black">Lag Bruker</v-btn>
                </v-col>
              </v-row>
            </v-tab-item>

          </v-tabs>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <component :is="currentComponent" @cleanCurrentComponent="currentComponent = $event"></component>
  </v-app>
</template>

<script>
import Arrangementer from "./components/Arrangementer.vue";

export default {
  data: function() {
    return {
      currentComponent: "",
      dialog: true,
      user: {
        userEmail: "",
        userPassword: "",
        id: "",
        skal: []
      }
    };
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    app() {
      return this.$store.state.app;
    }
  },
  components: {
    appArrangementer: Arrangementer
  },

  methods: {
    // Skjer når noen prøver å logge inn på siden.
    checkLogin() {
      console.log("Login");
      this.fetchData();
      this.fetchArrangement();
    },
    // Lager en bruker og legger den i databasen.
    lagBruker() {
      var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 6; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
      this.user.id = text;
      this.$store.state.userData = this.user;
      this.$http
        .post("https://hackathon-daniel.firebaseio.com/users.json", this.user)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    },
    // Veldig, Veldig usikker måte å gjøre dette på, men fungerer så lenge man ikke tenker på sikkerheten.
    // Ville heller brukt param, men ble stoppet pga CORS, ville og heller ha brukt Axios i etterkant.
    // TODO https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    fetchData() {
      this.$http
        .get(
          "https://cors-anywhere.herokuapp.com/https://hackathon-daniel.firebaseio.com/users.json"
        )
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }

          for (var i = 0; i < resultArray.length; i++) {
            if (
              resultArray[i].userEmail == this.user.userEmail &&
              resultArray[i].userPassword == this.user.userPassword
            ) {
              this.$store.state.userData = resultArray[i];
              this.fetchArrangement();
              this.currentComponent = "appArrangementer";
            }
          }
        });
    },
    // Henter her ut alle events som ligger inne i dadtabasen.
    fetchArrangement() {
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

<style>
button {
  width: 100%;
}
</style>
