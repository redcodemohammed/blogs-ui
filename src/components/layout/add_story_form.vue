<template>
  <v-row justify="center">
    <v-dialog
      width="700px"
      :value="active"
      v-model="is_shown"
      transition="dialog-bottom-transition"
    >
      <v-card :loading="is_loading">
        <v-toolbar app dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>قصة جديدة</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              :disabled="is_loading"
              :loading="is_loading"
              dark
              text
              @click="upload"
            >
              حفظ
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="pa-5">
          <v-form ref="form" v-model="form.valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-progress-linear
                  v-if="upload_precent != 0 && upload_precent != 100"
                  v-model="upload_precent"
                ></v-progress-linear>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  clearable
                  prepend-inner-icon="mdi-text"
                  outlined
                  label="العنوان"
                  required
                  v-model="form.data.title"
                  :disabled="is_loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                  prepend-inner-icon="mdi-camera"
                  prepend-icon=""
                  outlined
                  multiple
                  label="غلاف القصة"
                  @change="on_select_image"
                  :disabled="is_loading"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  outlined
                  prepend-inner-icon="mdi-tag"
                  multiple
                  small-chips
                  label="التصنيفات"
                  :items="genres"
                  v-model="form.data.tags"
                  :disabled="is_loading"
                  @click="load_genres"
                ></v-combobox>
              </v-col>
            </v-row>
            <v-divider class="ma-5"></v-divider>
            <v-row>
              <v-col>
                <v-textarea
                  outlined
                  label="المحتوى"
                  prepend-inner-icon="mdi-text-box-multiple-outline"
                  v-model="form.data.body"
                  :disabled="is_loading"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-divider class="ma-5"></v-divider>
            <v-row>
              <v-col>
                <v-file-input
                  prepend-inner-icon="mdi-pdf-box"
                  prepend-icon=""
                  outlined
                  multiple
                  label="القصة كملف"
                  :disabled="is_loading"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import firebase from "firebase/app";
import "firebase/storage";

export default {
  props: {
    active: { type: Boolean, default: false },
  },
  watch: {
    async is_shown() {
      if (!this.is_shown) {
        this.close();
      }
    },
    active() {
      this.is_shown = this.active;
    },
  },
  data() {
    return {
      image_data: null,
      upload_precent: 0,
      is_shown: false,
      is_loading: false,
      genres: [],
      form: {
        valid: true,
        data: {
          title: null,
          picture: null,
          tags: [],
          body: null,
          pdf_file: null,
        },
        rules: {},
      },
    };
  },
  async created() {
    await this.load_genres();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async load_genres() {
      const query = `
          {
            tags
          }
        `;
      const res = await this.$api(query);
      const res_data = await res.json();

      if (res_data.errors) {
        this.$store.dispatch("toggle_alert", {
          text: "حدث خطأ اثناء تحميل التصنيفات",
          color: "red lighten-1",
          is_shown: true,
        });
      } else {
        this.genres = res_data.data.tags;
      }
    },
    on_select_image(event) {
      this.picture = null;
      this.image_data = event[0];
    },
    async upload() {
      this.is_loading = true;
      const storage_ref = firebase
        .storage()
        .ref(this.image_data.name)
        .put(this.image_data);

      storage_ref.on(
        "state_changed",
        (snap) => {
          this.upload_precent = (snap.bytesTransferred / snap.totalBytes) * 100;
        },
        (error) => {
          this.$store.dispatch("toggle_alert", {
            text: error.message,
            color: "red lighten-1",
            is_shown: true,
          });
        },
        () => {
          this.upload_precent = 100;
          storage_ref.snapshot.ref.getDownloadURL().then((url) => {
            this.form.data.picture = url;
            this.submit();
          });
        }
      );
    },
    async submit() {
      const query = `mutation {
      addBlog(
        title:"${this.form.data.title}",
        body: "${this.form.data.body.split("\n").join("@new_line@")}", 
        tags: [${this.form.data.tags.map((el) => `"${el}"`).join()}]
        pdf_link: "https://google.com",
        art:"${this.form.data.picture}") 
        {
          id
        }
    }
`;
      const res = await this.$api(query);
      const res_data = await res.json();

      if (res_data.errors) {
        this.$store.dispatch("toggle_alert", {
          text: "حدث خطأ اثناء النشر ",
          color: "red lighten-1",
          is_shown: true,
        });
      } else {
        this.$store.dispatch("toggle_alert", {
          text: "تم النشر بنجاح",
          color: "green lighten-1",
          is_shown: true,
        });
      }
      this.is_loading = false;
      location.reload();
    },
  },
};
</script>
