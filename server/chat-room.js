//Manages a chat room, basically just a section of the chat
const SyncHost = require('./sync');

class ChatRoom {
  constructor(io, roomCode, chatKeyword) {
    const keyword = `room chat ${chatKeyword} ${roomCode}`;
    this.keyword = keyword;
    
    this.sync = new SyncHost(io, keyword);
  }
  
  join(socket) {
    
  }
}

module.exports = ChatRoom;