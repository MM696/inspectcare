import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { config } from "./config/index.js";
import { apiRouter } from "./routes/index.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
const allowedOrigins = config.corsOrigins.map((origin) => origin.replace(/\/$/, ""));

const normalizeOrigin = (origin) => (origin ? origin.replace(/\/$/, "") : origin);

app.use(
  cors({
    origin: (origin, callback) => {
      const normalized = normalizeOrigin(origin);
      if (!origin || allowedOrigins.includes(normalized)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (config.env !== "production") {
  app.use(morgan("dev"));
}

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "inspectcare-backend" });
});

app.use("/api", apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;

