import express, { Router, Request, Response, NextFunction } from "express";
const router: express.Router = express.Router();

router.route("/")
    // get notes
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET all notes at /notes"
        });
    });

router.route("/:userId")
    // get notes
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET all notes at /notes/:userID"
        });
    });

router.route("/:userID/:noteId")
    // edit a note
    .put((req: Request, res: Response) => {
        res.status(200).json({
            message: "PUT notes at /notes/:userId/:noteId"
        });
    })
    // create a new note
    .post((req: Request, res: Response) => {
        res.status(200).json({
            message: "POST new note at /notes/:userId/:noteId"
        });
    })
    // delete a note
    .delete((req: Request, res: Response) => {
        res.status(200).json({
            message: "DELETE note at /notes/:userId/:noteId"
        });
    });

export = router;