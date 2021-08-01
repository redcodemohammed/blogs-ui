<template>
  <div></div>
</template>
<script>
export default {
  name: "logout",
  created() {
    this.$store.dispatch("set_token", null);
    this.$router.push("/");
  },
};
</script>
