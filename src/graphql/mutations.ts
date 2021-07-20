import gql from "graphql-tag";
const USER_LOGIN_MUTATION = gql`
  mutation ($emailAddress: String!, $password: String!) {
    loginUser(object: { password: $password, emailAddress: $emailAddress }) {
      access_token {
        token
        tokenType
      }
      emailAddress
      id
    }
  }
`;
export { USER_LOGIN_MUTATION };
