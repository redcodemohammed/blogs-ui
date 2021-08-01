<template>
  <div>
    <v-skeleton-loader v-if="is_loading" type="card" />
    <v-card v-else>
      <v-toolbar>
        <v-toolbar-title> القصص الاكثر زيارة</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-carousel cycle interval="8000">
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
  </div>
</template>
<script>
import story_card from "./story_card.vue";

export default {
  name: "stories_list",
  components: {
    "story-card": story_card,
  },
  data: () => ({
    is_loading: false,
    stories: [],
  }),
  async created() {
    const query = `{
  blogs(limit: 2) {
    id
    title
    tags
    art
  }
}
`;
    this.is_loading = true;
    const res = await this.$api(query);
    const res_data = await res.json();

    if (res_data.errors) {
      this.$store.dispatch("toggle_alert", {
        text: "حدث خطأ اثناء تحميل احدث القصص",
        color: "red lighten-1",
        is_shown: true,
      });
    } else {
      this.stories = res_data.data.blogs.map((blog, index) => {
        blog.flex = index == 0 ? 12 : 6;
        blog.is_saved = false;
        blog.is_fav = false;
        blog.src = blog.art;
        return blog;
      });
    }
    this.is_loading = false;
  },
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
