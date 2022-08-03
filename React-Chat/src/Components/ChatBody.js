import React from 'react'
import Message from './Message'
import { useRef,useState,useEffect } from 'react';
import {ws,sendMessage} from '../client.js';
import $ from 'jquery';

function ChatBody() {
  const bottomRef = useRef(null);
  var [messages, setMessages] = useState(["hi"]);

  useEffect(()=>{
    ws.onmessage = function(e){
    let data = JSON.parse(e.data);
    var msg = data.text;
    console.log(msg);
    if ($.trim(msg) == '') {
      console.log("oof");
      return false;
    }
    messages.push(msg)
    $('<div class="message-body" key={index}>'+msg+'</div>').appendTo($('.chat-body'))
    //------not sure about these lines yet O-O ------------------------------
    /*const chat_body = ReactDOM.createRoot(
      document.getElementById('chat-body')
    );
    const messageElement = <div className="message-box">' + {msg} + '</div>;
    chat_body.render(messageElement);*/
    //------------------------------------------------------------------------
  }
  });
  
  
  /*useEffect(() => {
    // simulate chat messages flowing in
    setInterval(
      () =>
        setMessages(current => [
          ...current,
          'hi',
        ]),
      6000,
    );
  }, []);*/

  // useEffect(() => {
  //   $('<div className="chat-body">')
  //           {messages.map((message, index) => {
  //             $('<div className="message-body" key={index}>{message}</div>');
  //     })}
  // 
  // $('<div ref={bottomRef}/></div >');
  // });


  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (

    <div className='chat-body'>


<div ref={bottomRef}/>
</div >
  )
}



export default ChatBody
