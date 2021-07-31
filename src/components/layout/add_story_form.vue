<template>
  <v-row justify="center">
    <v-dialog
      width="700px"
      :value="active"
      v-model="is_shown"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>قصة جديدة</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="close"> حفظ </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="pa-5">
          <v-form ref="form" v-model="form.valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  clearable
                  prepend-inner-icon="mdi-text"
                  outlined
                  v-model="form.data.title"
                  :rules="form.rules.title"
                  label="العنوان"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                  prepend-inner-icon="mdi-camera"
                  prepend-icon=""
                  outlined
                  multiple
                  label="غلاف القصة"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  outlined
                  prepend-inner-icon="mdi-tag"
                  multiple
                  small-chips
                  label="التصنيفات"
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
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="warning" @click="resetValidation"> الغاء </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template><script>
export default {
  props: {
    active: { type: Boolean, default: false },
  },
  watch: {
    is_shown() {
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
      is_shown: false,
      form: {
        valid: true,
        data: { title: "" },
        rules: {
          title: [(v) => !!v || "العنوان مطلوب"],
        },
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
