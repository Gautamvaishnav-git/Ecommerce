import express from "express";
import {
    handleAddProduct, handleDec,
    handleDelete,
    handleFetchCart, handleInc,
} from "../controller/cart";
import {authentication} from "../middleware/authentication";

const router = express.Router();

router.post("/add", authentication, handleAddProduct);
router.get("/fetchcart", authentication, handleFetchCart);
router.delete("/delete/:asin", authentication, handleDelete);
router.post("/inc", authentication, handleInc);
router.post("/dec", authentication, handleDec);

export default router;
