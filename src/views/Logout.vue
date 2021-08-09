<template>
  <div></div>
</template>
<script>
export default {
  name: "logout",
  created() {
    this.$store.dispatch("set_token", null);
    localStorage.clear();
    this.$router.push("/");
  },
};
</script>
