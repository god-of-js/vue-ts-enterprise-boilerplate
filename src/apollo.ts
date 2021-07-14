import Vue from "vue";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { Headers } from "@/types/interfaces";
const getHeaders = () => {
  const headers: Headers = {
    //
    "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_ADMIN_SECRET}`,
  };
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: process.env.VUE_APP_BASE_URL,
  fetch,
  headers: getHeaders(),
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: client,
});

export { apolloProvider };
