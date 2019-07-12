"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const root_1 = __importDefault(require("./root"));
const account_1 = __importDefault(require("./account"));
const router = express_1.default.Router();
router.use("/", root_1.default);
router.use("/account", account_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map