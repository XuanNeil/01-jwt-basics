import {Router} from "express";

const router: Router = Router()

import { login, dashboard } from '../controllers/main'

import {authenticationMiddleware} from '../middleware/auth';

router.route('/dashboard').get(authenticationMiddleware, dashboard)
router.route('/login').post(login)

export const mainRouter: Router = router;