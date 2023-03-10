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

/*
    // const data = await fetch(
    //   `https://amazon23.p.rapidapi.com/product-details?asin=${req.query.asin}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    //       "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    //     },
    //   }
    // );
    // const detail = await data.json();
    //  await DetailModel.create(detail.result[0]);
    // return resp.json(data);
     */
