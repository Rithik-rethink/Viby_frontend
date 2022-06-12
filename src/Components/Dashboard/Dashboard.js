import React from 'react';
import './Dashboard.css';
import Chatbot from '../chatbot/Chatbot';
import MusicList from '../PlayerBody/MusicList';
import Player from '../player/Player';

function Dashboard(){
    return(
        <div className='dashboard'>
            <div className='dashboard__body'>
                <MusicList/>  
                <Chatbot/>
            </div>
            <Player/>
        </div>
    );
}

export default Dashboard;