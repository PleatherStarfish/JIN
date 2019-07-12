import express, { Request, Response }  from "express";
import * as bodyParser from "body-parser";
const routes = require('./routes');

class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private routes(): void {
        const router = express.Router();
        this.app.use('/', routes);
    }
}
export default new Server().app;