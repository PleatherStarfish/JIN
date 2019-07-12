"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .route("/login")
    .get((req, res, next) => {
    res.send('account/login');
});
router
    .route("/signup")
    .get((req, res, next) => {
    res.send('account/signup');
});
router
    .route("/logout")
    .get((req, res, next) => {
    res.send('account/logout');
});
module.exports = router;
//# sourceMappingURL=account.js.map