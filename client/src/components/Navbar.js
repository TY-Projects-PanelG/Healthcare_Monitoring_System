import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';

export const Navbar = () => {
  return (
    <nav classname="w-full h-60 bg-black">
      <div>
        <Link to='/' classname=''>Medicare</Link>
        <div className='gap-10'>
          <NavLink activeClassName='active' to="/" className="nav-link">Home</NavLink>
          <NavLink to="/doctors" className="nav-link">Find A Doctor</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>   
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
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
    </nav>
  )
}
