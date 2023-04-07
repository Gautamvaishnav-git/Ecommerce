import { Request, Response } from "express";
import StoreModel from "../model/store";

const handleSearch = async (req: Request, res: Response) => {
  try {
    const resp = await StoreModel.find({
      title: { $regex: req.query.q, $options: "i" },
    });
    return res.json(resp);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const handlePriceRange = async (req: Request, res: Response) => {
  const priceFilter = await StoreModel.find({
    "price.current_price": { $lte: req.query.lte, $gte: req.query.gte },
  });
  return res.json(priceFilter);
};

const handleReviews = async (req: Request, res: Response) => {
  const lte = req.query.lte || 5;
  const gte = req.query.gte || 1;
  const categoryData = await StoreModel.find({
    "reviews.rating": { $lte: lte, $gte: gte },
  });
  return res.json(categoryData);
};

export { handleSearch, handlePriceRange, handleReviews };
