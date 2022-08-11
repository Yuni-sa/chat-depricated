import './App.css';
import ChatBody from './Components/ChatBody'
import MessageBox from './Components/MessageBox';
import ChatHeader from './Components/ChatHeader';
import React, { useRef, useEffect, useState } from "react";
import { ws, sendMessage } from './client.js';
import $ from 'jquery';
import Navbar from './Components/Navbar';

//temporary,intended for testing
export var username = ''
export const id = prompt("what's your id?")
export const password = prompt("what's your password?")

// login func - gets the cookie
// fetch('http://localhost:4000/api/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   credentials: 'include',
//   body: JSON.stringify({
//     id,
//     password
//   })
// })


// register func
/*fetch('http://localhost:4000/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id,
    username,
    password
  })
})*/


console.log(username)

//global array of the messages
export var global_msgs = []


const App = ({ }) => {

  // get user func
  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await fetch('http://localhost:4000/api/user', {
  //         headers: { 'Content-Type': 'application/json' },
  //         credentials: 'include',
  //       })
  //       const info = await response.json()
  //       username = info.username
  //     }
  //   )();
  // });



  // messages array and setMessages function,
  //used only for updating the messages (awkward solution for now)
  var [messages, setMessages] = useState([]);

  //reference to the last message, used for scrolling
  const bottomRef = useRef(null);


  useEffect(() => {
    ws.onmessage = function (e) {
      let data = JSON.parse(e.data);
      var msg = data.text;
      var time = data.time;
      time = new Date(time)
      time = time.getHours() + ":" + time.getMinutes();
      var user = data.username;
      // console.log(msg);
      if ($.trim(msg) == '') {
        console.log("oof");
        return false;
      }

      setMessages(current => [
        ...current,
        { msg: msg, time: time, user: user },
      ])

      global_msgs.push({ msg: msg, time: time, user: user })
    }
  });


  /*useEffect(() => {
    setMessages(messages)
  }, [messages]);*/


  return (

    <div className="App">
      {/*<ChatHeader></ChatHeader>*/}
      <ChatBody msgs={global_msgs} bottomRef={bottomRef}></ChatBody>
      <MessageBox></MessageBox>
    </div>

  );
}
export default App;
