import React, { useState, useEffect } from "react";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import db from "firebase.js";

import Input from "components/Input";
import Button from "components/Button";
import MessageBox from "components/MessageBox";

function ChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id: doc.id, msg: doc.data()})));
      });
  }, []);

  let changeInput = (e) => {
    setInput(e.target.value);
  };
  let sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      <h1>Let's Talk</h1>
      <form>
        <Input type="text" onChange={changeInput} value={input} />
        <Button type="submit" sendMsg={sendMessage} disabled={!input} />
      </form>

      <FlipMove>
        {messages.map(({id, msg}) => (
          <MessageBox message={msg} key={id} username={username} />
        ))}
      </FlipMove>
    </>
  );
}

export default ChatApp;
