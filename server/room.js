const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost, {name = 'unnamed', hostName = 'unnamed'} = {}) {
    this.io = io;
    this.code = code;
    this.host = host;
    this.name = name;
    this.hostName = hostName;
    
    this.players = {}
    
    this.usersSync = new SyncHost(io, `room users ${code}`, {});
    this.stateSync = new SyncHost(io, `room state ${code}`, {
      state: 'lobby'
    });
    this.roomListSync = roomListHost
  }
  
  template() {
    return {
      name: this.name,
      code: this.code,
      hostName: this.hostName,
      pCount: this.players.length,
      pMax: '∞'
    }
  }
  
  updateList(prop, value) {
    this.roomListSync.update(this.code, prop, value);
  }
}

module.exports = Room;