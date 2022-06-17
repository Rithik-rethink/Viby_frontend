import React, {useState, useRef} from 'react';
import './Player.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { PlaylistPlay } from '@material-ui/icons';
import { Slider } from '@mui/material';
import SongLogo from '../media/song.jpg';
import { clickToPause, clickToResume } from '../../redux/track';

function Player() {
  const { track_name, track_artist, track_url, track_cover, isPlaying } = useSelector((state) => state.track);
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
                <h4>{track_name}</h4>
                <p>{track_artist}</p>
            </div>
        </div>
        <div className='player__center'>
            <ShuffleIcon className='player__green' style={{'cursor' : 'pointer'}}/>
            <SkipPreviousIcon className='player__icon' style={{'cursor' : 'pointer'}}/>
            {isPlaying ? <PauseCircleOutlineIcon className='player___play' fontSize='large' onClick={()=>dispatch(clickToPause())} style={{'cursor' : 'pointer'}}/>:<PlayCircleOutlineIcon className='player__play' fontSize='large' onClick={()=>dispatch(clickToResume())} style={{'cursor' : 'pointer'}}/>}
            <SkipNextIcon className='player__icon' style={{'cursor' : 'pointer'}}/>
            <RepeatIcon className='player__green' style={{'cursor' : 'pointer'}}/>
        </div>
        <div className='player__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Player