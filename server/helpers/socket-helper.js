let chat_room = {};
let users = {};

module.exports = (socket, io) => {
  socket.on("create_room", (data) => {
    console.log("Create room %s from %s", data.room, socket.id);
    if (Object.keys(chat_room).includes(data.room))
      io.sockets.in(socket.id).emit("error", { message: "room_exists" });
    else chat_room[data.room] = [socket.id];
  });

  socket.on("get_rooms", () => {
    io.sockets.in(socket.id).emit("get_rooms_list", Object.keys(chat_room));
  });
};
