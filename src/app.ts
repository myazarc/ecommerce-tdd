import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());

export default app;
