const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost) {
    this.io = io;
    this.code = code;
    this.playersSync = new SyncHost();
    this.stateSync = new SyncHost({
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