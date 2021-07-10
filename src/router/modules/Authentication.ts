import { RouteConfig } from "vue-router";
import Authentication from "@/views/Authentication.vue";
const children: RouteConfig[] = [
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
];
const routes: RouteConfig = {
  path: "/",
  component: Authentication,
  name: "Authentication",
  children,
};
export default routes;
