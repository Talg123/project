import { Model, Table, Column } from "sequelize-typescript";

@Table({modelName:'users'})
export class UsersModel extends Model<UsersModel> {

    @Column
    Email: string;

    @Column
    Password: string;

    @Column
    createdAt: Date

    @Column
    updatedAt: Date
    
}