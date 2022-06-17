import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SongCard from '../SongCard/SongCard';

function FindPlaylists(props) {
  const [msg,setMsg] = useState('');
  const [songs, setSongs] = useState([]);

  let audio = new Audio();

    const clickToPlay = (url, isPlaying) => {
        audio.pause();
        audio = new Audio(url);
        audio.play();
    }

  useEffect(() => {
    setMsg(props.steps.user_describe.message);
    if(msg.length > 0) {
        axios.post('https://damp-stream-18102.herokuapp.com/predict', {message: msg}).then((res) => {
            const valence = res.data.prediction.valence;
            axios.get(`https://vibyapi.herokuapp.com/getSongsbyMood?val=${valence}`).then((res)=>{
                setSongs(res.data);
            }).catch((err)=>{
                console.log(err.message); 
            })
        }).catch((e) => {
            console.log(e.message);
        })
    }
  });

  return (
    <div>
        {songs.length > 0 ? 'Here are few songs to make your day better!' : null}<br/>
        <div>{songs.map((song) => {
            return (<div key={song.id}>
                <SongCard props={song} clickToPlay={clickToPlay}/>
            </div>)
        })}</div>
    </div>
  )
}

export default FindPlaylists