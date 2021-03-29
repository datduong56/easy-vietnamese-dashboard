<template>
  <HomeLayout>
    <Charts slot="chart" />
  </HomeLayout>
</template>

<script lang="ts">
import Vue from "vue";
import Charts from "@/components/Charts.vue";
import HomeLayout from "@/layouts/home-layout.vue";

export default Vue.extend({
  name: "Home",
  components: { HomeLayout, Charts },
});
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #fceabb, #f8b500);
}
</style>
