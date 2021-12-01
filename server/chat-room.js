//Manages a chat room, basically just a section of the chat
const SyncHost = require('./sync');

class ChatRoom {
  constructor(io, roomCode, chatKeyword) {
    const keyword = `room chat ${chatKeyword} ${roomCode}`;
    this.keyword = keyword;
    
    this.sync = new SyncHost(io, keyword);
    this.sockets = {};
    this.callbacks = new Map();
  }
  
  join(socket) {
    socket.join(this.keyword);
    this.sockets[socket.id] = socket;
    this.connect(socket)
  }
  
  leave(socket) {
    socket.leave(this.keyword);
    delete this.sockets[socket.id]
  }
  
  connect(socket) {
    
    socket.on(`send-message ${this.keyword}`, this.sendMessage);
  }
  
  disconnect(socket) {
    socket.off(`send-message ${this.keyword}`, this.sendMessage);
  }
  
  sendMessage(socket) {
    return (id, content) => {
      this.sync.create(id, {
        author: socket.user,
        content: content
      })
    }
  }
}

module.exports = ChatRoom;