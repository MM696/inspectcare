import { validationResult } from "express-validator";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createMedication, updateMedication } from "../models/medicationModel.js";

const sanitizeMedication = (payload) => ({
  id: payload.id,
  userId: payload.user_id,
  medicationName: payload.medication_name,
  prescribingDoctor: payload.prescribing_doctor,
  dosage: payload.dosage,
  timeOfDay: payload.time_of_day,
  startDate: payload.start_date,
  frequency: payload.frequency,
  endDate: payload.end_date,
  medicationLocation: payload.medication_location,
  alertType: payload.alert_type,
  instructions: payload.instructions,
  createdAt: payload.created_at,
  updatedAt: payload.updated_at,
});

const createMedicationReminder = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Invalid data", errors: errors.array() });
  }

  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const medication = await createMedication({ userId, ...req.body });

  if (!medication) {
    return res.status(500).json({ message: "Unable to create medication reminder" });
  }

  return res.status(201).json({
    message: "Medication reminder created",
    medication: sanitizeMedication(medication),
  });
});

const updateMedicationReminder = asyncHandler(async (req, res) => {
  console.log("Medication ID:", req.params.id);
console.log("User ID:", req.user?.id);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Invalid data", errors: errors.array() });
  }

  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const medication = await updateMedication({ userId, ...req.body });

  if (!medication) {
    return res.status(404).json({ message: "Medication reminder not found" });
  }

  return res.json({
    message: "Medication reminder updated",
    medication: sanitizeMedication(medication),
  });
});

export { createMedicationReminder, updateMedicationReminder };
