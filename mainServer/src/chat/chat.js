import passportSocketIo from 'passport.socketio';
import socketIo from 'socket.io';
import sessionStore from '../loaders/redisStore.js';
import config from '../../config.js';
import cookieParser from 'cookie-parser';

class Chat {
  constructor(server) {
    this.server = server;
  }

  init = () => {
    const io = socketIo(this.server);
    io.use(
      passportSocketIo.authorize({
        cookieParser: cookieParser,
        key: 'express.sid',
        secret: config.secret,
        store: sessionStore,
      }),
    );

    io.on('connection', (client) => {
      console.log('Connect');
      client.on('new message', (data) => {
        io.emit('new message', {
          author: `${client.request.user.firstName} ${client.request.user.lastName}`,
          message: data,
        });
      });
    });
  };
}

export default Chat;
