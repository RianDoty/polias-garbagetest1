io.on("connection", socket => {
  io.emit("socket-connected", socket.id);
  console.log("connection");

  socket.on("get rooms", ack => {
    console.log("request recieved to ");
    ack({
      uljhfvuirfbv: {
        code: "AAAA",
        name: "Haha yes",
        hostName: "Me",
        pCount: 2,
        pMax: 10
      }
    });
  });
  
  socket.on('create room', (name, ack) => {
    
  })
});