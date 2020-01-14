import express from "express";
const app = express();

import artists from "./artists";
import auth from "./auth";

app.use("/artists", artists);
app.use("/auth", auth);

export default app;
