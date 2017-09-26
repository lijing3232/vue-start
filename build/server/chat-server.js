var server = require('socket.io')();
var clinets = new Array();

server.on('connection',function(socket){
	console.log('socket.id '+socket.id+': connecting');
	var client={
		socket:scoket,
		name:''
	};
	socket.on("message",function(name){
		client.name=name;
		clinets.push(client);
		socket.broadcast.emit("userIn","userIn");

	});
	socket.on('send message',function(data){
		socket.broadcast.emit(data.message);
	});
	
	socket.on('send private message',function(data){
		for(var n in clients)
		{
			if(n.name===data.name)
			{
				n.socket.emit(data);
				socket.emit("success");
				return;
			}
		}
		socket.emit("user is no found");

	});

	socket.on('disconnect',function(){
		console.log('socket.id '+socket.id+': disconnect');
	})
});

exports.listen = function(prot){    
	return server.listen(prot);    // listening 
};