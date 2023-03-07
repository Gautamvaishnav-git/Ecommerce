import Jwt from "jsonwebtoken";

const secret = process.env.ACCESS_TOKEN;

const createUserToken = (payload: object) => {
  const token = Jwt.sign({ ...payload }, secret);
  return token;
};

const getUser = (token: string) => {
  const user = Jwt.verify(token, secret);
  return user;
};

export { createUserToken, getUser };
