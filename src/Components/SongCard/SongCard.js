import React from 'react';
import { Button, Paper } from '@mui/material'
import Stack from '@mui/material/Stack';

function SongCard(props, clickToPlay) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const clickPlay = (url) => {
    setIsPlaying(!isPlaying);
    props.clickToPlay(url, isPlaying);
  }
  return (
    <Paper sx={{
        borderRadius: '15px',
        backgroundColor: '#282828',
        padding: '20px',
        marginBottom: '5%',
        cursor: 'pointer',
    }} onClick={() => clickPlay(props.props.preview_link)}>
      <Stack spacing={2}>
          <img src={props.props.album_cover} alt={props.props.album_name} width='100%'/>
          <h4 style={{color: 'white'}}>{props.props.album_name}</h4>
          <h5 style={{color: 'grey'}}>{props.props.artist_name}</h5>
          <Stack direction='row' spacing={2}>
            <Button variant='outlined' fontSize='small'>{props.props.preview_link === 'null' ? 'Coming Soon' : 'Listen'}</Button>
            <a href={props.props.spotify_link} target='_blank' style={{'text-decoration':'none'}}>
              <Button variant='contained'>Spotify</Button>
            </a>
          </Stack>
      </Stack>
    </Paper>
  )
}

export default SongCard;