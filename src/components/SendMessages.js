import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessages() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: msg,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          placeholder="Message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}

export default SendMessages;
