import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "assets/css/message.css";

const MessageBox = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message-card ${isUser && 'message-user'}`}>
      <Card className={isUser ? 'message-user-card' : 'message-guest-card'}>
        <CardContent>
          <Typography color="inherit">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default MessageBox;
