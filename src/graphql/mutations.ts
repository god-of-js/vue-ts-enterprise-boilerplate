import gql from "graphql-tag";
const USER_LOGIN_MUTATION = gql`
  mutation ($emailAddress: String!, $password: String!) {
    loginUser(object: { password: $password, emailAddress: $emailAddress }) {
      accessToken {
        token
        tokenType
      }
      user {
        emailAddress
        id
        password
      }
    }
  }
`;
export { USER_LOGIN_MUTATION };
