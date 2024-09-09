import React from 'react';
import docImage1 from '../assets/doc1.jpg';
import docImage2 from '../assets/doc2.jpg';
import docImage3 from '../assets/doc3.jpg';
import { Button } from '@mui/material';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center h-[500px] space-y-6 px-4">
        <p className="font-semibold text-4xl leading-snug">
          We help patients<br/>live a healthy,<br/>longer life
        </p>
        <div className="max-w-xl text-lg font-light">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#258aff',
              '&:hover': {
                backgroundColor: '#001861',
              },
              height: '40px',
              fontSize: '16px',
            }}
          >
            Request an Appointment
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center gap-10 py-10 bg-white">
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage1} alt="doc image1" />
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage2} alt="doc image2" />
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage3} alt="doc image3" />
      </div>
    </div>
  );
};
