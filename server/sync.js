class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this._data = startingData;
    
    this.initProxy()
  }
  
  initProxy() {
    this.handler = {
      set: (obj, prop, value) => {
        const lastValue = obj[prop];
        
        if (value === lastValue) return;
        this.update(prop, value)
        
        obj[prop] = value;
        return true
      }
    }
    
    this.data = new Proxy(this._data, this.handler);
  }
  
  create(prop, value) {
    const { io, keyword } = this;
    
    io.to(keyword).emit(`create ${keyword}`, prop, value)
  }
  
  update(prop, value) {
    const { io, keyword } = this;
    
    io.to(keyword).emit(`update ${keyword}`, prop, value);
  }
  
  delete(prop, value) {
    const { io, keyword } = this;
    
    io.to(keyword).emit(`delete ${keyword}`, prop, value);
  }
  
  subscribe(socket) {
    const { keyword } = this;
    socket.join(keyword);
  }
  
  unsubscribe(socket) {
    const { keyword } = this;
    socket.leave(keyword);
  }
}