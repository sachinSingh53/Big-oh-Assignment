import express from 'express';
import { TaskServer } from './server.js';
import { databaseConnection } from './database.js';
const init = async()=>{
    databaseConnection();
    const app = express();
    const server = new TaskServer(app);
    server.start(app);
}

init();
