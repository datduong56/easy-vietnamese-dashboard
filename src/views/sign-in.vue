<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="5">
        <v-form @submit.prevent="onSubmit" class="form-wrapper">
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
              v-model="email"
            />
            <v-text-field
              dense
              type="password"
              label="Password"
              outlined
              clearable
              color="warning"
              prepend-inner-icon="mdi-lock-outline"
              v-model="password"
            />
            <v-dialog v-model="dialog" persistent width="300">
              <v-card color="warning" dark>
                <v-card-text>
                  Đang đăng nhập
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-alert v-model="showAlert" type="error">{{
              alertMessage
            }}</v-alert>
            <v-btn
              type="submit"
              elevation="0"
              color="warning"
              class="login-button"
            >
              Đăng nhập
            </v-btn>
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
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
    dialog: false,
  }),
  computed: mapState({
    showAlert: (state: any) => state.auth.showAlert,
    alertMessage: (state: any) => state.auth.alertMessage,
  }),
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.dialog = true;
      this.login({ email: this.email, password: this.password });
    },
  },
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

.login-button {
  width: 100%;
}
</style>
