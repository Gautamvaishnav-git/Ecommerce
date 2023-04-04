import express from "express";
import { handleSearch, handlePriceRangeFilter } from "../controller/search";

const router = express.Router();

router.get("/", handleSearch);
router.get("/pricefilter", handlePriceRangeFilter);

export default router;
