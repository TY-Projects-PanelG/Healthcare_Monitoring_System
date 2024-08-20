import { Router } from 'express';
import { addPatientToDoctor, fetchAllPatients, fetchPatientFromDoctorById } from '../controllers/pdcombine.js';

const router = Router();

router.post('/addPatientToDoctor', async (req, res) => {
  const { doctorID, patientID } = req.body;
  try {
    const updatedDoctor = await addPatientToDoctor(doctorID, patientID);
    if (!updatedDoctor) {
      return res.status(404).send('Doctor or Patient not found');
    }
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fetchPatient/:doctorID/:patientID',fetchPatientFromDoctorById);

router.get('/fetchAllPatients/:doctorId',fetchAllPatients);

export default router;