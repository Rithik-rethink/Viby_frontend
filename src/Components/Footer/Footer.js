import React from 'react';
import './Footer.css';
import logo from '../media/Spotify_Logo_RGB_White.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className='footer mt-5'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12 col-sm-4'><img src={logo} alt="logo" width="50%"/></div>
                    <div className='col-12 offset-5 col-sm-3' style={{justifyContent:"space-between"}}>
                        <a href='https://www.instagram.com/re_thinkk/'><InstagramIcon color="secondary" fontSize='large'/></a>
                        <a href='https://www.facebook.com'><FacebookIcon color='secondary' fontSize='large'/></a>
                        <a hred='https://www.twitter.com'><TwitterIcon color='secondary' fontSize='large'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
