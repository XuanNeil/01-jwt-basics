import {Request, Response} from "express";
import {BadRequest} from "../errors/bad-request";
import {signAccessToken, signRefreshToken} from "../libs/jwt";

interface IControllerLoginBody {
    email: string;
    password: string;
}
interface IControllerLoginResponse {
    access_token: string;
    refresh_token: string;
}
type TControllerLoginRequest = Request<{}, {}, IControllerLoginBody>;
type TControllerLoginResponse = Response<IControllerLoginResponse>;

interface IControllerDashboardParams {
    user: {
        name: string;
    }
}
interface IControllerDashboardResponse {
    message: string;
    secret: string;
}
type TControllerDashboardRequest = Request<IControllerDashboardParams>;
type TControllerDashboardResponse = Response<IControllerDashboardResponse>;

export const login = async (req: TControllerLoginRequest, res: TControllerLoginResponse) => {
    const {email, password} = req.body;

    if (!email || !password){
        throw new BadRequest("Please provide email and password");
    }

    const id = new Date().getDate();

    const access_token = signAccessToken({id, name: "Neil", address: "Ha Noi"});
    const refresh_token = signRefreshToken({id});

    return res.status(200).json({
        access_token,
        refresh_token
    });
}

export const dashboard = async (req: any, res: TControllerDashboardResponse) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        message: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}