import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// Views
import Home from "@/views/home.vue";
import NotFound from "@/views/not-found.vue";
import SignIn from "@/views/sign-in.vue";
import Lesson from "@/views/lesson.vue";
import Videos from "@/views/videos.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem("userToken");
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
      const userInfo = localStorage.getItem("userToken");
      userInfo ? next("/") : next();
    },
  },
  {
    path: "/lessons",
    name: "Lesson",
    component: Lesson,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
