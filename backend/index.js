const express = require('express')
const http = require("http");
const app = express();
const socketIo = require("socket.io");
const server = http.createServer(app);
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var Chat = require("./models/chat.model");

var productRoutes = require('./routes/product');
var newsRoutes = require('./routes/news');
var userRoutes = require('./routes/user');
var chatRoutes = require('./routes/chat');

mongoose.connect('mongodb://localhost:27017/Shop', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var cors = require('cors');
const { create } = require('./models/chat.model');
app.use(bodyParser.json());
app.use(cookieParser('secret'));

const io = socketIo(server);

app.use(function(req, res, next) {
  res.header('application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use("/products", productRoutes);
app.use("/news", newsRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);
app.use(cors());
app.options('*', cors());

io.on('connection', async function (client) {
  client.on('join', function (data) {
    console.log("reloading...")
    Chat.find({ sessionId: data.sessionId }).then(function(chat) {
      client.emit('sendFirstInfo', chat);
    }); 
  })

  
  client.on('firstMessage',function(data){
    client.emit('thread', data);
    client.broadcast.emit('thread',data);
  })
})

server.listen(4000, () => console.log(`Listening on port ${4000}`));
