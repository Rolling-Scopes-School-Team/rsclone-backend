import express from 'express';
import http from 'http';
import config from './config.js';
import { setUpConnection } from './src/init/dataBaseUtils.js';
import InitLoaders from './src/loaders/index.js';
import Chat from './src/chat/chat.js';

const app = express();

const server = http.createServer(app); 
 
new InitLoaders(app).init();

const connect = async () => {
  await setUpConnection();

  await server.listen(config.serverPort, () => {
    console.log(`Server run on port ${config.serverPort}`);
  });

  await new Chat(server).init();
};

connect();

export default server;
