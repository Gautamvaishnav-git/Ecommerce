import express from "express";
import { handleAddProduct, handleFetchCart } from "../controller/cart";

const router = express.Router();

router.post("/add", handleAddProduct);

router.get("/fetchcart", handleFetchCart);

export default router;
