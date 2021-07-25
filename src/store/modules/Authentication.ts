import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class AuthenticationModule extends VuexModule {
  //   @Mutation
  //   InitialMutation(param: object) {}
  //   @Action
  //   InitialAction(param: object) {}
}

import store from "../index";
export const actorModule = new AuthenticationModule({
  store,
  name: "Authentication",
});
