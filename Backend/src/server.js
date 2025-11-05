import app from "./app.js";
import { config } from "./config/index.js";

const startServer = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`InspectCare backend running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();

