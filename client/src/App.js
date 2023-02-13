import "./App.css";
import Chat from "./screens/Chat";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const socket = io.connect("http://localhost:8000");

socket.on("connect", () => {
  console.log(socket.id);

  socket.on("error", (data) => console.log(data));
});

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Chat socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
