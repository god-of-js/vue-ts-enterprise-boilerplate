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
  mutations: {
    [variables.SET_USER_DETAILS_MUTATION](state, data) {
      state.currentUser = data;
    },
  },
  getters: {
    [variables.IS_AUTHENTICATED_GETTER](state) {
      return state.currentUser === null ? false : true;
    },
  },
  actions: {
    [variables.LOGIN_ACTION](context, data) {
      // Commiting from an action because word on the streets is that with future updates to
      // there might be less support for mutations. hence, keeping all commits in the store would
      // bring less commits.
      context.commit(variables.SET_USER_DETAILS_MUTATION, data);
    },
  },
  modules: {},
});
