const SyncHost = require('./sync')

module.exports = (io)=>{
  const roomListSync = new SyncHost(io, 'rooms');
}