const redis = require('redis');

const config = {
  redis: {
    host: '127.0.0.1',
    port: '6379',
    password: '',
    db: '4',
    socket: '',
  },
};

export const RedisConnector = async () => {
  try {
    const client = redis.createClient({
      host: config.redis.host,
      port: config.redis.port,
    });
    client.on('error', (err: any) => console.log('Redis Client Error', err));
    client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
};
