import React from 'react'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { ws, sendMessage } from '../client.js';
import ReactDOM from 'react-dom/client';
import { username } from "../App";

function MessageBox() {

  // adding React state variable to the function component MessageBox,
  //so the value of the variable will be preserved

  var [input, setInput] = useState('');

  // handling change of input
  const handleChange = e => {
    setInput(e.target.value);
  };

  // handling submit
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(input);
    setInput("");
  }



  return (
    <form className="message-box" onSubmit={handleSubmit}>
      <input type="text" disabled={username == "" || username == null} dir="auto" className="message-input" value={input} /*placeholder={''}*/ onChange={handleChange}></input>
      <button type="submit" disabled={username == "" || username == null} className="message-submit"><SendRoundedIcon sx={{ fontSize: 40 }}></SendRoundedIcon></button>
    </form>
  )
}

export default MessageBox
