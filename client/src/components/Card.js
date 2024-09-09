import React from 'react';
import doc3 from '../assets/doc3.jpg';

export const Card = ({info}) => {
  let display;
  if(info){
    display = info.map((doctor, index) => {
      const { firstname, lastname, specialization, experience } = doctor;
      return (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <img className="h-[200px] w-full rounded-md" src={doc3} alt='Doctor'/>
          <div className="mt-4">
            <h3 className="font-semibold text-xl">Dr.{firstname} {lastname}</h3>
            <div className='bg-teal-100 w-fit p-[5px] rounded-lg'>
                <p className="text-teal-500 text-sm">{specialization}</p>
            </div>
            <p className="text-gray-500">Experience: {experience}</p>
          </div>
        </div>
      );
    });
  } else {
    display = <p>No doctors found :(</p>;
  }

  return <>{display}</>;
}
