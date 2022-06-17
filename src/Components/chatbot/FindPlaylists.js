import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addSongs } from '../../redux/bot';
import SongCard from '../SongCard/SongCard';

function FindPlaylists(props) {
  const [msg,setMsg] = useState('');
  const dispatch = useDispatch();
//   const [songs, setSongs] = useState([]);

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
                // setSongs(res.data);
                dispatch(addSongs(res.data));
            }).catch((err)=>{
                console.log(err.message); 
            })
        }).catch((e) => {
            console.log(e.message);
        })
    }
  });

//   const replies = ['Generating songs to ameliorate your mood, songs will be added to your dashboard. Sit back and enjoy!', 'Songs to suit your mood has been added to the dashboard. Enjoy!', 'We will always look out for you by recommending your mood based songs', 'Keep feeding me updates and I will keep adding more songs to your queue!']

  return (
    <div>
        {/* {replies[Math.floor(Math.random() * replies.length)]} */}
        Generating songs to ameliorate your mood, songs will be added to your dashboard. Sit back and enjoy!
        {/* <div>{songs.map((song) => {
            return (<div key={song.id}>
                <SongCard props={song} clickToPlay={clickToPlay}/>
            </div>)
        })}</div> */}
    </div>
  )
}

export default FindPlaylists