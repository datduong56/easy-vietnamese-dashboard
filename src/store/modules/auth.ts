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
    async login({ commit }, data) {
      try {
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        const { token } = await result.user?.getIdTokenResult();
        const { data: tokenData } = await login({ token });
        console.log(tokenData);
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default authModule;
