import winston from 'winston';
const winstonLogger = (name, level) => {
    const options = {
        console: {
            level,
            handleExceptions: true,
            json: false,
            colorize: true
        },
    };

    const logger = winston.createLogger({
        exitOnError: false,
        defaultMeta: { service: name },
        transports: [
            new winston.transports.Console(options.console),
        ]
    });

    return logger;
};

export { winstonLogger }; 
