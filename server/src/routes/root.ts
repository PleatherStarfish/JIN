import express, { Request, Response } from "express";
const router: express.Router = express.Router();

router.route("/")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET request to root."
        });
    });
router.route("/dashboard")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET dashboard."
        });
    });
router.route("/dashboard/:userId")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET dashboard/:userId"
        });
    });


export = router;