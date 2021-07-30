import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        background: '#D4B39D',
      },
    },
    // dark: true
  },
});
