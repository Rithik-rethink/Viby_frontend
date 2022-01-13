import React, {useState} from 'react';
import './Login.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {FormControlLabel,Checkbox} from '@material-ui/core';


function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [erroremail, setErroremail]=useState(false);
    const [errorpassword, setErrorpassword]=useState(false);
    const [errormsg, setErrormsg]=useState("");
    const [rememberme, setRememberme]=useState(false);

    function handleChange(event, element){
        var value=event.currentTarget.value;
        if(element==="email") setEmail(value);
        else if(element==="password") setPassword(value);
    }
    
    function handleClick(){
        if(email===""){
            setErroremail(true);
            setErrormsg("Email ID cannot be empty")
            return
        }
        setErroremail(false);
        if(password===""){
            setErrorpassword(true);
            setErrormsg("Password cannot be empty")
            return;
        }
        setErrorpassword(false);
        console.log(rememberme)
        console.log('clicked');
    }

    function handleCheckClick(event){
        let val=event.target.checked;
        setRememberme(val);
    }

    return(
        <div className='login'>
            <div className='login_container mt-5'>
                <div className='mb-3 row offset-1 justify-content-center'>
                    <h1 className='mt-3'>
                        <center>
                        All your Shazams in one place.
                        </center>
                    </h1>
                    <form className='form' noValidate autoComplete='off'>
                    {erroremail?<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" onChange={(event)=>handleChange(event,"email")} error/>:<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" onChange={(event)=>handleChange(event,"email")}/>}
                        {errorpassword?<TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' color='primary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" onChange={(event)=>handleChange(event,"password")} error/>:<TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' color='primary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" onChange={(event)=>handleChange(event,"password")}/>}
                        <center className='mt-2'>
                            <FormControlLabel 
                            control={<Checkbox color='secondary' style={{color:'white'}}/>}
                            label="Remember me"
                            labelPlacement='end'
                            onChange={(event)=>handleCheckClick(event)}
                            />
                        </center>
                        <center className='mt-2' style={{color:"red"}}>{errormsg}</center>
                        <Button variant='contained' className='mt-3' color='secondary' style={{width:'100%'}} onClick={handleClick}>Log In</Button>
                        <center><p className='login_redirect mt-2'>Don't have an account?<b><a href='/register'> Sign Up.</a></b></p></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;