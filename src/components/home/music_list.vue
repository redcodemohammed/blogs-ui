<template>
  <v-card class="mx-auto">
    <v-toolbar>
      <v-toolbar-title>الصوتيات</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list three-line>
      <v-subheader v-text="'الاحدث'"></v-subheader>
      <template v-for="(song, index) in songs">
        <v-divider v-if="song.divider" :key="index" class="mx-2"></v-divider>

        <v-list-item v-else :key="song.title">
          <v-list-item-avatar>
            <v-img :src="song.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="song.title"></v-list-item-title>
            <v-list-item-subtitle>
              <v-row justify="center">
                <v-col cols="3">
                  <v-btn color="red" icon>
                    <v-icon>mdi-play-box</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn color="green" icon>
                    <v-icon>mdi-download-box</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn color="blue" icon>
                    <v-icon>mdi-share-circle</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "music_list",
  data: () => ({
    songs: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend",
        subtitle: `Ali Connors I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Summer BBQ 4",
        subtitle: `to Alex, Scott, Jennifer Wish I could come, but I'm out of town this weekend.`,
      },
    ], //TODO: get music list from api
  }),
};
</script>
