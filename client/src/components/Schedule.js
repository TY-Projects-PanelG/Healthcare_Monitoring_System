import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

export const Schedule = ({ selectDate, setDisplay }) => {
    const [patientId, setPatientId] = useState('66e2ddb6a26bbb545a17ae40');
    const [close, setClose] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response1 = await fetch("http://localhost:8000/api/mail", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result1 = await response1.json();
            console.log("Success", result1);


            const response2 = await fetch(`http://localhost:8000/api/patients/${patientId}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result2 = await response2.json();
            console.log("Success", result2);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {close && <section className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
                <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto p-4 bg-white rounded shadow-lg">
    <button
        type="button"
        onClick={() => {
            setClose(false);
            setDisplay(false);
        }}
        className="self-end text-gray-600 hover:text-gray-800"
    >
        <CloseIcon />
    </button>
    <span className="text-lg font-semibold mb-2">{selectDate.toDate().toDateString()}</span>
    
    <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <input
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder="Subject"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <input
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Message"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500"
    >
        CONFIRM
    </Button>
</form>

                </div>
            </section>}
        </>
    )
}
