import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Register.css';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import{signup} from "../../BackEnd";
import { Navigate } from 'react-router-dom';

function Register(){
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
    // const [repassword, setRepassword]=useState("");
    // const [nickname, setNickname]=useState("");
    // const [erroremail, setErroremail]=useState(false);
    // const [errormsg, setErrormsg]=useState("");
    // const [errorpwd, setErrorpwd]=useState(false);
    // const [errorname, setErrorname]=useState(false);

    const [values,setValues] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        repassword: "",
        error: "",
        success: false,
    })

    const {name,email,gender,password,repassword, success, error}=values

    const handleChange = name => event => {
        setValues({...values, error: false, [name] : event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(values)
        setValues({...values, error: false})
        signup({name, gender, email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, succcess: false})
            }
            else{
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    gender: "",
                    password: "",
                    repassword: "",
                    error: "",
                    success: true,
                })
            }
        })
        .catch(err => {
            if(err){
                console.log("Error in signup")
            }
            else{
                console.log("Sign up successful!")
            }
        })
    }

    const successMessage = () => {
            return(
                <div>
                    <center style={{display: success? "none": ""}}><p className='register_redirect mt-2'>
                        Already Signed In? <Link to="/login">Login Here </Link></p>
                    </center>
                    <center style={{display: success? "": "none"}}><p className='register_redirect mt-2'>
                        You have successfully signed in.<Link to="/login">Login Here </Link></p>
                    </center>
                </div>
            )
            

    }

    const errorMessage = () => {
        return (<div className='mt-2' style={{display: error ? "" : "none",color:"red"}}>
            {error}
        </div>)
    }
    

    
    return(
        values.success ? <Navigate to = '/'/> : 
        <div className='register'>
            <div className='register_container'>
                <div className='mb-3 row offset-1 justify-content-center'>
                    <h1 className='mt-3'>
                        <center>
                        Sign up to start healing
                        </center>
                    </h1>
                    {errorMessage()}
                    <form className='form' noValidate autoComplete='off'>
                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Name" variant="filled" 
                        onChange={handleChange("name")}
                        value={name}/>

                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Email" variant="filled" 
                        onChange={handleChange("email")}
                        value={email}/>

                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Gender" variant="filled" 
                        onChange={handleChange("gender")}
                        value={gender}/>

                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Password" variant="filled" 
                        onChange={handleChange("password")}
                        value={password} type='password'/>

                        <TextField id="outlined-basic" className='textfield col-12 col-sm-12' 
                        color='primary' focused inputProps={{style: {fontSize: 25, color: 'white'}}} 
                        InputLabelProps={{style: {fontSize: 25}}} label="Re-enter Password" variant="filled" 
                        onChange={handleChange("repassword")}
                        value={repassword} type='password'/>  
                        
                        <Button variant='contained' className='mt-3' 
                            color='secondary' style={{width:'100%'}}
                            onClick={onSubmit}>
                            Sign Up
                        </Button>
                        {successMessage()}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;