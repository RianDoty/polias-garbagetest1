const SyncHost = require("./sync");
const randomCode = require("./random-code");

const rooms

module.exports = io => {
  const roomListSync = new SyncHost(io, "rooms");
  io.on("connection", socket => {
    socket.on("create-room", ack => {
      const code = randomCode();
      
      
    });
  });
};
