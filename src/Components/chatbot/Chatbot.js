import React from 'react'
import './Chatbot.css';
import Chat from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import FindPlaylists from './FindPlaylists';

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
          style={{width: '100%'}}
          steps={[
          {
          id:'intro', 
          message:'Hi! How was your day?', 
          trigger: 'user_intro',
          },
          {
            id: 'user_intro',
            user: true,
            trigger: 'describe-day',
          },
          {
            id: 'describe-day',
            message: 'Please describe your day',
            trigger: 'user_describe',
          },
          {
            id: 'user_describe',
            user: true,
            trigger: 'find-playlist',
          },
          {
            id: 'find-playlist',
            message: 'Please wait.. finding the best playlist to better your mood!',
            trigger: 'end-message'
          },
          {
            id: 'end-message',
            component: <FindPlaylists/>,
            asMessage: true,
            end: true 
          }
          ]}
        />
        </ThemeProvider>
      </span>
    </div>
  )
}

export default Chatbot