import express from "express";
import { login, signup, updateDetails } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.patch("/update", updateDetails);

export default router;
