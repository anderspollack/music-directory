import express from "express";
const app = express();

import router from "./routes";

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Sucks");
});

app.listen(3001);
