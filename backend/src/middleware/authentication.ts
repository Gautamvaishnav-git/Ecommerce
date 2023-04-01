import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

const secret = process.env.ACCESS_TOKEN;

const authentication = (req: Request, resp: Response, next: NextFunction) => {
  const authorizationToken = req.headers.authorization;
  if (!authorizationToken)
    return resp.status(401).json({ tokenErr: "Token not available" });
  Jwt.verify(authorizationToken, secret, (err, user) => {
    if (err) return resp.sendStatus(403);
    req.body.user = user;
    next();
  });
};

export { authentication };
