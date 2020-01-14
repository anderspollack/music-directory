"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const artists_1 = __importDefault(require("./artists"));
const auth_1 = __importDefault(require("./auth"));
app.use("/artists", artists_1.default);
app.use("/auth", auth_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map