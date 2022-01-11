import React from 'react';
import './Error.css';

function Error(){
    return(
        <div className='error'>
            <span><center style={{fontSize:"100px"}}>404 error</center><br/>This page you are looking for might have been removed, had it's name changed or is temporarily unavailable.
            <a href='/in'>Click here</a> to go back to homepage</span>
        </div>
    );
}

export default Error;