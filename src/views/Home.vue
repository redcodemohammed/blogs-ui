<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" order-md="1" order="0">
        <v-row>
          <v-col cols="12">
            <most-read-stories />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <stories-list />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" order-md="0" order="1">
        <v-row>
          <v-col cols="12">
            <genres-list />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <music-list />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <in-between />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import in_between from "../components/home/in_between.vue";
import music_list from "../components/home/music_list.vue";
import genres_list from "../components/home/genres_list.vue";
import stories_list from "../components/home/stories_list.vue";
import most_read_stories from "../components/home/most_read_stories.vue";

export default {
  title: "ماذا عن جين اودري؟",
  name: "Home",

  components: {
    "in-between": in_between,
    "music-list": music_list,
    "genres-list": genres_list,
    "stories-list": stories_list,
    "most-read-stories": most_read_stories,
  },
};
</script>
