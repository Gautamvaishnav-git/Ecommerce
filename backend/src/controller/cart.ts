import { Response, Request } from "express";
import cart from "../model/cart";
import StoreModel from "../model/store";

interface user {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  userID: string;
}

const handleFetchCart = async (req: Request, resp: Response) => {
  const user: user = req.body.user;
  const Items = await cart.find({ userID: user.userID });
  return resp.json(Items);
};

const handleAddProduct = async (req: Request, resp: Response) => {
  const user: user = req.body.user;
  const product = await StoreModel.findOne({ asin: req.body.asin });
  const { price, asin, title, reviews, main_image } = product;
  const isExists = await cart.findOne({ userID: user.userID, asin });
  if (!isExists) {
    const addProduct = await cart.create({
      userID: user.userID,
      price,
      asin,
      title,
      reviews,
      main_image,
    });
    return resp.json({ asin: addProduct.asin, title: addProduct.title });
  } else {
    const updated = await cart.findOneAndUpdate(
      { asin, userID: user.userID },
      { $inc: { quantity: 1 } }
    );
    return resp.json({ asin: updated.asin, title: updated.title });
  }
};

const handleDelete = async (req: Request, resp: Response) => {
  const user: user = req.body.user;
  await cart.deleteOne({
    userID: user.userID,
    asin: req.body.asin,
  });
  return resp.status(200).json({ deleted: true });
};

export { handleAddProduct, handleFetchCart, handleDelete };
