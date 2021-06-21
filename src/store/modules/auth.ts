import { login } from "@/services/auth";
import firebase from "@/services/firebase-config.js";
import { setToken } from "@/services/connection-instance";
import router from "@/router";

const authModule = {
  state: () => ({
    email: "",
    displayName: "",
    nation: "",
    avatar: "",
    error: "",
    showAlert: false,
    alertMessage: null,
  }),
  getters: {},
  mutations: {
    error(state: any, alertMessage: any) {
      state.showAlert = true;
      state.alertMessage = alertMessage;
    },
    setUser(state: any, payload: any) {
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.nation = payload.nation;
      state.avatar = payload.avatar;
    },
  },
  actions: {
    async login({ commit }: any, data: any) {
      if (!data.email.length || !data.password.length) {
        commit("error", "Email hoặc mật khẩu không được để trống");
        return;
      }

      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        const tokenResult = await result.user?.getIdTokenResult();
        if (!tokenResult) return;
        const { data: tokenData } = await login({
          token: tokenResult.token,
          loginMethod: "Email",
        });
        setToken(tokenData.accessToken);
        commit("setUser", tokenData.user);
        localStorage.setItem("userToken", tokenData.accessToken);
        router.push("/");
      } catch (e) {
        console.log(e);
        commit("error", e.message);
      }
    },

    logout() {
      localStorage.removeItem("userToken");
      router.push("/sign-in");
    },
  },
};

export default authModule;
