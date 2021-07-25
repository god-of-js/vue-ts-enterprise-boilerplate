---
to: "src/store/modules/<%= h.changeCase.pascal(name)  %>.ts"
---
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class <%= h.changeCase.pascal(name)  %>Module extends VuexModule {
//   @Mutation
//   InitialMutation(param: object) {}

//   @Action
//   InitialAction(param: object) {}
}

import store from "../index";
export const actorModule = new <%= h.changeCase.pascal(name)  %>Module({ store, name: "<%= h.changeCase.pascal(name)  %>" });
