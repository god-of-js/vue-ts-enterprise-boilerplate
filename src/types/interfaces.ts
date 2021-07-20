interface User {
  emailAddress: string;
  password: string;
}
interface Headers {
  authorization?: string;
  "x-hasura-admin-secret": string;
}
interface CurrentUserInterface {
  access_token: {
    token: string;
    tokenType: string;
  };
  emailAddress: string;
  id: string;
  password: string;
}
export { User, Headers, CurrentUserInterface };
