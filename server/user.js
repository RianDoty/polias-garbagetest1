class User {
  constructor(socket, {name}) {
    this.socket = socket;
    this.name = name;
  }
  
  template() {
    const {name, socket} = this;
    const socketId = socket.id;
    return {name, socketId}
  }
}

module.exports = User;