"use client";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';

const page = () => {



  return (
    <div className='login-page-parrent-class'>
        <div>
        <form className="login-form">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type='password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label='hide the password'>
                  <VisibilityOff /> 
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
        </div>
    </div>
  )
}

export default page
