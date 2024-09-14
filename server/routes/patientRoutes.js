import { request, response, Router } from "express";
import { login, register } from "../controllers/patientAuth.js";
import { verifyToken } from "../middlewares/auth.js";
import { deletePatient, getAllPatients, getAppointmentById, getPatientsById, updateApponitments, updatePatient } from "../controllers/patients.js";

const router = Router();

router.get("/", getAllPatients);

router.get("/:id", getPatientsById);

router.get("/appointments/:patientId", getAppointmentById);

router.post("/register",register);

router.post("/login",login);

router.put("/:id", verifyToken, updatePatient);

router.delete("/:id", verifyToken, deletePatient);

router.patch("/:id", updateApponitments);
export default router;
