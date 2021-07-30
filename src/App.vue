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

      <v-btn v-if="is_logged_in" fab dark fixed bottom left color="">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
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
};
</script>
