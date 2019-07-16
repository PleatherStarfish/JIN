import express, { Router, Request, Response, NextFunction } from "express";
const router: express.Router = express.Router();

router
    .route("/login")
    .get((req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            message: "GET request to account/login."
        });
    });
router
    .route("/signup")
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send("account/signup");
    });
router
    .route("/logout")
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send("account/logout");
    });

export = router;