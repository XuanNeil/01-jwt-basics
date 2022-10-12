import {CustomAPIError} from './custom-error';
import { StatusCodes } from 'http-status-codes';

export class UnauthenticatedError extends CustomAPIError {
    public static readonly StatusCode = StatusCodes.UNAUTHORIZED;

    constructor(message: string) {
        super(message, UnauthenticatedError.StatusCode)
    }
}
