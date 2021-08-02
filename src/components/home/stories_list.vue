<template>
  <div>
    <v-skeleton-loader type="card" v-if="is_loading" />
    <v-card rounded="lg" v-else>
      <v-toolbar>
        <v-toolbar-title>احدث القصص</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(story, index) in stories"
            :key="index"
            :cols="story.flex"
          >
            <story-card
              :id="story.id"
              :src="story.src"
              :title="story.title"
              :is_saved="story.is_saved"
              :is_fav="story.is_fav"
              :tags="story.tags"
              @toggle_fav="toggle_fav"
              @toggle_saved="toggle_saved"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import story_card from "./story_card.vue";
import is_fav from "../../mixins/is_fav";
import is_saved from "../../mixins/is_saved";
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
        blog.is_saved = is_saved(blog.id);
        blog.is_fav = is_fav(blog.id);
        blog.src = blog.art;
        return blog;
      });
    }
    this.is_loading = false;
  },
  methods: {
    toggle_fav(id) {
      // TODO: save the story to local storage
      this.stories = this.stories.map((story) => {
        if (story.id == id) {
          story.is_fav = !story.is_fav;
          let fav_items = JSON.parse(localStorage.getItem("fav_items") || "[]");
          if (!story.is_fav) {
            // remove it from fav:
            fav_items = fav_items.filter((item) => item.id !== id);
            localStorage.setItem("fav_items", JSON.stringify(fav_items));
          } else {
            // add it to fav
            fav_items.push(story);
            localStorage.setItem("fav_items", JSON.stringify(fav_items));
          }
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
      this.stories = this.stories.map((story) => {
        if (story.id == id) {
          story.is_saved = !story.is_saved;
          let saved_items = JSON.parse(
            localStorage.getItem("saved_items") || "[]"
          );
          if (!story.is_saved) {
            // remove it from fav:
            saved_items = saved_items.filter((item) => item.id !== id);
            localStorage.setItem("saved_items", JSON.stringify(saved_items));
          } else {
            // add it to fav
            saved_items.push(story);
            localStorage.setItem("saved_items", JSON.stringify(saved_items));
          }
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
