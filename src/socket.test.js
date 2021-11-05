const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const networking = require('../server/networking');

describe("Polias", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
    networking(io);
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });
  
  
  //Tests
  test('transfers data', done => {
    clientSocket.on('hello', arg => {
      expect(arg).toBe('world')
      done()
    })
    
    serverSocket.emit('hello', 'world')
  })
  
  test('creates rooms' done => {
       
       }) 
});