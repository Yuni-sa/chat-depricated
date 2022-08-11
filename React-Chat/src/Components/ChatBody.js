import React from "react";
import Message from "./Message";
import { useRef, useState, useEffect } from "react";
import { ws, sendMessage } from "../client.js";
import $ from "jquery";
import { username } from "../App";

function ChatBody(chat) {
  useEffect(() => {
    chat.bottomRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="chat-body">
      {chat.msgs.map((message, index) => {
        //TODO: determine by id's
        if (message.user != username)
          return (
            <Message
              id={index}
              key={index}
              ref_={chat.bottomRef}
              txt={message.msg}
              time={message.time}
              user={message.user}
            ></Message>
          );
        else
          return (
            <Message
              id={index}
              isMine={true}
              key={index}
              ref_={chat.bottomRef}
              txt={message.msg}
              time={message.time}
              user={message.user}
            ></Message>
          );
      })}
      <div ref={chat.bottomRef} />
    </div>
  );
}

export default ChatBody;

//TODO:
//fix errors
//disable scroll when navigating to chat from another page
