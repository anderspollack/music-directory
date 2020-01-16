import cors from "cors";
import "dotenv/config";
import express from "express";
import verifyToken from "./middleware/verifyToken";

import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

const app = express();

import router from "./routes";

app.use(cors());
app.use("/api", jsonParser, verifyToken, router);

app.get("/", (req, res) => {
    res.send(process.env.FIREBASE_TYPE);
});

app.listen(3001);
