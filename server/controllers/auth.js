import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Patient } from '../models/patientSchema.js';
import { request, response } from 'express';

export const register = async(request,response)=>{
    const {
        firstname,
        lastname,
        email,
        dob,
        contact,
        password
    } = request.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);

    const newPatient = new Patient({
        firstname,
        lastname,
        email,
        dob,
        contact,
        password:hashedPassword
    });
    try {
        const savedPatient = await newPatient.save();
        return response.status(200).send(savedPatient);
    } catch (error) {
        console.log(error);
    }
};

export const login = async(request,response)=>{
    try {
        const {email, password} = request.body;
        const patient = await Patient.findOne({email:email});
        if(!patient) return response.status(404).json({msg:"Patient not found"});

        const isMatch = await bcrypt.compare(password, patient.password);
        if(!isMatch) return response.status(400).json({msg:"Invalid Credentials"});
        
        const token = jwt.sign({id:patient._id},process.env.JWT_SECRET);
        delete patient.password;

        response.status(200).json({token,patient});
    } catch (error) {
        console.log(error);        
    }
    
};