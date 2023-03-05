import Jwt from "jsonwebtoken";

const secret = "G%a$u@t&a*m";

const createUserToken = (payload: object) => {
  const token = Jwt.sign(payload, secret);
  return token;
};

const getUser = (token: string) => {
  const user = Jwt.verify(token, secret);
  return user;
};

export { createUserToken, getUser };
