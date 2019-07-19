"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
exports.NoteSchema = new Schema({
    noteId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        required: true
    },
    note_created_date: {
        type: Date,
        require: true,
        default: Date.now
    },
    body: {
        type: Date,
        require: true
    },
    admin: Boolean
});
//# sourceMappingURL=noteModel.js.map