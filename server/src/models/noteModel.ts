import * as mongoose from "mongoose";
const Schema: mongoose.Schema = mongoose.Schema;

export const NoteSchema: mongoose.Schema = new Schema({
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