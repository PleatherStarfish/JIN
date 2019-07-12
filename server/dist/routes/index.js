"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const accountRoutes = require('./account');
const notesRoutes = require('./notes');
router.use("/account", accountRoutes);
router.use("/notes", notesRoutes);
module.exports = router;
//# sourceMappingURL=index.js.map