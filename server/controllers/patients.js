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
        const {id} = request.params;
        const patient = await Patient.findById(id);
        if(!patient) return response.sendStatus(404);

        const appointments = patient.appointments

        const formattedAppointment = appointments.map(
            ({day, date, diagnose}) =>{
                return {day, date, diagnose};
            }
        );
        response.status(200).json(formattedAppointment);
    } catch (error) {
        console.log(error);
    }
};   