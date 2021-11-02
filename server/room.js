const SyncHost = require('./sync')

class Room {
  constructor(io, code, host, roomListHost) {
    this.io = io;
    this.code = code;
    this.sync = new SyncHost();
  }
  
  updateList() {
    
  }
}