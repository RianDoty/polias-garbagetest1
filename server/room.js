const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost) {
    console.log('room created')
    this.io = io;
    this.code = code;
    this.playersSync = new SyncHost(io);
    this.stateSync = new SyncHost(io, {
      gameState: 'lobby',
      day: 0,
      winner: null
    });
    this.roomListSync = roomListHost
  }
  
  updateList() {
    
  }
}

module.exports = Room;