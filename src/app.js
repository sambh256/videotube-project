import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// ⚠️ Remove or move these below file upload routes:
// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// 🔁 Import and use user routes that handle multipart/form-data
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);  // Multer route comes first ✅

// ✅ Safe to use JSON parsing AFTER multipart/form-data routes
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

export { app };
