import express from "express";
import {
  handleAddProduct,
  handleDelete,
  handleFetchCart,
} from "../controller/cart";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.post("/add", authentication, handleAddProduct);
router.get("/fetchcart", authentication, handleFetchCart);
router.delete("/delete/:asin", authentication, handleDelete);

export default router;
