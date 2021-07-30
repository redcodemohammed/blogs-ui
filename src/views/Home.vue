<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-sheet min-height="100vh" rounded="lg" color="transparent">
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
        </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card rounded>
              <v-list color="#A87B6F" class="lighten-3" rounded>
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
