import React, { useEffect, useState } from 'react'
import './MusicList.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import ProfilePic from "../media/dp.jpg";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {carousel_items} from '../constants';
import SongCard from '../SongCard/SongCard';

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
  let audio = new Audio();

    const clickToPlay = (url, isPlaying) => {
        audio.pause();
        audio = new Audio(url);
        audio.play();
    }

  return (
    <div className='musiclist'>
        <div className='musiclist__searchbar'>
            <div className='musiclist__searchbar__left'>
                <SearchIcon/>
                <input placeholder='Search for Artists, Songs, or Playlists' type='text'/>
            </div>
            <div className='musiclist__searchbar__right'>
                <Avatar alt="Remy Sharp" src={ProfilePic}/>
                <h4>Rithik Dutt</h4>
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
        <div className='musiclist__songs container'>
            <h3>Recommended</h3>
            <div className='row'>
                {props.songs.map((song) => {
                    return (<div key={song.id} className='col-12 col-sm-3'>
                        <SongCard props={song} clickToPlay={clickToPlay}/>
                    </div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default MusicList