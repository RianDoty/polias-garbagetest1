//Manages a chat room, basically just a section of the chat
const SyncHost = require('./sync');

class ChatRoom {
  constructor(io, roomCode, chatKeyword) {
    const keyword = `room chat ${chatKeyword} ${roomCode}`;
    this.keyword = keyword;
    
    this.sync = new SyncHost(io, keyword);
    this.sockets = {};
  }
  
  join(socket) {
    socket.join(this.keyword);
    this.sockets[socket.id] = socket;
  }
  
  leave(socket) {
    socket.leave(this.keyword);
    delete this.sockets[socket.id]
  }
  
  
}

module.exports = ChatRoom;