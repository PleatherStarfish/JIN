import * as mongoose from "mongoose";
const Schema: mongoose.Schema = mongoose.Schema;

export const AccountSchema: mongoose.Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    admin: Boolean,
    account_created_date: {
        type: Date,
        require: true,
        default: Date.now
    }
});