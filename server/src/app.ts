import cors from "cors";
import express from "express";
const app = express();

import router from "./routes";

app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("");
});

app.listen(3001);
