import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// Views
import Home from "@/views/home.vue";
import NotFound from "@/views/not-found.vue";
import SignIn from "@/views/sign-in.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
