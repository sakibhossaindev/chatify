import React from 'react'
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <>
      <div className='bg-amber-300 w-2xs m-auto text-center'>
        <h1>Login to your account!</h1>
        <FcGoogle /><p>Login with Google</p>
        <TextField sx={{}} id="outlined-basic" label="Email" variant="outlined" type='email' />
        <TextField id="outlined-basic" label="password" variant="outlined" type='password' />
        <Button variant="contained">Contained</Button>
        <p>Don’t have an account ?  Sign up</p>
      </div>

    </>
  )
}

export default Login