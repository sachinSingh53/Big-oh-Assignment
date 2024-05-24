import dotenv from 'dotenv';
dotenv.config();

class Config{
    constructor(){
        this.CLIENT_URL = process.env.CLIENT_URL;
    }
}

const config = new Config();

export{config};