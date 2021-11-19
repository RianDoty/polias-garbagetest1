class User {
  constructor(socket, {name}={}) {
    this.socket = socket;
    this.name = name;
    this.host = false;
  }
  
  setNickname(nickname) {
    if (nickname !== '') this.nickname = nickname;
  }
  
  template() {
    const {name, socket, host} = this;
    const socketId = socket.id;
    return {name, socketId, host}
  }
}

module.exports = User;