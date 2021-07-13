import Vue from "vue";
import Vuex from "vuex";
import variables from "./storeVariables.types";
Vue.use(Vuex);
// Based on size of the project, I decided not to use module based vuex.
export default new Vuex.Store({
  state: {
    activeModal: "ModalShowUserId",
    currentUser: null,
  },
  mutations: {},
  getters: {
    [variables.IS_AUTHENTICATED_GETTER]() {
      console.log(variables);
    },
  },
  actions: {},
  modules: {},
});
