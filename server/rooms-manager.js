const SyncHost = require("./sync");
const Room = require('./room')
const { randomCode, unregisterCode } = require("./random-code");

const rooms = {};

module.exports = io => {
  const roomListSync = new SyncHost(io, "rooms");
  io.on("connection", socket => {
    socket.on("create-room", ({name: username}, name, ack) => {
      const code = randomCode();
      
      console.log('creating room')
      const newRoom = new Room(io, code, socket, roomListSync, {
        name
        
      });
      rooms[code] = newRoom;
      roomListSync.create(code, newRoom.template());
      
      ack(code);
    });
  });
};
