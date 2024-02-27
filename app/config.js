const dontenv = require('dotenv');
const path = require('path');

dontenv.config();

module.exports = {
    rootPath: path.resolve(__dirname, '..'),
    serviceName: process.env.SERVICE_NAME,
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}