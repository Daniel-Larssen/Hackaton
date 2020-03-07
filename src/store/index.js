import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Skulle egentlig ikke ha brukt vuex på denne applikasjonen, er altfor liten.
export default new Vuex.Store({
  state: {
    userData: {
      userEmail: "",
      userPassword: "",
      id: "",
      skal: []
    },
    app: {
      arrangementListe: [],
    }
  }
})
