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
const login_services_1 = require("../services/login.services");
const base_response_service_1 = require("../../shared/base-response.service");
const consts_1 = require("../../shared/consts");
class LoginController extends base_response_service_1.BaseResponse {
    constructor() {
        super();
        this.loginService = new login_services_1.LoginService();
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Password = req.body.Password;
                const Email = req.body.Email;
                if (Password && Email) {
                    const result = yield this.loginService.checkUserLogin(Email, Password);
                    this.Response(res, result);
                }
                else {
                    this.ErrorResopnse(res, consts_1.LoginErrors.MISSING_PASSWORD_OR_EMAIL, 500);
                }
            }
            catch (err) {
                console.log(err);
                this.ErrorResopnse(res, err, 500);
            }
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map