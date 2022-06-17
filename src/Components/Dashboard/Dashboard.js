import React, {useState} from 'react';
import './Dashboard.css';
import axios from 'axios';
import Chatbot from '../chatbot/Chatbot';
import MusicList from '../PlayerBody/MusicList';
import Player from '../player/Player';
import Playlist from '../Playlist/Playlist';


function Dashboard(){
    const [isPlaylist, setIsPlaylist] = useState(false);
    const [model, setModel] = useState('');
    const [playlist, setPlaylist] = useState('');
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
                {isPlaylist ? <Playlist model={model} playlist={playlist} setIsPlaylist={setIsPlaylist}/> : <MusicList songs={songs} setIsPlaylist={setIsPlaylist} setModel={setModel} setPlaylist={setPlaylist}/>} 
                <Chatbot/>
            </div>
            <Player/>
        </div>
    );
}

export default Dashboard;