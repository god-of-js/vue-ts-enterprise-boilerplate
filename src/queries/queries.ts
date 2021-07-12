import gql from "graphql-tag";
const LOGIN_USER = gql`
  mutation LoginUser($user: UserLoginInput!) {
    loginUser(user: $user) {
      user {
        id
      }
      accessToken {
        token
        tokenType
      }
    }
  }
`;
export { LOGIN_USER };
