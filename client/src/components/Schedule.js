import React,{useState,useEffect} from 'react'

export const Schedule = () => {
    const [formData, setFormData] = useState({
        email:"",
        subject:"",
        message:""
    });

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/mail",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(formData),
            });
            const result = await response.json();
            console.log("Success",result);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <section>
            <form onSubmit={handleSubmit}>
                <input name='email' value={formData.email} onChange={handleInputChange} placeholder='Email' />
                <input name='subject' value={formData.subject} onChange={handleInputChange} placeholder='Subject' />
                <input name='message' value={formData.message} onChange={handleInputChange} placeholder='Message' />
                <button type='submit'>SEND</button>
            </form>
        </section>
    </>
  )
}
