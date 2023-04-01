import user from "../model/user";
import { Request, Response } from "express";
import { createUserToken } from "../service/auth";

const handleUserSignup = async (req: Request, resp: Response) => {
  const isExists = await user.findOne({
    email: req.body.email,
  });
  if (isExists)
    return resp.status(401).json({ invalid: "email already exists" });
  const SavedUser = await user.create({ ...req.body });
  const token = createUserToken({
    name: SavedUser.name,
    email: SavedUser.email,
    createdAt: SavedUser.createdAt,
    updatedAt: SavedUser.updatedAt,
    userID: SavedUser._id,
  });
  return resp.json({ token });
};

const handleUserLogin = async (req: Request, resp: Response) => {
  try {
    const userDetail = await user.matchPassword(
      req.body.email,
      req.body.password
    );
    if (userDetail) {
      const token = createUserToken({
        name: userDetail.name,
        email: userDetail.email,
        createdAt: userDetail.createdAt,
        updatedAt: userDetail.updatedAt,
        userID: userDetail._id,
      });
      return resp.json({ token });
    } else {
      return resp.json({ invalid: "incorrect username or password" });
    }
  } catch (error) {
    return resp.json({ invalid: "incorrect username or password" });
  }
};

const handleUserDetail = (req: Request, resp: Response) => {
  try {
    const user = req.body.user;
    return resp.json(user);
  } catch (error) {
    return resp.json({ invalid: "invalid token" });
  }
};

export { handleUserSignup, handleUserLogin, handleUserDetail };
