const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost, {hostName = 'unnamed'} = {}) {
    this.io = io;
    this.code = code;
    this.host = host;
    this.hostName = hostName;
    
    this.playersSync = new SyncHost(io);
    this.stateSync = new SyncHost(io, {
      gameState: 'lobby',
      day: 0,
      winner: null
    });
    this.roomListSync = roomListHost
  }
  
  template() {
    return {
      name: this.name || 'Unnamed',
      code: this.code,
      host: this.hostName
    }
  }
  
  updateList() {
    
  }
}

module.exports = Room;