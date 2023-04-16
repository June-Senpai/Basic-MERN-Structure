import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/usersRoute.js";

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

dotenv.config();
const DB = process.env.MONGO_URI;
mongoose.connect(DB);

app.listen(port, () =>
  console.log(`server started on http://localhost:${port} `)
);
