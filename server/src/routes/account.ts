import express, { Request, Response } from "express";
const router: express.Router = express.Router();

router.route("/")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET request to /account"
        });
    });
router.route("/:userId/login")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET request to /account/:userId/login"
        });
    });
router.route("/:userId/signup")
    .post((req: Request, res: Response) => {
        res.status(200).json({
            message: "post request to /account/:userId/signup"
        });
    });
router.route("/:userId/logout")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET request to /account/:userId/logout"
        });
    });

export = router;