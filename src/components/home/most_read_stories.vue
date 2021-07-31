<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title> القصص الاكثر زيارة</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-carousel cycle>
      <v-carousel-item v-for="(story, index) in stories" :key="index">
        <story-card
          :id="index.toString()"
          :src="story.src"
          :title="story.title"
          :is_saved="story.is_saved"
          :is_fav="story.is_fav"
          :tags="story.tags"
          :height="'400px'"
          @toggle_fav="toggle_fav"
          @toggle_saved="toggle_saved"
        />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script>
import story_card from "./story_card.vue";

export default {
  name: "stories_list",
  components: {
    "story-card": story_card,
  },
  data: () => ({
    stories: [
      {
        title: "أهداف المرحلة (32)",
        src: "https://1.bp.blogspot.com/-Eql9yAi2Fyk/X6-JLODj9aI/AAAAAAAAP3E/COktYDJFyJ4uE3Eps_834CC2zQxWYpD-wCLcBGAsYHQ/w400-h396/IMG_20201114_093505.jpg",
        flex: 12,
        is_saved: false,
        is_fav: false,
        tags: [{ text: "قصص قصيرة", to: "/genres/short_stories" }],
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
    ], // TODO: get stories from api
  }),
  methods: {
    toggle_fav(id) {
      // TODO: save the story to local storage
      this.stories = this.stories.map((story, index) => {
        if (index == id) {
          story.is_fav = !story.is_fav;

          this.$store.dispatch("toggle_alert", {
            text: story.is_fav
              ? "تمت الاضافة للمفضلة"
              : "تم الازالة من المفضلة",
            color: "green lighten-1",
            is_shown: true,
          });
        }
        return story;
      });
    },
    toggle_saved(id) {
      // TODO: save the story to local storage
      this.stories = this.stories.map((story, index) => {
        if (index == id) {
          story.is_saved = !story.is_saved;
          this.$store.dispatch("toggle_alert", {
            text: story.is_saved
              ? "تمت الاضافة للمحفوضات"
              : "تم الازالة من المحفوضات",
            color: "green lighten-1",
            is_shown: true,
          });
        }
        return story;
      });
    },
  },
};
</script>
