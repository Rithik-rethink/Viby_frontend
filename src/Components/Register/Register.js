import React, {useState} from 'react';
import './Register.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import Axios from 'axios';

function Register(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [repassword, setRepassword]=useState("");
    const [nickname, setNickname]=useState("");
    const [erroremail, setErroremail]=useState(false);
    const [errormsg, setErrormsg]=useState("");
    const [errorpwd, setErrorpwd]=useState(false);
    const [errorname, setErrorname]=useState(false);
    const [redirect, setRedirect]=useState(false);

    function handleChange(event, element){
        var value=event.currentTarget.value;
        if(element==="email") setEmail(value);
        else if(element==="password") setPassword(value);
        else if(element==="repassword") setRepassword(value);
        else if(element==="nickname") setNickname(value);
    }
    
    function handleClick(){
        if(email===""){
            setErroremail(true);
            setErrormsg("Email cannot be empty");
            return;
        }
        setErroremail(false);
        if(password!==repassword){
            setErrorpwd(true);
            setErrormsg("Passwords do not match");
            return;
        }
        if(password===""){
            setErrorpwd(true);
            setErrormsg("Password cannot be empty");
            return;
        }
        setErrorpwd(false);
        if(nickname===""){
            setErrorname(true);
            setErrormsg("Name cannot be empty");
            return;
        }
        setErrorname(false);
        setErrormsg("");
        // console.log("Email is "+email);
        // console.log("Password is "+password);
        // console.log("Name is "+nickname);
        var params={
            "username": nickname,
            "email": email,
            "password": password
        }
        const url= "http://localhost:8262/register";
        Axios.post(url , params, {
            "headers" : {
                "Accept" : "application/json",
                "content-type" : "application/json",
            },
            withCredentials : true
        }).then(response => {
            setRedirect(true);
        }).catch(err => {
            console.log(err);
            setErrormsg(err.message);
        });
        console.log('clicked');
    }
    if(redirect) return(<Redirect to={{pathname: "/in", state: {token: this.state.token}}}/>);
    return(
        <div className='register'>
            <div className='register_container'>
                <div className='mb-3 row offset-1 justify-content-center'>
                    <h1 className='mt-3'>
                        <center>
                        Sign up for free to start listening.
                        </center>
                    </h1>
                    <form className='form' noValidate autoComplete='off'>
                        {erroremail?<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" onChange={(event)=>handleChange(event,"email")} error/>:<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" onChange={(event)=>handleChange(event,"email")}/>}
                        {errorpwd?<TextField id="outlined-basic" className='textfield col-12 col-sm-12' type="password" color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" onChange={(event)=>handleChange(event,"password")} error/>:<TextField id="outlined-basic" className='textfield col-12 col-sm-12' type="password" color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" onChange={(event)=>handleChange(event,"password")}/>}
                        {errorpwd?<TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' color='primary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Re-enter Password" variant="filled" onChange={(event)=>handleChange(event,"repassword")} error/>:<TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' color='primary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Re-enter Password" variant="filled" onChange={(event)=>handleChange(event,"repassword")}/>}
                        {errorname?<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Nickname" variant="filled" onChange={(event)=>handleChange(event,"nickname")} error/>:<TextField id="outlined-basic" className='textfield col-12 col-sm-12' color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} InputLabelProps={{style: {fontSize: 25}}} label="Nickname" variant="filled" onChange={(event)=>handleChange(event,"nickname")}/>}
                        <center className='mt-2' style={{color:"red"}}>{errormsg}</center>
                        <Button variant='contained' className='mt-3' color='secondary' style={{width:'100%'}} onClick={handleClick}>Sign Up</Button>
                        <center><p className='register_redirect mt-2'>Already have an account?<b><a href='/login'> Sign In.</a></b></p></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;