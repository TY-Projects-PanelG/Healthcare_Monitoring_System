import { Patient } from "../models/patientSchema.js";
import { Doctor } from "../models/doctorSchema.js";
import { request, response } from "express";

export const addPatientToDoctor = async(doctorID,patientID)=>{
    try {
        const doctor = await Doctor.findById(doctorID);
        if(!doctor) throw new Error("Doctor not found");

        const patient = await Patient.findById(patientID);
        if(!patient) throw new Error("Patient not found");

        doctor.pastPatients.push(patient._id);
        const updatedDoctor = await doctor.save();
        return updatedDoctor;
    } catch (error) {
        console.log(error);
    }
};