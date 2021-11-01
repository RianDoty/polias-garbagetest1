class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this.data = startingData
    
    this.io.on('connection', s=>{
      s.on(`subscribe ${keyword}`, ack=>this.subscribe(s,ack))
    })
  }
  
  create(key, value) {
    
  }
  
  update(key, prop, value) {
    
  }
  
  delete(key) {
    
  }
  
  subscribe(socket, ack) {
    ack(this.data);
    socket.join(this.keyword)
  }
  
  unsubscribe(socket) {
    socket.leave(this.keyword);
  }
}

module.exports = SyncHost