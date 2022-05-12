import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";

import "reflect-metadata";

dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

import userRoutes from "./userService/route";

app.use("/user", userRoutes);

export default app;
