import Vue from "vue";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { Headers } from "@/@types/interfaces";

const getHeaders = () => {
  const headers: Headers = {
    "x-hasura-admin-secret":
      "BQtEGz42aqDN5AyfAYJUrUDa5h6qniZsDin2sDrMvaysHBQ96fUWmy1cBBeUKMwd",
  };
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: "https://solytic-test.hasura.app/v1/graphql",
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
