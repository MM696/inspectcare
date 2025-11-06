import { Router } from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createMedicationReminder, updateMedicationReminder } from "../controllers/medicationController.js";

const router = Router();

const medicationValidation = [
  body("medicationName").trim().notEmpty().withMessage("Medication name is required"),
  body("prescribingDoctor").trim().notEmpty().withMessage("Prescribing doctor is required"),
  body("dosage").trim().notEmpty().withMessage("Dosage is required"),
  body("startDate").isISO8601().withMessage("Start date is required"),
  body("endDate").isISO8601().withMessage("End date is required"),
  body("timeOfDay").optional().trim(),
  body("frequency").optional().trim(),
  body("medicationLocation").optional().trim(),
  body("alertType").optional().trim(),
  body("instructions").optional().trim(),
];

router.post("/create", authMiddleware, medicationValidation, createMedicationReminder);
router.put("/update/:id", authMiddleware, medicationValidation, updateMedicationReminder);

export { router as medicationRouter };
