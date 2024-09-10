import React,{useState,useEffect} from 'react'


export const Contact = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:""
  });
  return (
    <section>
      <form>
        <input 
          type='text'
          name='name'
          value={formData.name}
        />
      </form>
    </section>
  )
}
