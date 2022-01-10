import React, {useState} from 'react';
import './Login.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {FormControlLabel,Checkbox} from '@material-ui/core';


function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    function handleChange(event, element){
        var value=event.currentTarget.value;
        if(element==="email") setEmail(value);
        else if(element==="password") setPassword(value);
        console.log(email);
    }

    function handleClick(){
        console.log('clicked');
    }

    return(
        <div className='login'>
            <div className='login_container'>
                <h1 className='mt-3'>
                    <center>
                    All your Shazams in one place.
                    </center>
                </h1>
                <div className='mt-5 mb-3 row justify-content-center'>
                    <form className='form' noValidate autoComplete='off'>
                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='secondary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" onChange={(event)=>handleChange(event,"email")}/>
                        <TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' color='secondary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" onChange={(event)=>handleChange(event,"email")}/>
                        <center className='mt-2'>
                            <FormControlLabel 
                            control={<Checkbox color='secondary' style={{color:'white'}}/>}
                            label="Remember me"
                            labelPlacement='end'
                            />
                        </center>
                        <Button variant='contained' className='mt-3' color='primary' style={{width:'100%'}} onClick={handleClick}>Log In</Button>
                        <center><p className='login_redirect mt-2'>Don't have an account?<b><a href='/register'> Sign Up.</a></b></p></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;