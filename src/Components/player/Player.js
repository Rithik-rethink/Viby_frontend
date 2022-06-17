import React, {useState, useRef, useEffect} from 'react';
import './Player.css';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useSelector, useDispatch } from 'react-redux';
import { PlaylistPlay } from '@material-ui/icons';
import { Slider, Stack } from '@mui/material';
import SongLogo from '../media/song.jpg';

function Player() {
  const { track_name, track_artist, track_url, track_cover, audio, isPlaying, track_spotify } = useSelector((state) => state.track);
  const dispatch = useDispatch();

  return (
    <div className='player'>
        <div className='player__left'>
            <img
                className='player__albumLogo'
                src={track_cover.length> 0 ? track_cover : SongLogo}
                alt=""
            />
            <div className='player__songInfo'>
                <h6>{track_name.length > 20 ? track_name.substring(0,21) + '...' : track_name}</h6>
                <p>{track_artist.length > 20 ? track_artist.substring(0,21) + '...' : track_artist}</p>
            </div>
        </div>
        <div className='player__center'>
            {/* <ShuffleIcon className='player__green' style={{'cursor' : 'pointer'}}/>
            <SkipPreviousIcon className='player__icon' style={{'cursor' : 'pointer'}}/>
            {isPlaying ? <PauseCircleOutlineIcon className='player___play' fontSize='large' onClick={()=>dispatch(clickToPause())} style={{'cursor' : 'pointer'}}/>:<PlayCircleOutlineIcon className='player__play' fontSize='large' onClick={()=>dispatch(clickToResume())} style={{'cursor' : 'pointer'}}/>}
            <SkipNextIcon className='player__icon' style={{'cursor' : 'pointer'}}/>
            <RepeatIcon className='player__green' style={{'cursor' : 'pointer'}}/> */}
            <audio id="audio0" data1={track_cover} data2={track_name} src={track_url} controls volume preload="auto" autoPlay></audio>
        </div>
        <div className='player__right'>
            <a href={track_spotify} target='_blank' style={{'textDecoration':'none', width: '100%', 'textAlign': 'center'}}>
                <Button variant='contained' sx={{backgroundColor: '#1DB954', color: 'white'}} fullWidth startIcon={<OpenInNewIcon/>}>Spotify</Button>
            </a>
        </div>
    </div>
  )
}

export default Player