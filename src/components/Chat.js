import React, { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase";
import SendMessages from "./SendMessages";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      {messages.map(({ id, photoURL, text }) => (
        <div key={id}>
          <img src={photoURL} alt="" />
          <p>{text}</p>
        </div>
      ))}
      <SendMessages />
    </div>
  );
}

export default Chat;
