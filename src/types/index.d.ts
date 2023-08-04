interface IToken {
  token: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface ISignIn {
  username: string;
  password: string;
}

interface IBlog {
  id: number;
  title: string;
  content: string;
}

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
