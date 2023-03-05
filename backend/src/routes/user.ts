import express from "express";
import {
  handleUserSignup,
  handleUserLogin,
  handleUserDetail,
} from "../controller/user";

const router = express.Router();

router.post("/signUp", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/userDetail", handleUserDetail);

export default router;
