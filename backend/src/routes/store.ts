import express from "express";
import { handleProducts, handleProductDetail } from "../controller/store";

const router = express.Router();

router.get("/", handleProducts);
router.get("/productDetail", handleProductDetail);

export default router;