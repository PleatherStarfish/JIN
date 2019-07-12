"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    try {
        res.status(200).json({
            message: 'Root route is working.'
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
});
router
    .route("/dashboard")
    .get((req, res, next) => {
    res.send('dashboard');
});
module.exports = router;
//# sourceMappingURL=root.js.map