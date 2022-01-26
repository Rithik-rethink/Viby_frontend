import React, {useState} from 'react';
import {} from "react-router-dom";
import {authenticate, signin, isAuthenticated} from "../../BackEnd";
import './Login.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {} from '@material-ui/core';


function Login() {

    const [values,setValues] = useState({
        email : "",
        password: "",
        error: "",
        loading: false
    });

    const {email,password,error,loading} = values
    const {user} = isAuthenticated();
    
    const handleChange = name => event => {
        setValues({...values, error: false, [name] : event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading:true})
        signin({email,password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, loading:false})
            }
            else{
                authenticate(data, () => {
                    setValues({
                        ...values,
                    })
                })
            console.log(user)
            }
        })
        .catch()
    }

    const loadingMessage = () => {
        return(
            loading && (
                <div className='alert alert-info'>
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (<div className='mt-2' style={{display: error ? "" : "none",color:"red"}}>
            {error}
        </div>)
    }

    




    
    return(
        <div className='login'>
            <div className='login_container'>
                <div className='mb-3 row offset-1 justify-content-center'>
                    <h1 className='mt-3'>
                        <center>
                        All your Shazams in one place.
                        </center>
                    </h1>
                    {loadingMessage()}
                    {errorMessage()}
                    <form className='form' noValidate autoComplete='off'>
                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Email ID" variant="filled" 
                        value={email} onChange={handleChange("email")}/>

                        <TextField id="outlined-basic" className='mt-3 textfield col-12 col-sm-12' 
                        color='primary' type="password" focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" 
                        value={password} onChange={handleChange("password")}/>


                        {/* <center className='mt-2' style={{color:"red"}}>{errormsg}</center> */}
                        <Button variant='contained' className='mt-3' color='secondary' style={{width:'100%'}} onClick={onSubmit}>Log In</Button>
                        <center><p className='login_redirect mt-2'>Don't have an account?<b><a href='/register'> Sign Up.</a></b></p></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;