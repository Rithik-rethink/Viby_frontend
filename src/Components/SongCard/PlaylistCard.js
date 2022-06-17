import React from 'react';
import { Button, Paper } from '@mui/material'
import Stack from '@mui/material/Stack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import songLogo from '../media/song.jpg';

function PlaylistCard(props) {

  return (
    <Paper sx={{
        borderRadius: '15px',
        backgroundColor: '#282828',
        padding: '20px',
        marginBottom: '5%',
    }}>
      <Stack spacing={2}>
          <img src={songLogo} alt={props.name} width='100%'/>
          <h4 style={{color: 'white'}}>{props.name}</h4>
          <h5 style={{color: 'grey'}}>DJ Viby</h5>
          <Button variant='contained' fontSize='small' fullWidth startIcon={<PlayCircleIcon/>}>Play</Button>
      </Stack>
    </Paper>
  )
}

export default PlaylistCard;