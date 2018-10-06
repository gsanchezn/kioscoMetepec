// server.js
var express = require('express');  
var app = express();  
var http  = require('http').createServer(app); 
var io = require('socket.io')(http); 

app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});





var nsp = io.of('/kiosco1');
nsp.on('connection', function(socket) {
   console.log('someone connected kiosco1');
   socket.on('linkClicked', function(msg){
    console.log("msg vista del lado del servidorrrrrrrrr: " + msg);
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
	 socket.broadcast.emit('newClick',  msg) // attention: this is a general broadcas -- check how to emit to a room
  });

});

var nspTwo = io.of('/kiosco2');
nspTwo.on('connection', function(socket) {
   console.log('someone connected kiosco2');
   socket.on('linkClicked', function(msg){
    console.log("msg: " + msg);
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
	 socket.broadcast.emit('newClick',  msg) // attention: this is a general broadcas -- check how to emit to a room
  });
});

var nspThree = io.of('/kiosco3');
nspThree.on('connection', function(socket) {
   console.log('someone connected kiosco3');
   socket.on('linkClicked', function(msg){
    console.log("msg: " + msg);
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
	 socket.broadcast.emit('newClick',  msg) // attention: this is a general broadcas -- check how to emit to a room
  });
});

var nspFour = io.of('/kiosco4');
nspFour.on('connection', function(socket) {
   console.log('someone connected kiosco3');
   socket.on('linkClicked', function(msg){
    console.log("msg: " + msg);
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
	 socket.broadcast.emit('newClick',  msg) // attention: this is a general broadcas -- check how to emit to a room
  });
});

/* io.on('connection', function(socket){
  // when linkClicked received from client... 
  socket.on('linkClicked', function(msg){
		
    console.log("msg: " + msg);
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
	 socket.broadcast.emit('newClick',  msg) // attention: this is a general broadcas -- check how to emit to a room
	 
	 
	 
  });
}); */





http.listen(5000, function(){
  console.log('listening on *:5000');
});