import { Doctor } from "../models/doctorSchema.js";
import { Patient } from "../models/patientSchema.js";

export const getAllPatients = async(request,response)=>{
    try {
        const patients = await Patient.find();
        if(!patients) return response.sendStatus(404);
        return response.status(200).send(patients);
    } catch (error) {
        console.log(error);
    }
};

export const getPatientsById = async(request,response)=>{
    const {id} = request.params;
    try {
        const idPatient = await Patient.findById(id);
        if(!idPatient) return response.sendStatus(404);
        return response.send(idPatient);
    } catch (error) {
        console.log(error);
        return response.status(500).send({ error: "An error occurred while fetching patients." });
    }
};

export const updatePatient = async(request,response)=>{
    const {id} = request.params;
    const updatedPatient = request.body;
    try {
        const upPatient = await Patient.findByIdAndUpdate(id,updatedPatient);
        if(!upPatient) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(upPatient);
    } catch (error) {
        console.log(error);
    }
};

export const deletePatient = async(request,response)=>{
    const {id} = request.params;
    const deletedPatient = request.body;
    try {
        const dePatient = await Patient.findByIdAndDelete(id,deletedPatient);
        if(!dePatient) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(dePatient);
    } catch (error) {
        console.log(error);
    }
};

export const getAppointmentById = async(request,response)=>{
    try {
        const {patientId} = request.params;
        const patient = await Patient.findById(patientId);
        if(!patient) throw new Error("patient not found");

        const appointments = patient.appointments;
        if(!appointments) throw new Error("Appointments not found");
        const appointmentDetails = await Promise.all(
            appointments.map(async(doctorID)=>{
                const mainAppointments = await Doctor.findById(doctorID).select("-password");
            if(!mainAppointments) throw new Error("Doctor not found");
                return mainAppointments;
            })
        );
        return response.status(200).send(appointmentDetails);
    } catch (error) {
        console.log(error);
    }
};

export const updateApponitments = async(request,response)=>{
    try {
        const {day,date,diagnose} = request.body;
        const appointments = new Patient({day,date,diagnose});
        const savedAppointments = await appointments.save();
        response.status(200).json(savedAppointments);
    } catch (error) {
        console.log(error);
    }
};