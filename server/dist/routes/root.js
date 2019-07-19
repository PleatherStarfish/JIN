"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/")
    .get((req, res) => {
    res.status(200).json({
        message: "GET request to root."
    });
});
router.route("/dashboard")
    .get((req, res) => {
    res.status(200).json({
        message: "GET dashboard."
    });
});
router.route("/dashboard/:userId")
    .get((req, res) => {
    res.status(200).json({
        message: "GET dashboard/:userId"
    });
});
module.exports = router;
//# sourceMappingURL=root.js.map