import { login } from "@/services/auth";
import firebase from "@/services/firebase-config.js";

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
        console.log(tokenData);
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default authModule;
