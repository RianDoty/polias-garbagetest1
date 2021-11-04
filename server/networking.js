
const InitRooms = require('./rooms-manager')

module.exports = (io)=>{
  console.log(!!io)
  InitRooms(io)
}