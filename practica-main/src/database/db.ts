const Sequelize = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();
const DB_DIALECT = process.env.DB_DIALECT ;
const DB_NAME = process.env.DB_NAME ;
const DB_USER = process.env.DB_USER ;
const DB_PASS = process.env.DB_PASS ;
const DB_HOST = process.env.DB_HOST ;
const DB_PORT = Number(process.env.DB_PORT);



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT
    }

);


async function generateDb() {
    await database.sync({ alter: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
