import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
import instanceMongodb from "./db/initMongoose.js";
import { checkOverload } from "./helpers/checkConnect.js";
checkOverload();

// init routes

// handling error

export default app;
