import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

const app = express();

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * Enable CORS
 */
app.use(cors());

/**
 * Compress responses
 */
app.use(compression());

/**
 * HTTP Request Logger
 */
app.use(morgan("dev"));

/**
 * Parse JSON
 */
app.use(express.json());

/**
 * Parse URL Encoded Data
 */
app.use(express.urlencoded({ extended: true }));

export default app;