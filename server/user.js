

class User {
  constructor(socket, {name='Unknown'}={}) {
    this.socket = socket;
    this.name = name;
    this.host = false;
  }
  
  setNickname(nickname) {
    console.log('setting nickname of a user to ' + nickname)
    if (nickname !== '') this.nickname = nickname;
  }
  
  template() {
    const {name, socket, host} = this;
    const socketId = socket.id;
    console.log(`generating template:\nname:${name}\nhost:${host}`)
    return {name, socketId, host}
  }
}

module.exports = User;