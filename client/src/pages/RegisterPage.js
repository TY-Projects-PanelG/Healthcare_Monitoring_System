import React from 'react';
import {Button, TextField} from '@mui/material'

export const RegisterPage = () => {
  return (
    <div className='flex justify-center'>
      <form className="space-y-4 w-full max-w-md">
        <TextField 
        id = "firstname"
        type='text'
        required
        fullWidth
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            height:50,
          },
        }}
        />
        <TextField 
        id = "lastname"
        type='text'
        required
        fullWidth
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            height:50,
          },
        }}
        />
        <TextField 
        id = "email"
        type='email'
        required
        fullWidth
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            height:50,
          },
        }}
        />
        <TextField 
        id = "password"
        type='password'
        required
        fullWidth
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            height:50,
          },
        }}
        />
        <TextField 
        id = "contact"
        type='text'
        required
        fullWidth
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            height:50,
          },
          '&:hover': {
                  borderColor: '#809fff',
          },
        }}
        />
        <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#00008b',
                '&:hover': {
                  backgroundColor: '#001861',
                },
                height: '56px',
              }}
            >
              Login
            </Button>
       
      </form>
    </div>
  )
}
