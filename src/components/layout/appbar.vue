<template>
  <header>
    <v-app-bar app flat elevate-on-scroll hide-on-scroll>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>ماذا عن جين اودري؟</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-responsive max-width="400px" class="hidden-sm-and-down">
        <v-text-field
          dense
          flat
          hide-details
          solo
          label="البحث"
          clearable
          clear-icon="mdi-close"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(option, index) in menu_option"
            :key="index"
            link
            :to="option.to"
          >
            <v-list-item-title>{{ option.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer right v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            ماذا عن جين اودري؟
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="ma-5"></v-divider>

      <v-list>
        <v-list-item
          v-for="(link, index) in drawer_links"
          link
          :to="link.to"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append v-if="is_logged_in">
        <div class="pa-2">
          <v-btn block link to="/logout"> تسجيل الخروج </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </header>
</template>
<script>
export default {
  name: "appbar",
  data: () => ({
    drawer: false,
    all_menu_option: [
      { title: "اعدادات الموقع", to: "/site-settings", require_auth: true },
      { title: "تسجيل الخروج", to: "/logout", require_auth: true },
      { title: "تسجيل الدخول", to: "/login", require_auth: false },
    ],
    drawer_links: [
      { title: "الصفحة الرئيسية", icon: "mdi-home", to: "/" },
      { title: "العناصر المفضلة", icon: "mdi-heart", to: "/fav" },
      { title: "العناصر المحفوضة", icon: "mdi-bookmark", to: "/saved" },
    ],
  }),
  computed: {
    is_logged_in() {
      return this.$store.getters.is_logged_in;
    },
    menu_option() {
      return this.is_logged_in
        ? this.all_menu_option.filter((item) => item.require_auth)
        : this.all_menu_option.filter((item) => !item.require_auth);
    },
  },
};
</script>
<style>
.v-app-bar-title__placeholder,
.v-app-bar-title__content {
  text-overflow: unset !important;
}
</style>
