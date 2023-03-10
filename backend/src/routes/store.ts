import express from "express";
import { handleProducts, handleProductDetail } from "../controller/store";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.get("/", authentication, handleProducts);
router.get("/detail", authentication, handleProductDetail);

export default router;
