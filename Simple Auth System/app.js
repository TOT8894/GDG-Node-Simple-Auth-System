import express from "express";
import mongodb from "./config/mongodb.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./errorHandler/errorHandler.js";
dotenv.config();
mongodb();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:4000"
}))

app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use(errorHandler);

export default app;