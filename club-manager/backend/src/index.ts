import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import membersRouter from "./routes/members.js";
import { authMiddleware } from "./middlewares/auth.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8080;
const configuredOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URLS,
  process.env.CORS_ORIGINS,
]
  .flatMap((origin) => origin?.split(",") ?? [])
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://club-manager-frontend.onrender.com",
  "https://club-manager-jt60.onrender.com",
  ...configuredOrigins,
]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS origin is not allowed."));
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.status(200).json({
    service: "club-manager-backend",
    status: "ok",
    version: "deploy5",
  });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    service: "club-manager-backend",
    status: "ok",
    version: "deploy5",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/members", authMiddleware, membersRouter);

// Keep unexpected errors from terminating the server process.
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error." });
  },
);

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
