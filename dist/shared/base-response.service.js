"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseResponse {
    constructor() { }
    /**
     * Send response to the user with status code 200 and data + message(Optional)
     * @param res
     * @param obj
     * @param message
     */
    Response(res, obj, message = '') {
        try {
            const responseObj = {
                data: obj,
                status: 200,
                message
            };
            res.status(200)
                .set('Content-Type', 'text/plain')
                .end(JSON.stringify(responseObj));
        }
        catch (error) {
            //TODO - add logger
        }
    }
    /**
     * Send error response with bad status code and message
     * @param res
     * @param message
     * @param statusCode
     */
    ErrorResopnse(res, message = '', statusCode = 404) {
        try {
            const responseObj = {
                data: {},
                status: statusCode,
                message
            };
            res.status(statusCode)
                .set('Content-Type', 'text/plain')
                .end(JSON.stringify(responseObj));
        }
        catch (error) {
            //TODO - add logger
        }
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=base-response.service.js.map