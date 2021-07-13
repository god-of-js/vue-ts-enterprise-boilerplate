import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Authentication from "./modules/Authentication";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  Authentication,
  {
    path: "/user",
    name: "ViewProfile",
    component: () => import("@/views/user/ViewUser.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
