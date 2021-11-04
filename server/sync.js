 class SyncHost {
  constructor(io, keyword, startingData = {}) {
    console.log(!!io)
    this.io = io;
    this.keyword = keyword;
    this.data = startingData
    
    io.on('connection', s=>{
      s.on(`sync subscribe ${keyword}`, ack=>this.subscribe(s,ack))
      s.on(`sync unsubscribe ${keyword}`, ()=>this.subscribe(s))
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
    
    io.to(keyword).emit(`sync update ${keyword}`, key, prop, value);
  }
  
  delete(key) {
    const { data, io, keyword } = this;
    
    delete data[key]
    
    io.to(keyword).emit(`sync delete ${keyword}`, key);
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