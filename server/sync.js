class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this.data = startingData;
  }
  
  update(data) {
    const { io, keyword } = this;
    this.data = data;
    
    io.to(keyword).emit(`update ${keyword}`, data);
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