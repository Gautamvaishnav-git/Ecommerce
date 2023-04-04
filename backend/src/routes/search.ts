import express from "express";
import handleSearch from "../controller/search";

const router = express.Router();

router.get("/", handleSearch);

export default router;
