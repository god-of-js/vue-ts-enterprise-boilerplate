---
to: "src/router/modules/<%= h.changeCase.pascal(name)  %>.ts"
---
import { RouteConfig } from "vue-router";
import <%= h.changeCase.pascal(name)  %> from "@/layout/<%= h.changeCase.pascal(name)  %>.vue";
const routes: RouteConfig = {
  path: "/<%= h.changeCase.kebab(name).toLowerCase()  %>",
  component: <%= h.changeCase.pascal(name)  %>,
  name: "<%= h.changeCase.pascal(name)  %>",
  children: [],
};
export default routes;
