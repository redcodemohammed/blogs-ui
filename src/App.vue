<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <appbar />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <v-speed-dial
        v-model="floating_button"
        v-if="is_logged_in"
        fab
        dark
        fixed
        bottom
        left
        direction="right"
      >
        <template v-slot:activator>
          <v-btn v-model="floating_button" dark fab>
            <v-icon v-if="floating_button"> mdi-close </v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab dark small color="green" v-bind="attrs" v-on="on">
              <v-icon>mdi-music-note-plus</v-icon>
            </v-btn>
          </template>
          <span>اغنية جديدة</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on">
              <v-icon>mdi-pen-plus</v-icon>
            </v-btn>
          </template>
          <span>قصة جديدة</span>
        </v-tooltip>

        <!-- <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn> -->
      </v-speed-dial>
    </v-main>

    <!-- <v-footer app>

    </v-footer> -->
    <v-snackbar timeout="-1" bottom :value="alert.is_shown" multi-line>
      {{ alert.text }}

      <template text v-slot:action="{ attrs }">
        <v-btn
          :color="alert.color"
          text
          v-bind="attrs"
          @click="
            $store.dispatch('toggle_alert', {
              text: null,
              color: null,
              is_shown: false,
            })
          "
        >
          اغلاق
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&display=swap");
#app {
  font-family: "Cairo", sans-serif !important;
}

.v-card__title {
  word-break: keep-all !important;
}
</style> 

<script>
import appbar from "./components/layout/appbar.vue";

export default {
  name: "App",
  components: { appbar },
  computed: {
    is_logged_in() {
      // TODO: check if the user is logged in
      return true;
    },
    alert() {
      return this.$store.getters.alert;
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data: () => ({
    floating_button: false,
  }),
};
</script>
