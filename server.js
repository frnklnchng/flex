const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const passportSetup =  require('./config/passport');

const users = require('./routes/api/users');
const chats = require('./routes/api/chats');
const messages = require('./routes/api/messages');
let database;
if (process.env.productionMode === 'on') {
  database = process.env.mongoURI;
} else {
  database = require('./config/keys').mongoURI;
}
const port = process.env.PORT || 5000;
passportSetup(passport);

mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(error => console.log(error));
  
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use('/api/users', users);
app.use('/api/messages', messages);

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

io.on('connection', function (socket) {
  socket.broadcast.emit('welcome');
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});