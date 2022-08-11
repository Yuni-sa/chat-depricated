import React from "react";

function Message(data) {
  return (
    <div className={data.isMine ? "my-message-body new" : "message-body new"}>
      <div className="msg-username">{data.user}</div>
      <div className="msg-txt">{data.txt}</div>
      <div className="msg-time">{data.time}</div>
      <div ref={data.ref_} />
    </div>
  );
}

export default Message;
