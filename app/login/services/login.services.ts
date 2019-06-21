import { HashingService } from "./hashing.service";
import { UsersModel } from "../models";
import { LoginErrors } from "../../shared/consts";
import { baseConnection } from "../../shared/base-connection.db";

export class LoginService extends baseConnection{
    private readonly hashingService: HashingService = new HashingService();
    
    constructor() {
        super();
    }

    public async checkUserLogin(Email: string, Password: string): Promise<UsersModel | string> {
        try {
            const User = await UsersModel.findOne({
                where: {
                    Email 
                }
            });
            if (User) {
                const isPasswordCorrect = await this.hashingService.comparePasswords(Password, User.Password);
                if (isPasswordCorrect) {
                    return User;
                } else {
                    return LoginErrors.WRONG_PASSWORD;
                }
            } else {
                return LoginErrors.NO_SUCH_USER;
            }
        } catch (error) {
            return error;
        }
    }
}