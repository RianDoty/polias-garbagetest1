const SyncHost = require("./sync");
const Room = require('./room')
const { randomCode, unregisterCode } = require("./random-code");

const rooms = {};

module.exports = io => {
  const roomListSync = new SyncHost(io, "rooms");
  io.on("connection", socket => {
    socket.on("create-room", ({name: hostName}, name, ack) => {
      const code = randomCode();
      
      console.log('creating room')
      const newRoom = new Room(io, code, socket, roomListSync, {
        name,
        hostName
      });
      rooms[code] = newRoom;
      roomListSync.create(code, newRoom.template());
      
      //Send the host to the room
      ack(code);
    });
    
    socket.on('join room', (code) => {
      rooms[code].join(socket);
    })
    
    socket.on('leave room', (code) => {
      rooms[code].leave(socket);
    })
  });
};
