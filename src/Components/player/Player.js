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
import { PlaylistPlay } from '@material-ui/icons';
import { Slider } from '@mui/material';
import SongLogo from '../media/song.jpg';

function Player() {
    const [currentTime, setCurrentTime] = useState(0);
    const progressBar = useRef();
    const audioPlayer = useRef();

  return (
    <div className='player'>
        <div className='player__left'>
            <img
                className='player__albumLogo'
                src={SongLogo}
                alt=""
            />
            <div className='player__songInfo'>
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
        </div>
        <div className='player__center'>
            <ShuffleIcon className='player__green'/>
            <SkipPreviousIcon className='player__icon'/>
            <PlayCircleOutlineIcon className='player__play' fontSize='large'/>
            <SkipNextIcon className='player__icon'/>
            <RepeatIcon className='player__green'/>
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