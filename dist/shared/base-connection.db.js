"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../login/models");
const base_response_service_1 = require("./base-response.service");
class baseConnection extends base_response_service_1.BaseResponse {
    constructor() {
        super();
        this.modeling = __dirname + '../../**/*.model.ts';
        try {
            this.connectionOptions = {
                host: '127.0.0.1',
                username: 'projectuser',
                database: 'project',
                password: '071089',
                port: 3306,
                dialect: 'mysql',
            };
            this.db = new sequelize_typescript_1.Sequelize(this.connectionOptions);
            this.db.addModels(models_1.DBMODELS);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.baseConnection = baseConnection;
//# sourceMappingURL=base-connection.db.js.map