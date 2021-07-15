import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Authentication from "./modules/Authentication";
import store from "@/store";
import { IS_AUTHENTICATED_GETTER } from "@/store/storeVariables.types";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  Authentication,
  {
    path: "/user",
    name: "ViewProfile",
    component: () => import("@/views/user/ViewUser.vue"),
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if route required authentication
    if (store.getters[IS_AUTHENTICATED_GETTER]) {
      // check if user is authenticated.
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});
export default router;
