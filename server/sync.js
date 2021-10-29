class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this.data = startingData;
  }
  
  update(data) {
    this.data = data;
    
    this.io.emit(`update ${this.keyword}`, data);
  }
}