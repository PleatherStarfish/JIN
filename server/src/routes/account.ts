import express, { Request, Response } from "express";
const router: express.Router = express.Router();

// @route   GET account/test
// @desc    Return current user
// @access  Private
router.route("/test")
    .get((req: Request, res: Response) => {
        res.json({
            message: "GET request to /account/test"
        });
    });

// @route   POST account/register
// @desc    Register user
// @access  Public
router.route("/register")
    .post((req: Request, res: Response) => {
        res.json({
            message: "POST request to /account/register"
        });
    });

// @route   POST account/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.route("/login")
    .post((req: Request, res: Response) => {
        res.json({
            message: "POST request to /account/login"
        });
    });

// @route   GET account/current
// @desc    Return current user
// @access  Private
router.route("/current")
    .get((req: Request, res: Response) => {
        res.json({
            message: "GET request to /account/current"
        });
    });

export = router;