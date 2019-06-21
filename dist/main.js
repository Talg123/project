"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class main {
    constructor(routes) {
        this.routes = routes;
        this.app = express();
        this.registerMiddlewares();
        this.registerRoutes();
        this.startServer();
    }
    registerMiddlewares() {
        // parse the requests
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    // register all routes
    registerRoutes() {
        this.routes.forEach(route => {
            this.app.use(route.router);
        });
    }
    startServer() {
        this.app.listen(9999, () => { console.log(`start on port 9999`); });
    }
}
exports.main = main;
//# sourceMappingURL=main.js.map