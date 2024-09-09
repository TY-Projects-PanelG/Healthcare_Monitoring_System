import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Input } from '@mui/material';

export const FindADoctor = () => {
  const [info, setInfo] = useState(null);
  const api = `http://localhost:8000/api/doctors/`;

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [api]);

  if (!info) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <section className=' ml-52 mr-52'>
      <div>
        <Input 
        placeholder='Search here...'
        />
      </div>
    <div className='grid grid-cols-4 gap-4 p-4'>
      <Card info={info}/>
    </div>
    </section>
    </>
  );
}
