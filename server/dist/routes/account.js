"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/")
    .get((req, res) => {
    res.status(200).json({
        message: "GET request to /account"
    });
});
router.route("/:userId/login")
    .get((req, res) => {
    res.status(200).json({
        message: "GET request to /account/:userId/login"
    });
});
router.route("/:userId/signup")
    .post((req, res) => {
    res.status(200).json({
        message: "post request to /account/:userId/signup"
    });
});
router.route("/:userId/logout")
    .get((req, res) => {
    res.status(200).json({
        message: "GET request to /account/:userId/logout"
    });
});
module.exports = router;
//# sourceMappingURL=account.js.map