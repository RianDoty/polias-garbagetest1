const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost) {
    this.io = io;
    this.code = code;
    this.playersSync = new SyncHost();
    this.stateSync = new SyncHost();
  }
  
  updateList() {
    
  }
}