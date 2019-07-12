import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router
    .route('/login')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('account/login');
    });
router
    .route('/signup')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('account/signup');
    });
router
    .route('/logout')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('account/logout');
    });

export class accountRoutes {
    constructor() {

    }
}