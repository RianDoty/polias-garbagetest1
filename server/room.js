const SyncHost = require('./sync')
const User = require('./user')

class Room {
  constructor(io, code, host, roomListHost, {name = 'unnamed', hostName = 'unnamed'} = {}) {
    this.io = io;
    this.code = code;
    this.host = host;
    this.name = name;
    this.hostName = hostName;
    
    this.users = {}
    
    //Users: {name, cardID}
    this.usersSync = new SyncHost(io, `room users ${code}`, {});
    this.stateSync = new SyncHost(io, `room state ${code}`, {
      state: 'lobby'
    });
    this.roomListSync = roomListHost
  }
  
  join(socket, {name='unknown'}={}) {
    //Create a user for the socket
    const user = new User(socket, {name});
    
    //Update users
    this.users[socket.id] = socket;
    this.usersSync.create(socket.id, user.template())
    this.updateList('pCount', this.pCount)
  }
  
  get pCount() {
    return Object.keys(this.users).length
  }
  
  template() {
    return {
      name: this.name,
      code: this.code,
      hostName: this.hostName,
      pCount: this.pCount,
      pMax: '∞'
    }
  }
  
  updateList(prop, value) {
    this.roomListSync.update(this.code, prop, value);
  }
}

module.exports = Room;