import Store from "../model/store";
import { Request, Response } from "express";

const handleProducts = async (req: Request, resp: Response) => {
  const products = await Store.find({});
  // console.log(products);
  return resp.json(products);
};

const handleProductDetail = async (req: Request, resp: Response) => {
  console.log(process.env.RAPID_API_KEY);
  try {
    const data = await fetch(
      `https://amazon23.p.rapidapi.com/product-details?asin=${req.query.asin}&country=US`,
      {
        method: "get",
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
        },
      }
    );
    const detail = await data.json();
    return resp.json(detail);
  } catch (error) {
    return resp.json({ fetchError: "Oops some error while fetching" });
  }
};

export { handleProducts, handleProductDetail };
