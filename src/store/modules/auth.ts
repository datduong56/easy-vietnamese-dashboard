import { login } from "@/services/auth";
import firebase from "@/services/firebase-config.js";
import { setToken } from "@/services/connection-instance";

const authModule = {
  state: () => ({
    email: "",
    password: "",
  }),
  getters: {},
  mutations: {},
  actions: {
    async login({ commit }: any, data: any) {
      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        const tokenResult = await result.user?.getIdTokenResult();
        if (!tokenResult) return;
        const { data: tokenData } = await login({ token: tokenResult.token });
        setToken(tokenData.accessToken);
        localStorage.setItem("userToken", tokenData.accessToken);
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default authModule;
