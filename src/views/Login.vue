<template>
  <v-container style="height: 60vh">
    <v-row justify="center" align="center" style="height: 100%">
      <v-col cols="12" sm="10" md="6" lg="4">
        <v-card :loading="is_loading">
          <v-toolbar>
            <v-toolbar-title> تسجيل الدخول </v-toolbar-title></v-toolbar
          >
          <v-card-text>
            <v-form ref="login_form" v-model="form.is_valid" @submit="login">
              <v-text-field
                :disabled="is_loading"
                :rules="form.rules.username"
                v-model="form.data.username"
                outlined
                type="text"
                label="اسم المستخدم"
              />
              <v-text-field
                :disabled="is_loading"
                :rules="form.rules.password"
                v-model="form.data.password"
                outlined
                type="password"
                label="كلمة المرور"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-4">
            <v-btn @click="login" :disabled="is_loading || !form.is_valid" block
              >تسجيل الدخول</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  title: "تسجيل الدخول",
  name: "login-view",
  data: () => ({
    is_loading: false,
    form: {
      is_valid: true,
      rules: {
        username: [(v) => !!v || "هذا الحقل مطلوب"],
        password: [(v) => !!v || "هذا الحقل مطلوب"],
      },
      data: {
        username: null,
        password: null,
      },
    },
  }),

  methods: {
    async login() {
      if (this.$refs.login_form.validate()) {
        const query = `
          {
            login(username: "${this.form.data.username}", password: "${this.form.data.password}") {
                token
              }
          }
        `;
        this.is_loading = true;
        const res = await this.$api(query);
        const res_data = await res.json();

        if (res_data.errors) {
          this.$store.dispatch("toggle_alert", {
            text: "اسم المستخدم او كلمة المرور غير صحيحة",
            color: "red lighten-1",
            is_shown: true,
          });
        } else {
          this.$store.dispatch("set_token", res_data.data.login.token);
          this.$router.push("/");
        }
      }

      this.is_loading = false;
    },
  },
};
</script>
