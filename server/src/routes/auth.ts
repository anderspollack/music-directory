import express from "express";
const router = express.Router();

import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

router.post("/login", (req, res) => {
    res.send("login");
});

router.delete("/logout", (req, res) => {
    res.send("logout");
});

router.post("/register", jsonParser, (req, res) => {
    const { username, password } = req.body;
});

router.delete("/delete", (req, res) => {
    res.send("delete");
});

router.put("/update", (req, res) => {
    res.send("update");
});

export default router;
