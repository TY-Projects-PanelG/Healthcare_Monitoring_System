import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const ServiceCard = ({data}) => {
  let display;
  if(data){
    display = data.map((service, index) => {
        const {title,description,serialno} = service;
      return (
        <div key={index} className="overflow-hidden p-10">
          <div className="mt-4">
            <h3 className="font-semibold text-xl pb-5">{title}</h3>
            <div className='w-fit rounded-lg'>
                <p className="text-sm">{description}</p>
            </div>
            <div className='flex items-center justify-between'>
                <ArrowCircleRightOutlinedIcon />
                <p className="flex justify-center items-center w-10 h-10 bg-teal-100 text-teal-500 rounded-md ml-auto">{serialno}</p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = <p>No Services found :(</p>;
  }

  return <>{display}</>;
}
