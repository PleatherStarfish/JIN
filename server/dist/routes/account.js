"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
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