import express = require('express');
let router = express.Router();

const accountRoutes = require('./account');
const notesRoutes = require('./notes');

router.use("/account", accountRoutes);
router.use("/notes", notesRoutes);

module.exports = router;