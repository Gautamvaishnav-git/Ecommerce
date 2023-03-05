import user from "../model/user";
import { Request, Response } from "express";
import { createUserToken } from "../service/auth";

const handleUserSignup = async (req: Request, resp: Response) => {
  try {
    const SavedUser = await user.create(req.body);
    const token = createUserToken({
      name: SavedUser.name,
      email: SavedUser.email,
    });
    return resp.json({ token });
  } catch (err) {
    return resp.json({ err: "email already exists" });
  }
};

const handleUserLogin = async (req: Request, resp: Response) => {
  const userDetail = await user.matchPassword(
    req.body.email,
    req.body.password
  );
  return resp.json({ userDetail });
};

export { handleUserSignup, handleUserLogin };
