<template>
  <v-app-bar app flat elevate-on-scroll>
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>ماذا عن جين اودري</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "appbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
.v-app-bar-title__placeholder,
.v-app-bar-title__content {
  text-overflow: unset !important;
}
</style>
