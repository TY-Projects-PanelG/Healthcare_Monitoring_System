import { request, response, Router } from "express";
import { deleteDoctor, getAllDoctors, getDoctorsById, updateDoctor } from "../controllers/doctors.js";
import { login, register } from "../controllers/doctorAuth.js";
import { verifyToken } from "../middlewares/auth.js";


const router = Router();

router.get("/", getAllDoctors);

router.get("/:id", getDoctorsById);

router.post("/register", register);

router.post("/login", login);

router.put("/:id",  verifyToken, updateDoctor);

router.delete("/:id",  verifyToken, deleteDoctor);


export default router;
