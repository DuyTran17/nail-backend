import Sequelize from 'sequelize'
require('dotenv').config({path: './src/.env'});

const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: 'postgres'
});

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully. Port:',process.env.DB_PORT);
    } catch (error) {
        console.error('Unable to connect to the database. Port:', process.env.DB_PORT);
    }
}
export default checkConnection