import { request, response, Router } from "express";
import { Patient } from "../models/patientSchema.js";
import { login, register } from "../controllers/auth.js";

const router = Router();

router.get("/",async(request,response)=>{
    try {
        const patients = await Patient.find();
        if(!patients) return response.sendStatus(404);
        return response.status(200).send(patients);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", async(request,response)=>{
    const {id} = request.params;
    try {
        const idPatient = await Patient.findById(id);
        if(!idPatient) return response.sendStatus(404);
        return response.send(idPatient);
    } catch (error) {
        console.log(error);
        return response.status(500).send({ error: "An error occurred while fetching patients." });
    }
});

router.post("/",register);

router.post("/login",login);

router.put("/:id", async(request,response)=>{
    const {id} = request.params;
    const updatedPatient = request.body;
    try {
        const upPatient = await Patient.findByIdAndUpdate(id,updatedPatient);
        if(!upPatient) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(upPatient);
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async(request,response)=>{
    const {id} = request.params;
    const deletedPatient = request.body;
    try {
        const dePatient = await Patient.findByIdAndDelete(id,deletedPatient);
        if(!dePatient) return response.status(400).send({msg:"Invalid Id."});
        return response.status(200).send(dePatient);
    } catch (error) {
        console.log(error);
    }
});


export default router;
