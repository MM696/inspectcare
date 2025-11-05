import { Router } from "express";
import { body } from "express-validator";

import { registerUser } from "../controllers/userController.js";

const router = Router();

const registerValidation = [
  body("fullname").trim().notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
  body("agreed")
    .isBoolean()
    .withMessage("Agreement flag must be a boolean")
    .toBoolean()
    .custom((value) => value === true)
    .withMessage("You must agree to the privacy policy"),
];

router.post("/create", registerValidation, registerUser);

export { router as userRouter };

