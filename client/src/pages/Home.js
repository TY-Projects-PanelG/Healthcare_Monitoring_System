import React,{useState,useEffect} from 'react';
import docImage1 from '../assets/doc1.jpg';
import docImage2 from '../assets/doc2.jpg';
import docImage3 from '../assets/doc3.jpg';
import doctorlogo from '../assets/animatedoc.svg';
import locationlogo from '../assets/location.svg';
import calender from '../assets/calender.webp';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Button } from '@mui/material';
import { ServiceCard } from '../components/ServiceCard';

export const Home = () => {
  const [data,setData] = useState(null);
  let api = `http://localhost:8000/api/services/all`;
  useEffect(() => {
    (async function () {
      const info = await fetch(api).then((res)=>res.json());
      setData(info);
    })();
  }, [api])
  console.log(data);

  return (
    <>
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
          <a href="/calender">
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
          </a>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex justify-center gap-10 py-10 bg-white">
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage1} alt="doc image1" />
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage2} alt="doc image2" />
        <img className="h-[280px] w-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" src={docImage3} alt="doc image3" />
      </div>
    </div>

      <section className='mb-20 mt-20'>
            <div className='ml-52 mr-52'>
              <div className='text-center'>
                <h2 className='text-xl font-semibold'>Providing the best <br/>medical services</h2>
                <p>World-class care for everyone. Our health system offers<br/> unmatched, expert healthcare.</p>
              </div>
              <div className='grid grid-cols-3'>
                <div className='text-center p-5'>
                  <img className='w-36 ml-20' src={doctorlogo} alt='doc'/>
                  <h3 className='font-semibold'>Find a Doctor</h3>
                  <p className='text-xs'>World-class care for everyone. Our health system offers unmatched, expert healthcare.From the lab to the clinic</p>
                  <ArrowCircleRightOutlinedIcon/>
                </div>
                <div className='text-center p-5'>
                  <img className='w-36 ml-20' src={locationlogo} alt='loc'/>
                  <h3 className='font-semibold'>Find a Location</h3>
                  <p className='text-xs'>World-class care for everyone. Our health system offers unmatched, expert healthcare.From the lab to the clinic</p>
                  <ArrowCircleRightOutlinedIcon/>
                </div>
                <div className='text-center p-5'>
                  <img className='w-36 ml-20' src={calender} alt='calender'/>
                  <h3 className='font-semibold'>Book Appointment</h3>
                  <p className='text-xs'>World-class care for everyone. Our health system offers unmatched, expert healthcare.From the lab to the clinic</p>
                  <ArrowCircleRightOutlinedIcon/>
                </div>
              </div>
            </div>
      </section>
      <section>
        <div>
          <div className='text-center'>
            <h2 className='text-xl font-semibold'>Our Medical Services</h2>
            <p>World-class care for everyone. Our health system offers<br/> unmatched, expert healthcare.</p>
          </div>
          <div className='grid grid-cols-3 ml-[100px] mr-[70px]'>
            <ServiceCard data={data}/>
          </div>
        </div>
      </section>
    </>
  );
};
