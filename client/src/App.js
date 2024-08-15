import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const api = `http://localhost:8000/api/patients`;
  useEffect(()=>{
    (async function() {
      let fetchedData = await fetch(api).then((res)=>res.json());
      console.log(data);
      setData(fetchedData);
      console.log(fetchedData);
    })();
  },[api])


  return (
    <div className="App">
    </div>
  );
}

export default App;
