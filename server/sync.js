class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this.data = startingData
    
    this.io.on('connection', s=>{
      s.on(`sync subscribe ${keyword}`, ack=>this.subscribe(s,ack))
    })
  }
  
  create(key, value) {
    const { data, io, keyword } = this;
    
    if (typeof value !== 'object') return; //Data in a sync host is ONLY going to be objects
    
    data[key] = value;
    
    io.to(keyword).emit(`sync create ${keyword}`, key, value)
  }
  
  update(key, prop, value) {
    const { data, io, keyword } = this;
    
    data[key][prop] = value;
    
    io.to(keyword).emit(`sync update ${keyword}`, )
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