import React, {useState} from 'react';
import './Dashboard.css';
import Chatbot from '../chatbot/Chatbot';
import MusicList from '../PlayerBody/MusicList';
import Player from '../player/Player';
import axios from 'axios';

function Dashboard(){

  const [songs, setSongs] = useState([]);

    React.useEffect(()=>{
        axios.get('https://vibyapi.herokuapp.com/dashboard').then((res)=>{
            setSongs(res.data);
        }).catch((err)=>{
            console.log(err.message); 
        })
      }, []);
    return(
        <div className='dashboard'>
            <div className='dashboard__body'>
                <MusicList songs={songs}/>  
                <Chatbot/>
            </div>
            <Player/>
        </div>
    );
}

export default Dashboard;