<template>
  <v-card rounded>
    <v-toolbar>
      <v-toolbar-title>التصنيفات</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list class="lighten-3" rounded>
      <v-list-item v-for="(genre, i) in genres" :key="i" link>
        <v-list-item-content>
          <v-list-item-title class="pa-1">
            {{ genre }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item link color="grey lighten-4">
        <v-list-item-content>
          <v-list-item-title> اعادة تحميل </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "genres_list",
  data: () => ({
    genres: ["تصنيف 1", "تصنيف 2"],
  }),
};
</script>
