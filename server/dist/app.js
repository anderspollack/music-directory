"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const routes_1 = __importDefault(require("./routes"));
app.use(cors_1.default());
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("");
});
app.listen(3001);
//# sourceMappingURL=app.js.map