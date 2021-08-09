import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import api from "./plugins/api";
import titleMixin from './mixins/title_mixin'
import "./plugins/firebase";

Vue.config.productionTip = false
Vue.mixin(titleMixin)
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
