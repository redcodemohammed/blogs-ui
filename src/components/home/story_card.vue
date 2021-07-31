<template>
  <v-card>
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.5)"
      height="200px"
    >
      <v-card-title v-text="title"></v-card-title>
    </v-img>
    <v-card-actions>
      <v-btn color="blue" icon>
        <v-icon>mdi-share-variant-outline</v-icon>
      </v-btn>
      <v-btn @click="toggle_saved" color="green" icon>
        <v-icon>{{
          is_saved ? "mdi-bookmark" : "mdi-bookmark-outline"
        }}</v-icon>
      </v-btn>
      <v-btn color="red" icon @click="toggle_fav">
        <v-icon>{{ is_fav ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>

      <div class="chips">
        <v-chip
          v-for="(tag, i) in tags"
          :key="i"
          :class="{ 'mx-3': i > 0 }"
          link
          to="/genres/khawater"
          >{{ tag }}</v-chip
        >
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "story_card",
  props: {
    id: { type: String, required: true },
    src: { type: String, required: true },
    title: { type: String, required: true },
    tags: { type: Array, default: () => [] },
    is_fav: { type: Boolean, default: false },
    is_saved: { type: Boolean, default: false },
  },

  methods: {
    toggle_fav() {
      this.$emit("toggle_fav", this.$props.id);
    },
    toggle_saved() {
      this.$emit("toggle_saved", this.$props.id);
    },
  },
};
</script>
<style>
.chips {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0.6em) translateX(0.6em);
}
</style>
