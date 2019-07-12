import { Router } from 'express';
import { accountRoutes } from "./account";

export const router = Router();
router.use("/account", accountRoutes);

module.exports = router;
