import app from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";

app.listen(env.PORT, () => {
  logger.info(
    `🚀 DevPilot API is running on http://localhost:${env.PORT}`
  );
});