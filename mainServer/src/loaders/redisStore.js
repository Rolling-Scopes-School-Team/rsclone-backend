import redis from 'redis';

import session from 'express-session';

import connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient(6379, 'redis');

const SessionStore = new RedisStore({
  host: 'redis',
  port: 6379,
  client: redisClient,
});

export default SessionStore;
