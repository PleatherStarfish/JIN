import express, { Request, Response }  from "express";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import { db } from "./config/keys";

class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    private config(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        mongoose.connect(db.mongoURI, { useNewUrlParser: true })
            .then(() => console.log("MongoDB Connected"))
            .catch(err => console.log(err));
    }
    private routes(): void {
        const router: express.Router = express.Router();
        this.app.use("/", routes);
    }
}
export default new Server().app;