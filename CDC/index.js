const porta = 3333;
const http = require('http');
app = require('./custom-express')();


const servidor = http.Server(app);

const socketio = require('socket.io');

app.listen(porta, () => {
    console.log("Server is running.");
})
