import { Response } from "express";
import { ResponseObj } from "./interfaces";


export class BaseResponse {
    
    constructor() {}

    /**
     * Send response to the user with status code 200 and data + message(Optional)
     * @param res 
     * @param obj 
     * @param message 
     */
    public Response(res: Response, obj: any, message: string = ''): void {
        try {
            const responseObj: ResponseObj = {
                data: obj,
                status: 200,
                message
            }
            res.status(200)
            .set('Content-Type', 'text/plain')
            .end(JSON.stringify(responseObj));
        } catch (error) {
            //TODO - add logger

        }
    }

    /**
     * Send error response with bad status code and message
     * @param res 
     * @param message 
     * @param statusCode 
     */
    public ErrorResopnse(res: Response, message: string = '', statusCode:number = 404): void {
        try {
            const responseObj: ResponseObj = {
                data: {},
                status: statusCode,
                message
            };
            res.status(statusCode)
            .set('Content-Type', 'text/plain')
            .end(JSON.stringify(responseObj));
        } catch (error) {
            //TODO - add logger
        }
    }
}