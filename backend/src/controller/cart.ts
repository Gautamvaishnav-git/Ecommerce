import { Response, Request } from "express";
import { getUser } from "../service/auth";
import cart from "../model/cart";

const handleAddProduct = async (req: Request, resp: Response) => {
  const token = req.body.token;
  const user = getUser(token);
  console.log(user);
  return resp.json({ user });
  // try {
  //   const product: { _id: string } = await cart.findOne({
  //     asin: req.body.asin,
  //     title: req.body.title,
  //     userID: userID,
  //   });
  //   if (product) {
  //     await cart.findOneAndUpdate(
  //       { userID: userID, _id: product._id },
  //       { $inc: { quantity: 1 } }
  //     );
  //     return resp.send({ added: true });
  //   }
  //   await cart.create({ ...req.body, userID });
  //   return resp.json({ added: true });
  // } catch (error) {
  //   return resp.json({ invalid: "token" });
  // }
};

const handleFetchCart = async (req: Request, resp: Response) => {
  const token = req.body.token;
  const user = getUser(token);
  // const cartData = await cart.find({ userID });
  return resp.json({ user });
};

export { handleAddProduct, handleFetchCart };
