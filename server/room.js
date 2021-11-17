const SyncHost = require('./sync')
const User = require('./user')



class Room {
  constructor(io, code, host, roomListHost, {name = 'unnamed', hostName = 'unnamed'} = {}) {
    this.io = io;
    this.code = code;
    this.name = name;
    this.hostName = hostName;
    this.users = {}
    
    // Synchronization
    //Users: {name, cardID}
    this.usersSync = new SyncHost(io, `room users ${code}`, {});
    this.stateSync = new SyncHost(io, `room state ${code}`, {
      state: 'lobby'
    });
    this.roomListSync = roomListHost
    
    this.assignHost(host);
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
    
    //If the
  }
  
  leave(socket) {
    console.log(`leaving socket ${socket.id}`)
    if (!this.users[socket.id]) return; //can't have a socket that never joined leave
    
    //Update users
    delete this.users[socket.id]
    this.usersSync.delete(socket.id);
    this.updatePCount();
    
    //If every user is gone, the room shouldn't exist
    //Let users join a room for a bit even if it's empty
    if (this.pCount == 0) {
      
    }
    
    //The host leaving means we have to change things up
    if (this.isHost(socket) && this.pCount > 0) {
      //Pick a 'random' user
      const randomUser = Object.values(this.users)[0];
      this.assignHost(randomUser);
    }
  }
  
  get pCount() {
    const count = Object.keys(this.users).length;
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
    this.updateList('pCount', this.pCount)
  }
  
  isHost(socket) {
    return (socket.id === this.host.id);
  }
  
  assignHost(socket) {
    this.host = socket;
    this.usersSync.update(socket.id, 'host', true);
  }
}

module.exports = Room;