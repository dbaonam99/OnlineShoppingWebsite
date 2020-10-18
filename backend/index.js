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
  client.on('join', function (data) { // Client join
    Chat.find({ sessionId: data.sessionId }).then(function(chat) {
      client.emit('sendFirstInfo', chat);
    });
  })

  client.on('admin-join', async function(data) { // Client join
    client.join('admin') // Client join room 'admin'
    const allchat = await Chat.find(); // Load all chat to admin box
    client.emit('send-all-chat', allchat)
  })
  
  client.on('firstMessage', async function(data) { // Client send first
    // client.join(data.sessionId) // Client join these room
    // io.in(data.sessionId).emit('thread', data);
    await Chat.create(data)
    const allchat = await Chat.find(); // Load all chat to admin box
    io.in('admin').emit('client-msg', {
      userChatInfo: [data],
      allchat: allchat
    });
  })

  client.on('messageSend', async function(data){
    // client.emit('messageSend-thread', data);

    const userChatInfo = await Chat.find({ sessionId : data.sessionId })
    Chat.findOne({ sessionId: data.sessionId })
      .updateOne({$push: { chatContent: {text: data.text, time: data.time} }})
      .exec()
    const allchat = await Chat.find(); // Load all chat to admin box
    io.in('admin').emit('client-msg', {
      userChatInfo: userChatInfo, 
      allchat: allchat
    });
  })

  client.on('messageSend-admin',function(data) {
    io.in(data.roomId).emit('admin-msg', data); // Admin send message
  })
})

server.listen(4000, () => console.log(`Listening on port ${4000}`));
