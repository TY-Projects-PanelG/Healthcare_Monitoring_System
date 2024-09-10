import Services from "../models/servicesSchema.js";

export const addService = async(request,response)=>{
    try {
        const {title,description,serialno} = request.body;
        const newService = new Services({
            title,
            description,
            serialno
        });
        const savedService = await newService.save();
        response.status(201).send(savedService);
    } catch (error) {
        console.log(error);
    }
};

export const getAllServices = async(request,response)=>{
    try {
        const allServices = await Services.find();
        response.status(200).send(allServices);
    } catch (error) {
        console.log(error);
    }
};