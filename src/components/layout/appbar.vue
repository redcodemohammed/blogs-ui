<template>
  <v-app-bar app flat elevate-on-scroll>
    <!-- shrink-on-scroll
    elevate-on-scroll
    fade-img-on-scroll -->
    <!-- src="https://picsum.photos/1920/1080?random" -->
    <template v-slot:img="{ props }">
      <!-- gradient="to top right, rgba(212, 179, 157,0.7), rgba(168, 123, 111, 0.7)" -->
      <v-img v-bind="props"></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>عنوان</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
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
