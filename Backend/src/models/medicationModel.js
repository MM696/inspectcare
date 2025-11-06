import client from "../db/index.js";

const mapRowToMedication = (row) => {
  if (!row) return null;
  return {
    id: row.id,
    user_id: row.user_id,
    medication_name: row.medication_name,
    prescribing_doctor: row.prescribing_doctor,
    dosage: row.dosage,
    time_of_day: row.time_of_day,
    start_date: row.start_date,
    frequency: row.frequency,
    end_date: row.end_date,
    medication_location: row.medication_location,
    alert_type: row.alert_type,
    instructions: row.instructions,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
};

const createMedication = async ({
  userId,
  medicationName,
  prescribingDoctor,
  dosage,
  timeOfDay,
  startDate,
  frequency,
  endDate,
  medicationLocation,
  alertType,
  instructions,
}) => {
  const { rows } = await client.query(
    `INSERT INTO medications (
      user_id,
      medication_name,
      prescribing_doctor,
      dosage,
      time_of_day,
      start_date,
      frequency,
      end_date,
      medication_location,
      alert_type,
      instructions
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    RETURNING *`,
    [
      userId,
      medicationName,
      prescribingDoctor,
      dosage,
      timeOfDay,
      startDate,
      frequency,
      endDate,
      medicationLocation,
      alertType,
      instructions,
    ]
  );
  return mapRowToMedication(rows[0]);
};

const updateMedication = async ({
  userId,
  medicationName,
  prescribingDoctor,
  dosage,
  timeOfDay,
  startDate,
  frequency,
  endDate,
  medicationLocation,
  alertType,
  instructions,
}) => {
  const { rows } = await client.query(
    `UPDATE medications
     SET prescribing_doctor = $2,
         dosage = $3,
         time_of_day = $4,
         start_date = $5,
         frequency = $6,
         end_date = $7,
         medication_location = $8,
         alert_type = $9,
         instructions = $10,
         updated_at = NOW()
     WHERE user_id = $1 AND medication_name = $11
     RETURNING *`,
    [
      userId,
      prescribingDoctor,
      dosage,
      timeOfDay,
      startDate,
      frequency,
      endDate,
      medicationLocation,
      alertType,
      instructions,
      medicationName,
    ]
  );
  return mapRowToMedication(rows[0]);
};

export { createMedication, updateMedication };
