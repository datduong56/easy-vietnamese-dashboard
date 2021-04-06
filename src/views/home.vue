<template>
  <Layout>
    <Charts slot="chart" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Charts from "@/components/Charts.vue";
import Layout from "@/layouts/layout.vue";

export default Vue.extend({
  name: "Home",
  components: { Layout, Charts },
});
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #fceabb, #f8b500);
}
</style>
