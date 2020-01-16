import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import verifyToken from "./middleware/verifyToken";
import router from "./routes";

import connectDB from "./db";

connectDB();

const jsonParser = bodyParser.json();

const app = express();

app.use(cors());
app.use("/api", jsonParser, verifyToken, router);

app.get("/", (req, res) => {
    res.send(process.env.FIREBASE_TYPE);
});

app.listen(3001);
