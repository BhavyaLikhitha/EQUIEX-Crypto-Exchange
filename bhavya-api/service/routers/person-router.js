import express from "express";
import * as personController from "../controllers/person-controller.js";

const router = express.Router();

// Route to create a new person
router.route("/")
    .post(personController.post);

// Route to get, update, or delete a person by ID
router.route("/:personId")
    .get(personController.get)
    .put(personController.put)
    .delete(personController.deletePerson);

export default router;
