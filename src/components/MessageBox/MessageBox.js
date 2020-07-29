import React, { forwardRef } from "react";

import "assets/css/message.css";

const MessageBox = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message-card ${isUser && 'message-user'}`}>
      <span className='sender'>{!isUser && `${message.username || 'Unknow User' }`}</span>
      <div className={isUser ? 'message-user-card' : 'message-guest-card'}>
        <div className='card-body'>
          <span>
            {message.message}
          </span>
        </div>
      </div>
      <span className='sender-info'>{!isUser && `${message.ip} ${message.org.split(' ')[0]}, ${message.city}`}</span>
    </div>
  );
});

export default MessageBox;
