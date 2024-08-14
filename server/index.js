import express from 'express';
import mongoose from 'mongoose';
import patientsRouter from './routes/patientRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO)
.then(console.log(`DB Connection Successfull!!`))
.catch((err)=>console.log(err));

const app = express();

app.use(express.json());
app.use("/api/patients",patientsRouter);

app.listen(PORT,(request,response)=>{
    console.log(`Server Listening on Port : ${PORT}`);
});