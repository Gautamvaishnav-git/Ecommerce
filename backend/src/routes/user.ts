import express from "express";
import {
  handleUserSignup,
  handleUserLogin,
  handleUserDetail,
} from "../controller/user";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.post("/signUp", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/userDetail", authentication, handleUserDetail);

export default router;
