import {CustomAPIError} from './custom-error';
import {StatusCodes} from 'http-status-codes';

export class BadRequest extends CustomAPIError {
    public static readonly StatusCode = StatusCodes.BAD_REQUEST;

    constructor(message: string) {
        super(message, BadRequest.StatusCode)
    }
}
