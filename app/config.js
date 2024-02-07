const dontenv = require('dotenv');

dontenv.config();

module.exports = {
    serviceName: process.env.SERVICE_NAME,
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}