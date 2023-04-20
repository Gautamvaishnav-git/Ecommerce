import StoreModel, { DetailModel } from "../model/store";
import { Request, Response } from "express";

const handleProducts = async (req: Request, resp: Response) => {
  const products = await StoreModel.find({});
  return resp.json(products);
};

const handleProductDetail = async (req: Request, resp: Response) => {
  try {
    const product = await DetailModel.findOne({ asin: req.query.asin });
    return resp.json(product);
  } catch (err) {
    return resp.json({ fetchError: "Oops some error while fetching" });
  }
};

export { handleProducts, handleProductDetail };
