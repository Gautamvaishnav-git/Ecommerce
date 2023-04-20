import express from "express";
import {handleCheckout} from "../controller/checkout";

const router = express.Router()

router.post("/", handleCheckout)

export default  router