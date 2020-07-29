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
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    let user = !localStorage.getItem('username') ? prompt("Please enter your name") : localStorage.getItem('username');
    localStorage.setItem('username', user);
    setUsername(user);
  }, []);

  useEffect(() => {
    async function fetchUserInfo() {
      const userIpInfo = await fetch('https://ipapi.co/json').then(res => res.json());
      setUserInfo(userIpInfo);
    }

    fetchUserInfo();
  }, [])

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, msg: doc.data() }))
        );
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
      ip: userInfo.ip,
      city: userInfo.city,
      region: userInfo.region,
      org: userInfo.org,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      <h1>Let's Talk</h1>
      <form className="app-form">
        <Input type="text" onChange={changeInput} value={input} />
        <Button type="submit" sendMsg={sendMessage} disabled={!input} />
      </form>

      <div className='message-wrapper'>
        <FlipMove>
          {messages.map(({ id, msg }) => (
            <MessageBox message={msg} key={id} username={username}/>
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default ChatApp;
