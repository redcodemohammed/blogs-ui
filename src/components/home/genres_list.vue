<template>
  <div>
    <v-skeleton-loader
      type="card"
      :loading="is_loading"
      v-if="is_loading"
    ></v-skeleton-loader>
    <v-card v-else rounded>
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
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "genres_list",
  data: () => ({
    genres: [],
    is_loading: true,
  }),
  async created() {
    const query = `
          {
            tags
          }
        `;
    this.is_loading = true;
    const res = await this.$api(query);
    const res_data = await res.json();

    if (res_data.errors) {
      this.$store.dispatch("toggle_alert", {
        text: "حدث خطأ اثناء تحميل التصنيفات",
        color: "red lighten-1",
        is_shown: true,
      });
    } else {
      //  this.genres =
      this.genres = res_data.data.tags;
    }
    this.is_loading = false;
  },
};
</script>
