import express from "express";
import { handleAddProduct, handleFetchCart } from "../controller/cart";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.post("/add", authentication, handleAddProduct);
router.get("/fetchcart", authentication, handleFetchCart);

export default router;
