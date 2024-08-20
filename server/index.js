import express from 'express';
import mongoose from 'mongoose';
import patientsRouter from './routes/patientRoutes.js';
import doctorsRouter from './routes/doctorRoutes.js';
import pdCombineRouter from './routes/pdCombineRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO)
.then(console.log(`DB Connection Successfull!!`))
.catch((err)=>console.log(err));

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/patients",patientsRouter);
app.use("/api/doctors",doctorsRouter);
app.use("/api/combine",pdCombineRouter);

app.listen(PORT,(request,response)=>{
    console.log(`Server Listening on Port : ${PORT}`);
});

