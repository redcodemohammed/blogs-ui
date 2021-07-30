import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import story_card from "./components/layout/story_card.vue";

Vue.config.productionTip = false

Vue.component('story-card', story_card)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
