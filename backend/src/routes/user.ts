import express from "express";
import { handleUserSignup, handleUserLogin } from "../controller/user";

const router = express.Router();

router.post("/signUp", handleUserSignup);
router.post("/login", handleUserLogin);

export default router;
