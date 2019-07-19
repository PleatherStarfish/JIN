"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/")
    // get notes
    .get((req, res) => {
    res.status(200).json({
        message: "GET all notes at /notes"
    });
});
router.route("/:userId")
    // get notes
    .get((req, res) => {
    res.status(200).json({
        message: "GET all notes at /notes/:userID"
    });
});
router.route("/:userID/:noteId")
    // edit a note
    .put((req, res) => {
    res.status(200).json({
        message: "PUT notes at /notes/:userId/:noteId"
    });
})
    // create a new note
    .post((req, res) => {
    res.status(200).json({
        message: "POST new note at /notes/:userId/:noteId"
    });
})
    // delete a note
    .delete((req, res) => {
    res.status(200).json({
        message: "DELETE note at /notes/:userId/:noteId"
    });
});
module.exports = router;
//# sourceMappingURL=notes.js.map