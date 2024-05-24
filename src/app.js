import express from 'express';
import { TaskServer } from './server.js';

const init = async()=>{
    const app = express();
    const server = new TaskServer(app);
    server.start(app);
}

init();
