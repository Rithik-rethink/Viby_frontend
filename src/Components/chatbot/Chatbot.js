import React from 'react'
import './Chatbot.css';
import Chat from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import FindPlaylists from './FindPlaylists';
import { Button } from '@mui/material';

const theme = {
  background: '#040404',
  fontFamily: 'Manrope',
  headerBgColor: '#3f51b5',
  headerFontSize: '15px',
  botBubbleColor: '#3f51b5',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function Chatbot() {
  const [key, setKey] = React.useState(0);

  const resetBot = () => {
    let newKey = key + 1;
    setKey(newKey);
  }

  return (
    <div className='chatbot'>
      <strong>
      <h3 style={{textAlign: 'center'}}>
        Talk to our bot to feel better
      </h3>
      </strong>
      <span className='bot'>
        <ThemeProvider theme={theme}>
        <Chat
          key={key}
          style={{width: '100%'}}
          steps={[
          {
          id:'intro', 
          message:'Hi! I am Viby. Nice to meet you!', 
          trigger: 'user_intro',
          },
          {
            id: 'user_intro',
            user: true,
            trigger: 'describe-day',
          },
          {
            id: 'describe-day',
            message: 'How are you doing today?',
            trigger: 'user_describe',
          },
          {
            id: 'user_describe',
            user: true,
            trigger: 'find-playlist',
          },
          {
            id: 'find-playlist',
            message: 'Please wait.. finding the best playlist for you!',
            trigger: 'end-message'
          },
          {
            id: 'end-message',
            component: <FindPlaylists/>,
            asMessage: true,
            end: true,
          },
          ]}
        />
        </ThemeProvider>
      <Button fullWidth variant='contained' onClick={() => resetBot()} sx={{marginTop: '2%'}}>Reset</Button>
      </span>
    </div>
  )
}

export default Chatbot