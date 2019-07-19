"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = __importStar(require("express"));
const root_1 = __importDefault(require("./root"));
const notes_1 = __importDefault(require("./notes"));
const account_1 = __importDefault(require("./account"));
const router = express.Router();
router.use("/", root_1.default);
router.use("/account", account_1.default);
router.use("/notes", notes_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map