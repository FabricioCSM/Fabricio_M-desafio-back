import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';

dotenv.config();

const environment = {
  development: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.HOSTNAME,
    dialect: process.env.DB_CLIENT as Dialect,
  },
  test: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.HOSTNAME,
    dialect: process.env.DB_CLIENT as Dialect,
  },
  production: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CLIENT as Dialect,
  }
}

const sequelizeConnection = new Sequelize(environment.development.database, environment.development.username, environment.development.password, {
  host: environment.development.host,
  dialect: environment.development.dialect
})

export default sequelizeConnection;

