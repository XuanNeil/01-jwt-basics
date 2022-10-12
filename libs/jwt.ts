import jwt from "jsonwebtoken";

interface IPayloadAccessToken {
    id: number,
    name: string;
    address: string;
}

interface IPayloadRefreshToken {
    id: number;
}

interface IPayloadVerifyAccessToken {
    id: number,
    name: string;
    address: string;
}

export const signAccessToken = (payload: IPayloadAccessToken): string => jwt.sign(payload, process.env.ACCESS_TOKEN_KEY || "ACCESS_TOKEN", {expiresIn: process.env.ACCESS_TOKEN_LIFE || 10});

export const signRefreshToken = (payload: IPayloadRefreshToken): string => jwt.sign(payload, process.env.REFRESH_TOKEN_KEY || "REFRESH_TOKEN", {expiresIn: process.env.REFRESH_TOKEN_LIFE || 10});

export const verifyAccessToken = (access_token: string): IPayloadVerifyAccessToken =>{
   const data  =  jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY || "ACCESS_TOKEN") as IPayloadVerifyAccessToken;
   return data;
}