import express from "express";
const router = express.Router();

router.get("/userX", (req, res) => {
    res.send("user invalid");
});

export default router;
