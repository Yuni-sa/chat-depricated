import './App.css';
import ChatBody from './Components/ChatBody'
import MessageBox from './Components/MessageBox';
import ChatHeader from './Components/ChatHeader';
import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const App =({}) => {

  return (
    <div className="App">
      <ChatHeader></ChatHeader>
      <ChatBody></ChatBody>
      <MessageBox></MessageBox>
    </div>
  );
}
export default App;
