import * as mongoose from "mongoose";
import { AccountSchema } from "../models/accountModel";
import { Request, Response } from "express";

const Account: mongoose.model = mongoose.model("Account", AccountSchema);
