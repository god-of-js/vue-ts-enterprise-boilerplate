import { RouteConfig } from "vue-router";
import Dashboard from "@/layout/Dashboard.vue";
const routes: RouteConfig = {
  path: "/dashboard",
  component: Dashboard,
  name: "Dashboard",
  children: [],
};
export default routes;
