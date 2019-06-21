"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.loginController = new login_controller_1.LoginController();
        this.Routes();
    }
    Routes() {
        this.router.post('/login', this.loginController.login);
    }
}
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=login.api.js.map