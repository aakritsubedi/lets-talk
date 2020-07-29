import React, { useState } from "react";

import Input from "components/Input";
import Button from "components/Button";
import MessageBox from "components/MessageBox";

function ChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  let changeInput = (e) => {
    setInput(e.target.value);
  };
  let sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <>
      <h1>Let's Talk</h1>
      <form>
        <Input type="text" onChange={changeInput} value={input} />
        <Button type="submit" sendMsg={sendMessage} />
      </form>

      {messages.map((msg, index) => (
        <MessageBox msg={msg} key={index} />
      ))}
    </>
  );
}

export default ChatApp;
