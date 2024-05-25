import { Sequelize } from 'sequelize';
import {config} from './config.js';
import { winstonLogger } from '../utils/logger.js';

const log = winstonLogger('Database', 'debug');

const sequelize = new Sequelize(config.MYSQL_DB, {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        multipleStatements: true
    }
});

async function databaseConnection() {
    try {
        await sequelize.authenticate();
        log.info(' Mysql database connection has been established successfully.');

    } catch (error) {
        log.error('Unable to connect to the database.');
        log.log('error', 'databaseConnection() method error:', error);
    }
}

export { sequelize, databaseConnection };
