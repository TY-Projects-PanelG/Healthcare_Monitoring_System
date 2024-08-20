import { Patient } from "../models/patientSchema.js";
import { Doctor } from "../models/doctorSchema.js";
import { request, response } from "express";

export const addPatientToDoctor = async(doctorID,patientID)=>{
    try {
        const doctor = await Doctor.findById(doctorID);
        if(!doctor) throw new Error("Doctor not found");

        const patient = await Patient.findById(patientID);
        if(!patient) throw new Error("Patient not found");

        if(!doctor.pastPatients.includes(patient._id)){
            doctor.pastPatients.push(patient._id);
        }

        if(!patient.appointments.includes(doctor._id)){
            patient.appointments.push(doctor._id);  
        }

        const updatedDoctor = await doctor.save();
        const updatedPatient = await patient.save();

        return {updatedDoctor,updatedPatient};
    } catch (error) {
        console.log(error);
    }
};

export const fetchPatientFromDoctorById = async(request,response)=>{
    try {
        const {doctorID, patientID} = request.params;

        const doctor = await Doctor.findById(doctorID);
        if(!doctor) throw new Error("Doctor not found");

        const patient = await Patient.findById(patientID);
        if(!patient) throw new Error("Patient not found");

        return response.send(patient);

    } catch (error) {
        console.log(error);
    }
};

export const fetchAllPatients = async(request,response)=>{
    try {
        const {doctorId} = request.params;
        const doctor = await Doctor.findById(doctorId);
        if(!doctor) throw new Error("Doctor not found");

        const patients = doctor.pastPatients;
        if(!patients) throw new Error("Patient not found");
        const patientDetails = await Promise.all(
            patients.map(async(patientID)=>{
                const mainPatient = await Patient.findById(patientID).select("-password -appointments");
            if(!mainPatient) throw new Error("Patient not found");
                return mainPatient;
            })
        );
        return response.status(200).send(patientDetails);
    } catch (error) {
        console.log(error);
    }
}