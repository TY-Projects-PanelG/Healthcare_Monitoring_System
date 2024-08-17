import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    comment:String,
});

const doctorSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        unique: false
    },
    lastname: {
        type: String,
        minlength: 5,
        maxlength: 20,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true,
        required: false
    },
    contact: {
        type: String,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    experience:{
        type: String,
    },
    education:{
        tenth:{
            type:String,
            required:true,
        },
        twelth:{
            type:String,
            required:true,
        },
        ug:{
            type:String,
            required:true,
        },
        pg:{
            type:String,
            required:true,
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
    comments:[reviewSchema]

},{timestamps: true});

export const Doctor = mongoose.model("Patient", doctorSchema);
