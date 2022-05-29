import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';

dotenv.config();

  const dbUser = process.env.DB_USERNAME as string
  const dbPassword = process.env.DB_PASSWORD as string
  const database = process.env.DB_DATABASE as string
  const dbHost = process.env.DB_HOST
  const dialect = process.env.DB_CLIENT as Dialect

const sequelizeConnection = new Sequelize(database, dbUser, dbPassword, {
  host: dbHost,
  dialect: dialect
})

export default sequelizeConnection;

