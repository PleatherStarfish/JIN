"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// @route   GET account/test
// @desc    Return current user
// @access  Private
router.route("/test")
    .get((req, res) => {
    res.json({
        message: "GET request to /account/test"
    });
});
// @route   POST account/register
// @desc    Register user
// @access  Public
router.route("/register")
    .post((req, res) => {
    res.json({
        message: "POST request to /account/register"
    });
});
// @route   POST account/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.route("/login")
    .post((req, res) => {
    res.json({
        message: "POST request to /account/login"
    });
});
// @route   GET account/current
// @desc    Return current user
// @access  Private
router.route("/current")
    .get((req, res) => {
    res.json({
        message: "GET request to /account/current"
    });
});
module.exports = router;
//# sourceMappingURL=account.js.map