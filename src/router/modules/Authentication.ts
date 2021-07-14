import { RouteConfig } from "vue-router";
import Authentication from "@/views/Authentication.vue";
const routes: RouteConfig = {
  path: "/",
  component: Authentication,
  name: "Authentication",
  children: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/views/authentication/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/authentication/Register.vue"),
    },
  ],
};
export default routes;
