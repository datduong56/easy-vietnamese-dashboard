import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// Views
import Home from "@/views/home.vue";
import NotFound from "@/views/not-found.vue";
import SignIn from "@/views/sign-in.vue";
import Lesson from "@/views/lesson.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem("userInfo");
      userInfo ? next() : next("/sign-in");
    },
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
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem("userInfo");
      userInfo ? next("/") : next();
    },
  },
  {
    path: "/lessons",
    name: "Lesson",
    component: Lesson,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
