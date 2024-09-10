import mongoose, { Schema } from "mongoose";

const servicesSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    serialno:{
        type:String,
        required:true
    }
},{timestamps:true});

const Services = mongoose.model("Services",servicesSchema);
export default Services;