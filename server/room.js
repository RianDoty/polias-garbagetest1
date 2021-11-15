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
    
    //Synchronization
    this.usersSync.set(socket.id, user.template())
    this.updatePCount()
    
    //Disconnected from site = left room
    socket.once('disconnect', ()=>this.leave(socket))
  }
  
  leave(socket) {
    console.log(`leaving socket ${socket.id}`)
    if (!this.users[socket.id]) return; //can't have a socket that never joined leave
    
    //Update users
    delete this.users[socket.id]
    this.usersSync.delete(socket.id);
    this.updatePCount();
  }
  
  get pCount() {
    const count = Object.keys(this.users).length + 1;
    console.log(`count measured as ${count}`)
    return  count;
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
    console.log(`updating ${prop} with ${value}`)
    this.roomListSync.update(this.code, prop, value);
  }
  
  updatePCount() { 
    this.updateList('giasflebhrbrb', this.pCount)
  }
}

module.exports = Room;