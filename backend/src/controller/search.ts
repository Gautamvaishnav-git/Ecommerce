import { Request, Response } from "express";
import StoreModel from "../model/store";

const handleSearch = async (req: Request, res: Response) => {
  const resp = await StoreModel.find({
    title: { $regex: req.query.q, $options: "i" },
  });
  return res.json(resp);
};

export default handleSearch;
