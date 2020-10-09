const express = require('express')
const http = require("http");
const app = express();
const socketIo = require("socket.io");
const server = http.createServer(app);
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


var productRoutes = require('./routes/product');
var newsRoutes = require('./routes/news');
var userRoutes = require('./routes/user');

mongoose.connect('mongodb://localhost:27017/Shop', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var cors = require('cors');
app.use(bodyParser.json());

const io = socketIo(server);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/products", productRoutes);
app.use("/news", newsRoutes);
app.use("/users", userRoutes);
app.use(cors());
app.options('*', cors());

io.on('connection', function (client) {
  client.on('join', function (data) {
      console.log(data);
  })
  client.on('mess',function(data){
    console.log(data);
    client.emit('thread',data);
    client.broadcast.emit('thread',data);
  })
})

server.listen(4000, () => console.log(`Listening on port ${4000}`));
