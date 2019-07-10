import express = require('express');
let router = express.Router();

router
    .route("/login")
    .get((req, res, next) => {
        res.send('account/login')
    });
router
    .route("/signup")
    .get((req, res, next) => {
        res.send('account/signup')
    });
router
    .route("/logout")
    .get((req, res, next) => {
        res.send('account/logout')
    });

module.exports = router;