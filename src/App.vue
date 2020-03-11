<template>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getData", "initializeCart"])
  },
  created() {
    this.getData();
    this.initializeCart(this.$store);
  }
};
</script>