import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { FindADoctor } from './pages/FindADoctor';
import { Services } from './pages/Services';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { Schedule } from './components/Schedule';
import Calendar from './pages/CalenderPage';
const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/doctors' element={<FindADoctor />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/schedule' element={<Schedule />}/>
        <Route path='/calender' element={<Calendar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;