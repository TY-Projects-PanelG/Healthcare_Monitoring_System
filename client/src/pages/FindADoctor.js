import React, {useState, useEffect} from 'react'

export const FindADoctor = () => {
  const [info, setInfo] = useState(null);
  const api = `http://localhost:8000/api/doctors/`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
    })();
  }, [api]);

  if (!info) {
    return <p>Loading...</p>;
  }
  console.log(info);

  return (
    <div>
      {/* {info.map((doctor, index) => (
        <div key={index}>
          {doctor.firstname ? (
            <div>
              <h3>{firstname}</h3>
            </div>
          ) : (
            <p>No name information available.</p>
          )}
        </div>
      ))} */}
    </div>
  );
}
