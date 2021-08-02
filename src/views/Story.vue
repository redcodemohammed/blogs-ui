<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-skeleton-loader type="card" v-if="is_loading" />
        <v-card class="mx-auto" v-else>
          <v-img
            max-height="400px"
            class="white--text align-end"
            :src="blog.art"
          >
            <v-card-title>{{ blog.title }}</v-card-title>
          </v-img>

          <v-card-text class="body-1 text-right" v-text="blog.body">
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "story-view",
  data: () => ({
    is_loading: false,
    blog: null,
  }),
  async created() {
    const id = this.$route.params.id;

    const query = `{
  blog(id: "${id}") {
    id
    title
    body
    art
  }
}
`;
    this.is_loading = true;
    const res = await this.$api(query);
    const res_data = await res.json();

    if (res_data.errors) {
      this.$store.dispatch("toggle_alert", {
        text: "حدث خطأ اثناء تحميل الصفحة",
        color: "red lighten-1",
        is_shown: true,
      });
    } else {
      this.blog = res_data.data.blog;
    }
    this.is_loading = false;
  },
};
</script>
