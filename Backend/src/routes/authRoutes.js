import { Router } from "express";
import { body } from "express-validator";

import { loginUser, getProfile } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

const loginValidation = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

router.post("/login", loginValidation, loginUser);
router.get("/profile", authMiddleware, getProfile);

export { router as authRouter };

