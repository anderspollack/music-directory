import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("login");
});

router.delete("/logout", (req, res) => {
    res.send("logout");
});

router.post("/register", (req, res) => {
    const { uid } = req.body;
    res.send(uid);
});

router.delete("/delete", (req, res) => {
    res.send("delete");
});

router.put("/update", (req, res) => {
    res.send("update");
});

export default router;
