import { Request, Response } from "express";
import StoreModel from "../model/store";

const handleSearch = async (req: Request, res: Response) => {
  const resp = await StoreModel.find({
    title: { $regex: req.query.q, $options: "i" },
  });
  return res.json(resp);
};

const handlePriceRangeFilter = async (req: Request, res: Response) => {
  const priceFilter = await StoreModel.find({
    "price.current_price": { $lte: req.query.lte, $gte: req.query.gte },
  });
  return res.json(priceFilter);
};

export { handleSearch, handlePriceRangeFilter };
