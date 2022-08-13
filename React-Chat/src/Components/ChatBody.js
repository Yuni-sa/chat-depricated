import React from "react";
import Message from "./Message";
import { useRef, useState, useEffect } from "react";
import { ws, sendMessage } from "../client.js";
import $ from "jquery";
import { username } from "../App";

function ChatBody(chat) {
  var mine = Boolean;
  useEffect(() => {
    chat.bottomRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const renderMsgSide = () =>
    chat.msgs.map((message, index) => {
      mine = false;
      //TODO: determine by id's
      if (message.user == username) {
        mine = true;
      }
      return (
        <Message
          id={index}
          isMine={mine}
          key={index}
          ref_={chat.bottomRef}
          txt={message.msg}
          time={message.time}
          user={message.user}
        ></Message>
      );
    });

  return (
    <div className="chat-body">
      {renderMsgSide()}
      <div ref={chat.bottomRef} />
    </div>
  );
}

export default ChatBody;

//TODO:
//fix errors
//disable scroll when navigating to chat from another page
