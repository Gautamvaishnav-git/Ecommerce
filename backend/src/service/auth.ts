import Jwt from "jsonwebtoken";

const secret = "G%a$u@t&a*m";

const createUserToken = (payload) => {
  const token = Jwt.sign(payload, secret);
  return token;
};

const getUser = (token) => {
  const user = Jwt.verify(token, secret);
  return user;
};

export { createUserToken, getUser };
