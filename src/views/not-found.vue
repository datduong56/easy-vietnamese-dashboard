<template>
  <v-app>
    <v-container class="main">
      <img src="@/assets/images/not-found.jpeg" class="image" />
      <p>404 | Không có trang này</p>
      <v-btn class="mt-5" color="warning" link to="/" rounded="lg" x-large>
        Về trang chủ
      </v-btn>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound",
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main p {
  font-size: 30px;
  color: grey;
  font-weight: 100;
}

.image {
  width: 45%;
}
</style>
