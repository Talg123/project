import { UsersModel } from './Users.model'
import { Model } from 'sequelize-typescript';

export { UsersModel } from './Users.model'

export const DBMODELS: (typeof Model)[] = [
    UsersModel
] 