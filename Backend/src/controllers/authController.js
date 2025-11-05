import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import { findByEmail } from "../models/userModel.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { generateToken } from "../utils/token.js";
import { sanitizeUser } from "./userController.js";

const loginUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Invalid credentials", errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = generateToken({ sub: user.id, email: user.email });

  return res.json({
    message: "Login successful",
    jwtToken: token,
    user: sanitizeUser(user),
  });
});

const getProfile = asyncHandler(async (req, res) => {
  return res.json({ user: sanitizeUser(req.user) });
});

export { loginUser, getProfile };

