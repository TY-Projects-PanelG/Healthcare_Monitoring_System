import React,{useEffect,useState} from 'react'

export const Card = () => {
    const [info, setInfo] = useState(null);
    const api = `http://localhost:8000/api/doctors/`;

    useEffect(() => {
      (async function() {
        let data = await fetch(api).then((res)=>res.json());
        setInfo(data);
      })();
    }, [api])
    
  return (
    <div>Card</div>
  )
}
