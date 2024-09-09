// import React, { useState, useEffect } from 'react';
// import doc1 from '../assets/doc1.jpg';

// export const FindADoctor = () => {
//   const [info, setInfo] = useState(null);
//   const api = `http://localhost:8000/api/doctors/`;

//   useEffect(() => {
//     (async function () {
//       try {
//         let data = await fetch(api).then((res) => res.json());
//         setInfo(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     })();
//   }, [api]);

//   if (!info) {
//     return <p>Loading...</p>;
//   }
//   console.log(info);

//   return (
//     <div>
//       {/* {info.map((doctor, index) => (
//         <div key={index}>
//           {doctor.firstname ? (
//             <div>
//               <h3>{doctor.firstname} {doctor.lastname}</h3>
//               <p>Specialization: {doctor.specialization}</p>
//               <p>Experience: {doctor.experience} years</p>
//             </div>
//           ) : (
//             <p>No name information available.</p>
//           )}
//         </div>
//       ))} */}
//       <div className='w-[220px] h-[360px] bg-black'>
//         <span className='z-index-[-1]'>Neurologist</span>
//         <img className='h-[260px]' src={doc1} alt='doctor image'/>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import doc1 from '../assets/doc1.jpg';

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
  console.log(info);

  return (
    <div>
      <div className='relative w-[220px] h-[330px] bg-white rounded-lg overflow-hidden'>
        <img className='h-[260px] w-full object-cover' src={doc1} alt='doctor image' />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
          <span className='text-white text-2xl font-semibold'>Neurologist</span>
        </div>
        <div>
          <h3>Deepanshu Sharma</h3>
          <h2>Experience : 6yrs</h2>
        </div>
      </div>
    </div>
  );
}
