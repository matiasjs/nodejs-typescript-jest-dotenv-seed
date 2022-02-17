"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users/users");
const app = (0, express_1.default)();
const port = process.env.NODE_SERVER_PORT;
app.get('/users', (req, res) => {
    res.json(users_1.users);
});
app.listen(port, () => {
    return console.log(`server is listening ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map