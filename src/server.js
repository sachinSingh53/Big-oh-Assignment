
import 'express-async-errors';
import { config } from './config.js'
import { StatusCodes } from 'http-status-codes';
import http from 'http';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import{winstonLogger} from '../utils/logger.js'
import{CustomError} from '../utils/errors.js'
import { appRoutes } from './routes.js';

const log = winstonLogger('Server','debug');
class TaskServer {
    #app;
    constructor(app) {
        this.#app = app;
    }

    start(app) {
        this.#securityMiddleware(app);
        this.#standardMiddleware(app);
        this.#routesMiddleware(app);
        this.#errorHandler(app);
        this.#startServer(app);
    }

    #securityMiddleware(app) {
        app.set('trust-proxy', 1);
        app.use(
            cors({
                origin: config.CLIENT_URL,
                credentials: true,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
            })
        )
    }
    #standardMiddleware(app) {
        app.use(compression());
        app.use(bodyParser.json({ limit: '200mb' }));
        app.use(bodyParser.urlencoded({ extended: true, limit: '200mb' }));
    }
    #routesMiddleware(app) {
        appRoutes(app);
    }
    #errorHandler(app) {
        app.use('*', (req, res, next) => {
            log.error('endpoint does not exist')
            res.status(StatusCodes.NOT_FOUND).json({
                message: 'the endpoint you have called does not exists'
            });
            // next();
        });

        app.use((err, req, res, next) => {
            log.log('error', `UsersService ${err.comingFrom}`, err);
            if (err instanceof CustomError) {
                res.status(err.statusCode).json(err.serializeErrors());
            }
            next();
        });
    }

    #startHttpServer(httpServer) {
        try {
            const SERVER_PORT = 4000;
            log.info(`Server has started with processId: ${process.pid}`);
            httpServer.listen(SERVER_PORT, () => {
                log.info(`Server is running on port ${SERVER_PORT}`);
            })
            
        } catch (error) {
            log.log('error','Server startHttpServer() method error',error);
        }
    }

    #startServer(app) {
        try {
            const httpServer = http.Server(app);
            this.#startHttpServer(httpServer);
        } catch (error) {
            log.log('error','Server startServer() method error',error);
        }
    }


}
export{TaskServer}