import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import routes from "./routes";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/not-found.middleware";

const app = express();

/*
  Security Middleware
 */
app.use(helmet());

/*
  Enable CORS
 */
app.use(cors());

/*
  Compress responses
 */
app.use(compression());

/*
  HTTP Request Logger
 */
app.use(morgan("dev"));

/*
 Parse JSON
 */
app.use(express.json());

/*
  Parse URL Encoded Data
 */
app.use(express.urlencoded({ extended: true }));
/*
routes
*/
app.use(routes);
//
app.use(notFoundMiddleware);
/*
errorMiddleware
*/
app.use(errorMiddleware);
export default app;