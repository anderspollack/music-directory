"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const verifyToken_1 = __importDefault(require("./middleware/verifyToken"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db"));
db_1.default();
const jsonParser = body_parser_1.default.json();
const app = express_1.default();
app.use(cors_1.default());
app.use("/api", jsonParser, verifyToken_1.default, routes_1.default);
app.get("/", (req, res) => {
    res.send(process.env.FIREBASE_TYPE);
});
app.listen(3001);
//# sourceMappingURL=app.js.map