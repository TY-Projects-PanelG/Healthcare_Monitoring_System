import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        minlength: 7,
    }
});

export const Patient = mongoose.model("Patient", patientSchema);
