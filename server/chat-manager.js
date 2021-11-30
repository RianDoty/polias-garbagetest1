//Manages chat rooms
const ChatRoom = require('./chat-room')

class ChatRoomManager {
  constructor(io, roomCode) {
    this.io = io;
    this.roomCode = roomCode;
    
    const rooms = {};
  }
  
  makeRoom(keyword) {
    this.rooms[keyword] = new ChatRoom(this.io, this.roomCode, keyword)
  }
}

module.exports = ChatRoomManager