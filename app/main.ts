import express = require('express');

export class main {
    private readonly app: express.Application = express();
    constructor(private routes: any[]) {
        this.registerMiddlewares();
        this.registerRoutes()
        this.startServer()
    }

    private registerMiddlewares(): void {
        // parse the requests
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }

    // register all routes
    private registerRoutes(): void {
        this.routes.forEach(route => {
            this.app.use(route.router);
        });
    }

    private startServer(): void {
        this.app.listen(9999, ()=>{console.log(`start on port 9999`)});
    }

}
