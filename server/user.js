class User {
  constructor(socket, {name}) {
    this.socket = socket;
    this.name = name;
    this.host = false;
  }
  
  template() {
    const {name, socket, host} = this;
    const socketId = socket.id;
    return {name, socketId, host}
  }
}

module.exports = User;