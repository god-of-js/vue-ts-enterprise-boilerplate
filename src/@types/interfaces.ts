interface User {
  emailAddress: string;
  password: string;
}
interface Headers {
  authorization?: string;
  "x-hasura-admin-secret": string;
}

export { User, Headers };
