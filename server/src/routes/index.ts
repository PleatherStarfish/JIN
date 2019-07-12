import express, { Router } from "express";
import rootRoutes from "./root";
import accountRoutes from "./account";

const router = express.Router();
router.use("/", rootRoutes);
router.use("/account", accountRoutes);

export = router;