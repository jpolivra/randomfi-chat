import { useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [sizeClass, setSizeClass] = useState(["test-container", true])

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  const changeSize = () => {
    console.log(sizeClass)
    if(sizeClass[1]) {
      setSizeClass(["test-false-container", !sizeClass[1]])
    } else {
      setSizeClass(["test-container", !sizeClass[1]])
    }
  }

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
      <div className={sizeClass[0]} onClick={() => {
        changeSize()
      }}>

      </div>
    </div>
  );
}

export default App;
