import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import { createUser, findByEmail, findByUsername } from "../models/userModel.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { generateToken } from "../utils/token.js";

const sanitizeUser = (user) => ({
  id: user.id,
  fullname: user.fullname,
  email: user.email,
  username: user.username,
  createdAt: user.createdAt,
});

const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Invalid data", errors: errors.array() });
  }

  const { fullname, email, username, password, confirmPassword, agreed } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  if (!agreed) {
    return res.status(400).json({ message: "You must agree to the privacy policy" });
  }

  if (await findByEmail(email)) {
    return res.status(409).json({ message: "Email already registered" });
  }

  if (await findByUsername(username)) {
    return res.status(409).json({ message: "Username already taken" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await createUser({ fullname, email, username, passwordHash });

  const token = generateToken({ sub: newUser.id, email: newUser.email });

  return res.status(201).json({
    message: "Account created successfully",
    user: sanitizeUser(newUser),
    jwtToken: token,
  });
});

export { registerUser, sanitizeUser };

