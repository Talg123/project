import { Response, Request, NextFunction } from "express";
import { LoginService } from "../services/login.services";
import { BaseResponse } from "../../shared/base-response.service";
import { LoginErrors } from "../../shared/consts";

export class LoginController extends BaseResponse{

    private readonly loginService:LoginService = new LoginService();

    constructor(){
        super();
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const Password = req.body.Password;
            const Email = req.body.Email;
            if (Password && Email) {
                const result = await this.loginService.checkUserLogin(Email, Password);
                this.Response(res, result);
            } else {
                this.ErrorResopnse(res, LoginErrors.MISSING_PASSWORD_OR_EMAIL, 500);
            }
        }
        catch(err) {
            console.log(err);
            this.ErrorResopnse(res, err, 500);
        }
    }
}