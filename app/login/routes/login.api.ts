import {Router} from 'express';
import { LoginController } from '../controllers/login.controller';

export class LoginRoutes {
    public router = Router();
    private loginController = new LoginController();
    constructor() {
        this.Routes();
    }

    private Routes(): void {
        this.router.post('/login',this.loginController.login);
    }
}