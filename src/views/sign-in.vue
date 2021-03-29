<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="5">
        <v-form @submit.prevent class="form-wrapper">
          <div>
            <h2 class="mb-5">Đăng nhập</h2>
            <v-text-field
              dense
              type="email"
              label="Email"
              outlined
              clearable
              color="warning"
              prepend-inner-icon="mdi-email-outline"
            />
            <v-text-field
              dense
              type="password"
              label="Password"
              outlined
              clearable
              color="warning"
              prepend-inner-icon="mdi-lock-outline"
            />
            <v-checkbox v-model="rememberMe" color="warning">
              <template v-slot:label>
                <div @click.stop="">Ghi nhớ đăng nhập</div>
              </template>
            </v-checkbox>
            <v-btn elevation="0" color="warning">Đăng nhập</v-btn>
          </div>
        </v-form>
      </v-col>

      <v-col cols="7">
        <img src="@/assets/images/sign-in-background.png" class="background" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SignIn",
  data: () => ({
    rememberMe: false,
  }),
});
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
}

.form-wrapper {
  width: 60%;
  margin: 25% auto;
}
</style>
