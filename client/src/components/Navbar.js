import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';

export const Navbar = () => {
  return (
    <nav classname="w-full bg-black">
      <div className='flex items-center h-[60px] justify-center'>
        <Link to='/' classname=''>Medicare</Link>
        <div className='flex gap-10 justify-center items-center'>
          <NavLink activeClassName='active' to="/" className="nav-link">Home</NavLink>
          <NavLink to="/doctors" className="nav-link">Find A Doctor</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>   
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
        <div className=''>
        <Button
        type='submit'
        variant="contained"
              sx={{
                backgroundColor: '#258aff',
                '&:hover': {
                  backgroundColor: '#001861',
                },
                height: '40px',
              }}
            >
              Login
            </Button>  
        </div>
      </div>
    </nav>
  )
}
