import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';

dotenv.config();

const environment = {
  development: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.HOSTNAME,
    dialect: 'qesh',
  },
  test: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.HOSTNAME,
    dialect: 'qesh',
  },
  production: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.DB_HOST,
    dialect: 'qesh',
  }
}

const sequelizeConnection = new Sequelize(environment.development.database, environment.development.username, environment.development.password, {
  host: environment.development.host,
  dialect: 'qesh'
})

export default sequelizeConnection;

