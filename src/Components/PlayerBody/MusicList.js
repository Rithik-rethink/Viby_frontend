import React, { useEffect, useState } from 'react'
import './MusicList.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ProfilePic from "../media/dp.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Lottie from 'react-lottie';
import loadAnimation from '../../lotties/loading.json';
import waitAnimation from '../../lotties/wait.json';
import {carousel_items} from '../constants';
import SongCard from '../SongCard/SongCard';
import PlaylistCard from '../SongCard/PlaylistCard';
import logo from '../media/040404.png';

function Item(props)
{
    return (
        <Paper sx={{
            borderRadius: '22px',
            color: 'white',
            backgroundColor: '#e389b9',
            padding: '30px',
        }}>
            <h1><b>{props.item.name}</b></h1>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

function MusicList(props) {
    
    const {botSongs} = useSelector((state) => state.bot);
    const {likedSongs} = useSelector((state) => state.liked);
    // const clickToPlay = (url, isPlaying) => {
    //     audio.pause();
    //     audio = new Audio(url);
    //     audio.play();
    // }
    const M1 = ['Angry', 'Calm', 'Happy', 'Sad'];
    const M2 = ['Angry', 'Calm', 'Content', 'Delighted', 'Depressed', 'Excited', 'Happy', 'Sad', 'Sleepy'];

  return (
    <div className='musiclist'>
        <div className='musiclist__searchbar'>
            <div className='musiclist__searchbar__left'>
                <img src={logo} alt='viby-logo' width='50%'/>
            </div>
            <div className='musiclist__searchbar__right'>
                <Avatar alt="Remy Sharp" src={ProfilePic}/>
                <h4>student</h4>
            </div>
        </div>
        <div className='musiclist__carousel'>
            <Carousel
                NextIcon={<ArrowForwardIosIcon/>}
                PrevIcon={<ArrowBackIosNewIcon/>}
            >
                {
                    carousel_items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
        {props.songs.length > 0 ? 
            <div className='musiclist__songs container'>
                <h3>{likedSongs.length > 0 ? 'We added more songs based on your taste': null}</h3>
                <div className='row'>
                    {likedSongs.map((song) => {
                        return (<div key={song.id} className='col-12 col-sm-4'>
                            <SongCard props={song}/>
                        </div>);
                    })}
                </div>
                <h3>{botSongs.length > 0 ? 'Here are few songs to make your day better' : 'Vibe your way through!'}</h3>
                {botSongs.length > 0 ? 
                <div className='row'>
                    {botSongs.map((song) => {
                        return (<div key={song.id} className='col-12 col-sm-4'>
                            <SongCard props={song}/>
                        </div>)
                    })}
                </div>
                : <div>
                    <Lottie
                        options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: waitAnimation,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }
                        }
                        height={300}
                        width={300}
                    />
                </div>
                }
                <br/><h3>Playlists to suit your mood </h3>
                <div className='row'>
                    {M1.map((ele) => {
                        return(
                            <div key={ele} direction='row' className='col-12 col-sm-4' onClick={() => {
                                props.setIsPlaylist(true);
                                props.setModel('M2');
                                props.setPlaylist(ele);
                            }}>
                                <PlaylistCard name={ele}/>
                            </div>
                        );
                    })}
                </div>
                <br/><h3>Playlists to suit your mood (Special Edition)</h3>
                <div className='row'>
                    {M2.map((ele) =>{
                        return(
                            <div key={ele} direction='row' className='col-12 col-sm-4' onClick={()=>{
                                props.setIsPlaylist(true);
                                props.setModel('M1');
                                props.setPlaylist(ele);
                            }}>
                                <PlaylistCard name={ele}/>
                            </div>
                        );
                    })}
                </div>
                <br/><h3>{props.songs.length > 0 ? 'Trending' : 'Goodness on the way..'}</h3>
                <div className='row'>
                    {props.songs.map((song) => {
                        return (<div key={song.id} className='col-12 col-sm-4'>
                            <SongCard props={song}/>
                        </div>)
                    })}
                </div>
            </div>
            : <div>
                <Lottie
                    options={
                        {
                            loop: true,
                            autoplay: true,
                            animationData: loadAnimation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice',
                            },
                        }
                    }
                    height={320}
                    width={320}
                />
            </div>
        }
    </div>
  )
}

export default MusicList