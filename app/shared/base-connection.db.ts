import {Sequelize } from 'sequelize-typescript';
import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';
import { DBMODELS } from '../login/models';
import { BaseResponse } from './base-response.service';

export class baseConnection extends BaseResponse{
    private connectionOptions: SequelizeConfig;
    public db: Sequelize;
    private readonly modeling = __dirname + '../../**/*.model.ts';

    constructor() {
        super();
        try {
            this.connectionOptions = {
                host:'127.0.0.1',
                username: 'projectuser',
                database: 'project',
                password: '071089',
                port: 3306,
                dialect: 'mysql',
            };
            this.db = new Sequelize(this.connectionOptions);
            this.db.addModels(DBMODELS);

        } catch (error) {
            console.log(error)
        }
    }
}