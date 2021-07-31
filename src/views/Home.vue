<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" order-md="1" order="0">
        <v-card min-height="100vh" rounded="lg">
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="(card, index) in cards"
                :key="index"
                :cols="card.flex"
              >
                <story-card
                  :id="index.toString()"
                  :src="card.src"
                  :title="card.title"
                  :is_saved="card.is_saved"
                  :is_fav="card.is_fav"
                  :tags="card.tags"
                  @toggle_fav="toggle_fav"
                  @toggle_saved="toggle_saved"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" order-md="0" order="1">
        <v-row>
          <v-col cols="12">
            <v-card rounded>
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
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto">
              <v-toolbar dark>
                <v-toolbar-title>الصوتيات</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list three-line>
                <v-subheader v-text="'الاحدث'"></v-subheader>
                <template v-for="(song, index) in songs">
                  <v-divider
                    v-if="song.divider"
                    :key="index"
                    class="mx-2"
                  ></v-divider>

                  <v-list-item v-else :key="song.title">
                    <v-list-item-avatar>
                      <v-img :src="song.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="song.title"
                      ></v-list-item-title>
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
import in_between from "../components/layout/in_between.vue";

export default {
  name: "Home",

  components: {
    "in-between": in_between,
  },

  data: () => ({
    genres: ["تصنيف 1", "تصنيف 2"],
    cards: [
      {
        title: "أهداف المرحلة (32)",
        src: "https://1.bp.blogspot.com/-Eql9yAi2Fyk/X6-JLODj9aI/AAAAAAAAP3E/COktYDJFyJ4uE3Eps_834CC2zQxWYpD-wCLcBGAsYHQ/w400-h396/IMG_20201114_093505.jpg",
        flex: 12,
        is_saved: false,
        is_fav: false,
        tags: ["قصة قصيرة"],
      },
      {
        title: "أجهزة عصبية",
        src: "https://1.bp.blogspot.com/-_ZVnHGqmEu4/YLZ-3f2m2bI/AAAAAAAATnk/fNpyRo0AZgwUz0AIEvjqMxnts_wIDFSbwCPcBGAsYHg/w281-h400/IMG_20210601_140308.jpg",
        flex: 6,
        is_saved: false,
        is_fav: false,
        tags: [],
      },
      {
        title: "بس انت ممكن تحضنني",
        src: "https://1.bp.blogspot.com/-uGARSjCF6tw/YNeC-rSs4fI/AAAAAAAAT_U/yE7JlX2hKHMVsThAuk6bs6-jkyQA-hucACPcBGAsYHg/s1080/Screenshot_2021-06-26-21-40-33-17.jpg",
        flex: 6,
        is_saved: false,
        is_fav: false,
        tags: [],
      },
      {
        title: "أنا وحبيبي سننجب ثعلبًا",
        src: "https://1.bp.blogspot.com/-Ln2PPCrmPv0/YIS1vdKrQyI/AAAAAAAATQw/qoS8OuD2VAsK0Y6D8tMKgYCA_DrbT198gCLcBGAsYHQ/s960/FB_IMG_1619309928291.jpg",
        flex: 6,
        is_saved: false,
        is_fav: false,
        tags: [],
      },
      {
        title: "مسك الليل",
        src: "https://1.bp.blogspot.com/-tgO-ZwogbI8/YNCja2hZQCI/AAAAAAAAT7Q/M7087reQkxkwQuXAW58_aEVsYZibqi-6wCLcBGAsYHQ/w323-h400/Screenshot_2021-06-15-20-33-23-39.jpg",
        flex: 6,
        is_saved: false,
        is_fav: false,
        tags: [],
      },
    ],
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
    ],
  }),
  methods: {
    toggle_fav(id) {
      // TODO: save the story to local storage
      this.cards = this.cards.map((card, index) => {
        if (index == id) {
          card.is_fav = !card.is_fav;

          this.$store.dispatch("toggle_alert", {
            text: card.is_fav ? "تمت الاضافة للمفضلة" : "تم الازالة من المفضلة",
            color: "green lighten-1",
            is_shown: true,
          });
        }
        return card;
      });
    },
    toggle_saved(id) {
      // TODO: save the story to local storage
      this.cards = this.cards.map((card, index) => {
        if (index == id) {
          card.is_saved = !card.is_saved;
          this.$store.dispatch("toggle_alert", {
            text: card.is_saved
              ? "تمت الاضافة للمحفوضات"
              : "تم الازالة من المحفوضات",
            color: "green lighten-1",
            is_shown: true,
          });
        }
        return card;
      });
    },
  },
};
</script>
