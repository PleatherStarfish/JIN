import * as express from "express";
import rootRoutes from "./root";
import notesRoutes from "./notes";
import accountRoutes from "./account";
const router: express.Router = express.Router();

router.use("/", rootRoutes);
router.use("/account", accountRoutes);
router.use("/notes", notesRoutes);

export = router;