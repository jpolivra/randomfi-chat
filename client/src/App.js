import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
      <h3>Join Chat</h3>
      <input
        type="text"
        placeholder="Nickname"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Room"
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      ></input>
      <button onClick={joinRoom}>Join</button>
    </div>
  );
}

export default App;
