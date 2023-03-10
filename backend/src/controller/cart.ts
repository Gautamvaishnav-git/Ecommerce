import { Response, Request } from "express";
import { getUser } from "../service/auth";
// import cart from "../model/cart";

const handleAddProduct = async (req: Request, resp: Response) => {
  const token = req.body.token;
  const user = getUser(token);
  console.log(user);
  return resp.json({ user });
};

const handleFetchCart = async (req: Request, resp: Response) => {
  const token = req.body.token;
  const user = getUser(token);
  // const cartData = await cart.find({ userID });
  return resp.json({ user });
};

export { handleAddProduct, handleFetchCart };
