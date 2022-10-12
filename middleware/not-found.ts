import {Response} from "express";

export const notFoundMiddleware = (res: Response) => res.status(404).send('Route does not exist');