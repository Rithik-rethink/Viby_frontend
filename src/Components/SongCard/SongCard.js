import React from 'react';
import { Button, Paper, IconButton } from '@mui/material'
import Stack from '@mui/material/Stack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useDispatch } from 'react-redux';
import { handleChange } from '../../redux/track';
import { addSongs } from '../../redux/liked';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

function SongCard(props) {
  const [like, setLike] = React.useState(false);
  const dispatch = useDispatch();

  // const clickPlay = (url) => {
  //   setIsPlaying(!isPlaying);
  //   props.clickToPlay(url, isPlaying);
  // }
  return (
    <Paper sx={{
        borderRadius: '15px',
        backgroundColor: '#282828',
        padding: '20px',
        marginBottom: '5%',
    }}>
      <Stack spacing={2}>
          <img src={props.props.album_cover} alt={props.props.album_name} width='100%'/>
          <h4 style={{color: 'white'}}>{props.props.album_name.length > 11 ? props.props.album_name.substring(0,16) + '...': props.props.album_name}</h4>
          <h5 style={{color: 'grey'}}>{props.props.artist_name.length > 11 ? props.props.artist_name.substring(0,16) + '...': props.props.artist_name}</h5>
          <Stack spacing={2}>
            {props.props.preview_link === 'null' ? null : <Button variant='contained' fontSize='small' fullWidth  onClick={() => {
              // clickPlay(props.props.preview_link);
              dispatch(handleChange({
                album_cover: props.props.album_cover,
                album_name: props.props.album_name,
                artist_name: props.props.artist_name,
                preview_link: props.props.preview_link,
                spotify_link: props.props.spotify_link,
              }));
              }} startIcon={<PlayCircleIcon/>}>Listen</Button>}
            <Stack direction='row' spacing={2}>
              <a href={props.props.spotify_link} target='_blank' style={{'textDecoration':'none', width: '100%', 'textAlign': 'center'}}>
                <Button variant='contained' sx={{backgroundColor: '#1DB954'}} fullWidth startIcon={<OpenInNewIcon/>}>Spotify</Button>
              </a>
              <IconButton aria-label="delete" size="small" onClick={() => {
                setLike(!like);
                if(!like) {
                  axios.get(`https://vibyapi.herokuapp.com/?id=${props.props.id}&n_recs=5`).then((res)=>{
                    dispatch(addSongs(res.data));
                  }).catch((e) => {
                    console.log(e.message);
                  })
                }
              }} color='secondary'>
                {like ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
              </IconButton>
            </Stack>
          </Stack>
      </Stack>
    </Paper>
  )
}

export default SongCard;