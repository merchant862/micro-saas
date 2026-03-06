import { Sequelize } from 'sequelize';
import { env } from '../bootstrap/env';

const sequelize = new Sequelize(
    env.dbName,
    env.dbUser,
    env.dbPass,
    {
        host: env.dbHost,
        port: env.dbPort,
        dialect: 'mysql',
        logging: false
    }
);

export {
    sequelize
};