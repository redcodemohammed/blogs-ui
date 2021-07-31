<template>
  <v-footer class="mt-5" dark padless>
    <v-card flat tile class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider class="mx-5"></v-divider>

      <v-card-text style="width: 100vw" class="white--text">
        {{ new Date().getFullYear() }} — <strong>ماذا عن جين اودري؟</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
