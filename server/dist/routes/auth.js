"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
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
exports.default = router;
//# sourceMappingURL=auth.js.map