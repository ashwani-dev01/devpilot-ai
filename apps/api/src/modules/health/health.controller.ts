import { Request, Response } from "express";
import { env } from "../../config/env";

export const getHealth = (_req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "DevPilot API is running",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
};
