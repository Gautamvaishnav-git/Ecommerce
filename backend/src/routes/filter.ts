import express from "express";
import {
  handleSearch,
  handlePriceRange,
  handleReviews,
} from "../controller/filter";

const router = express.Router();

router.get("/search", handleSearch);
router.get("/price", handlePriceRange);
router.get("/review", handleReviews);

export default router;
