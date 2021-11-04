const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost, {name = 'unnamed', hostName = 'unnamed'} = {}) {
    this.io = io;
    this.code = code;
    this.host = host;
    this.hostName = hostName;
    
    this.players = []
    
    this.playersSync = new SyncHost(io, {});
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
      hostName: this.hostName,
      pCount: this.players.length,
      pMax: '∞'
    }
  }
  
  updateList() {
    
  }
}

module.exports = Room;