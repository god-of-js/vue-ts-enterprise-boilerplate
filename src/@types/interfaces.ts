interface User {
  emailAddress: string;
  password: string;
}
interface Headers {
  authorization?: string;
  "x-hasura-admin-secret": string;
}
interface CurrentUserInterface {
  accessToken: {
    token: string;
    tokenType: string;
  };
  user: {
    emailAddress: string;
    id: string;
    password: string;
  };
}
export { User, Headers, CurrentUserInterface };
