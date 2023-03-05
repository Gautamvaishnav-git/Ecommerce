import express from "express";
import { handleAddProduct } from "../controller/cart";

const router = express.Router();

router.post("/add", handleAddProduct);

export default router;
