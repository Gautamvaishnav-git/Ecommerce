import Jwt from "jsonwebtoken";

const secret = process.env.ACCESS_TOKEN;

const createUserToken = (payload: object) => {
  const token = Jwt.sign({ ...payload }, secret);
  return token;
};

export { createUserToken };
