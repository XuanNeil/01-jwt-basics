import {UnauthenticatedError} from "../errors/unauthenticated";
import {verifyAccessToken} from "../libs/jwt";

export const authenticationMiddleware = async (req: any, next: any) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = verifyAccessToken(token);
        const { id, name, address } = decoded
        req.user = { id, name, address }
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}
