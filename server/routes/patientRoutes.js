import { request, response, Router } from "express";
import { login, register } from "../controllers/patientAuth.js";
import { verifyToken } from "../middlewares/auth.js";
import { deletePatient, getAllPatients, getAppointmentById, getPatientsById, updatePatient } from "../controllers/patients.js";

const router = Router();

router.get("/", verifyToken, getAllPatients);

router.get("/:id", verifyToken, getPatientsById);

router.get("/appointments/:patientId", getAppointmentById);

router.post("/register",register);

router.post("/login",login);

router.put("/:id", verifyToken, updatePatient);

router.delete("/:id", verifyToken, deletePatient);


export default router;
