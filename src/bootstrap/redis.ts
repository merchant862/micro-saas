import { createClient } from 'redis';
import { env } from './env';

const redis = createClient(
    {
        socket:
        {
            host: env.redisHost,
            port: env.redisPort
        }
    }
);

export {
    redis
};