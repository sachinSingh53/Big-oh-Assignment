import dotenv from 'dotenv';
dotenv.config();

class Config{
    constructor(){
        this.CLIENT_URL = process.env.CLIENT_URL;
        this.MYSQL_DB = process.env.MYSQL_DB;
    }
}

const config = new Config();

export{config};