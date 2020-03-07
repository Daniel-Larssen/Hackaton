import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
import sanitizeHTML from 'sanitize-html';
Vue.prototype.$sanitize = sanitizeHTML;

Vue.use(VueResource);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
