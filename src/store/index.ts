import Vue from "vue";
import Vuex from "vuex";
import {
  LOGIN_ACTION,
  IS_AUTHENTICATED_GETTER,
  SET_USER_DETAILS_MUTATION,
} from "./storeVariables.types";
import { apolloProvider } from "@/apollo";
import { USER_LOGIN_MUTATION } from "@/graphql/mutations";
Vue.use(Vuex);
const { defaultClient } = apolloProvider;
// Based on size of the project, I decided not to use module based vuex.
export default new Vuex.Store({
  state: {
    activeModal: "ModalShowUserId",
    currentUser: null,
  },
  mutations: {
    [SET_USER_DETAILS_MUTATION](state, data) {
      state.currentUser = data;
    },
  },
  getters: {
    [IS_AUTHENTICATED_GETTER](state) {
      return state.currentUser ?? false;
    },
  },
  actions: {
    [LOGIN_ACTION]({ commit }, userDetails) {
      return new Promise((resolve, reject) => {
        defaultClient
          .mutate({
            mutation: USER_LOGIN_MUTATION,
            variables: {
              emailAddress: userDetails.emailAddress,
              password: userDetails.password,
            },
          })
          .then(({ data }) => {
            console.log(data.loginUser);
            commit(SET_USER_DETAILS_MUTATION, data.loginUser);
            return resolve(data);
          })
          .catch((err) => reject(err.message));
      });
    },
  },
});
