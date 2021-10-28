const express = require("express");
const path = require("path");
const app = express();
const http = require('http').Server(app)
const { Server } = require('socket.io')
const io = new Server(http, {
  path: '/api'
})

// PWAs want HTTPS!
function checkHttps(request, response, next) {
  // Check the protocol — if http, redirect to https.
  if (request.get("X-Forwarded-Proto").indexOf("https") != -1) {
    return next();
  } else {
    response.redirect("https://" + request.hostname + request.url);
  }
}

app.all("*", checkHttps);



/////////////SOCKET.IO///////////////
io.on('connection', socket => {
  io.emit('socket-connected', socket.id);
  console.log('connection')
})

io.on('get rooms',(ack)=>{
  ack({
    'uljhfvuirfbv': {code: 'AAAA', name: 'Haha yes', hostName: 'Me', pCount: 2}
  })
});

//////////////////////////////////////

// Express port-switching logic
// no touch
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
http.listen(port, () => {
  console.log(`❇️ Express server is running on port ${port}`);
});
