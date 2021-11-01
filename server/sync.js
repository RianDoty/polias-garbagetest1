class SyncHost {
  constructor(io, keyword, startingData = {}) {
    this.io = io;
    this.keyword = keyword;
    this.data = startingData
  }
  
  create(key, value) {
    
  }
}

module.exports = SyncHost