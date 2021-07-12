import Vue from "vue";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { Headers } from "@/@types/interfaces";

const getHeaders = () => {
  const headers: Headers = {};
  //
  const token = "93f78ce7-5728-4010-b741-a628d1e4f425";
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: "https://solytic-login.free.beeceptor.com/api/graphql ",
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
