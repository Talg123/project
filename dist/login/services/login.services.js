"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashing_service_1 = require("./hashing.service");
const models_1 = require("../models");
const consts_1 = require("../../shared/consts");
const base_connection_db_1 = require("../../shared/base-connection.db");
class LoginService extends base_connection_db_1.baseConnection {
    constructor() {
        super();
        this.hashingService = new hashing_service_1.HashingService();
    }
    checkUserLogin(Email, Password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const User = yield models_1.UsersModel.findOne({
                    where: {
                        Email
                    }
                });
                if (User) {
                    const isPasswordCorrect = yield this.hashingService.comparePasswords(Password, User.Password);
                    if (isPasswordCorrect) {
                        return User;
                    }
                    else {
                        return consts_1.LoginErrors.WRONG_PASSWORD;
                    }
                }
                else {
                    return consts_1.LoginErrors.NO_SUCH_USER;
                }
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=login.services.js.map