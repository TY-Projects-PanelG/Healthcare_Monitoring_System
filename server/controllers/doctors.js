import { Doctor } from "../models/doctorSchema.js";

export const getAllDoctors = async(request,response)=>{
    try {
        const doctors = await Doctor.find();
        if(!doctors) return response.sendStatus(404);
        return response.status(200).send(doctors);
    } catch (error) {
        console.log(error);
    }
};

export const getDoctorsById = async(request,response)=>{
    const {id} = request.params;
    try {
        const idDoctor = await Doctor.findById(id);
        if(!idDoctor) return response.sendStatus(404);
        return response.send(idDoctor);
    } catch (error) {
        console.log(error);
    }
};

export const updateDoctor = async(request,response)=>{
    const {id} = request.params;
    const updatedDoctor = request.body;
    try {
        const upDoctor = await Doctor.findByIdAndUpdate(id,updatedDoctor);
        if(!upDoctor) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(upDoctor);
    } catch (error) {
        console.log(error);
    }
};

export const deleteDoctor = async(request,response)=>{
    const {id} = request.params;
    const deletedDoctor = request.body;
    try {
        const deDoctor = await Patient.findByIdAndDelete(id,deletedDoctor);
        if(!deDoctor) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(deDoctor);
    } catch (error) {
        console.log(error);
    }
};
