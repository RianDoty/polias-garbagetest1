class User {
  constructor(socket, {name}) {
    this.socket = socket;
    this.name = name;
  }
  
  template() {
    const {name} = this;
    return {name}
  }
}

module.exports = User;