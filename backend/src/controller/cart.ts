import { Response, Request } from "express";
import { getUser } from "../service/auth";
import cart from "../model/cart";

const handleAddProduct = async (req: Request, resp: Response) => {
  const token = req.body.token;
  const { userID } = getUser(token);
  try {
    const product: { _id: string } = await cart.findOne({
      asin: req.body.asin,
      title: req.body.title,
      userID: userID,
    });
    if (product) {
      await cart.findOneAndUpdate(
        { userID: userID, _id: product._id },
        { $inc: { quantity: 1 } }
      );
      return resp.send({ added: true });
    }
    await cart.create({ ...req.body, userID });
    return resp.json({ added: true });
  } catch (error) {
    return resp.json({ invalid: "token" });
  }
};

export { handleAddProduct };
