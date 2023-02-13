import React from "react";
import "./Chat.css";

export default function Chat({ socket }) {
  const [username, setUsername] = React.useState("");

  socket.on("get_rooms_list", (data) => {
    console.log(data);
  });

  function handleJoinRoomClick() {
    console.log(username);
    socket.emit("get_rooms");
  }

  function handleCreateRoomClick() {
    console.log(username);
    socket.emit("create_room", { username, room: "abc" });
  }

  return (
    <div className="Chat-box">
      <div className="User-info-form">
        <form>
          <input
            type={"text"}
            id="fname"
            name="fname"
            placeholder="Your username..."
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="Chat-selection">
        <div>
          <button onClick={handleJoinRoomClick}>Join a Room</button>
        </div>
        <div>
          <button onClick={handleCreateRoomClick}>Create a Room</button>
        </div>
      </div>
    </div>
  );
}
