import React from 'react'
import './Chatbot.css';
import Chat from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function Chatbot() {
  return (
    <div className='chatbot'>
      <Chat config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
    </div>
  )
}

export default Chatbot