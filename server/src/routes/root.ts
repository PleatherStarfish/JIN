import express, { Router, Request, Response, NextFunction } from "express";
const router = express.Router();

router
    .route("/")
    .get((req: Request, res: Response) => {
        try {
            res.status(200).json({
                message: 'Root route is working.'
            })
        }
        catch (error) {
            res.status(500).json({
                error: error.toString()
            })
        }
    });
router
    .route("/dashboard")
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('dashboard');
    });

export = router;