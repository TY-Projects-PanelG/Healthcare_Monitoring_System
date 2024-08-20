import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Doctor } from '../models/doctorSchema.js';


export const register = async(request,response)=>{
    const {
        firstname,
        lastname,
        email,
        dob,
        contact,
        experience,
        education,
        password,
        comments
    } = request.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);

    const newDoctor = new Doctor({
        firstname,
        lastname,
        email,
        dob,
        contact,
        experience,
        education,
        password:hashedPassword,
        comments
    });
    try {
        const savedDoctor = await newDoctor.save();
        return response.status(200).send(savedDoctor);
    } catch (error) {
        console.log(error);
    }
};

export const login = async(request,response)=>{
    try {
        const {email, password} = request.body;
        const doctor = await Doctor.findOne({email:email});
        if(!doctor) return response.status(404).json({msg:"Doctor not found"});

        const isMatch = await bcrypt.compare(password, doctor.password);
        if(!isMatch) return response.status(400).json({msg:"Invalid Credentials"});
        
        const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET);
        delete doctor.password;

        response.status(200).json({token,doctor});
    } catch (error) {
        console.log(error);        
    }
    
};