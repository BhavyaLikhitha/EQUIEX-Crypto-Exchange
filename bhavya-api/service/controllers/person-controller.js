import * as personService from "../services/person-service.js";
import { setSuccess, setError } from "../controllers/response-handler.js";

// Create a new person
export const post = async (req, res) => {
    try {
        const newPerson = req.body;
        const person = await personService.save(newPerson);
        setSuccess(person, res);
    } catch (error) {
        setError(error, res);
    }
};

// Get a person by ID
export const get = async (req, res) => {
    try {
        const { personId } = req.params;
        const person = await personService.findById(personId);
        if (!person) {
            return setError({ message: "Person not found" }, res);
        }
        setSuccess(person, res);
    } catch (error) {
        setError(error, res);
    }
};

// Update a person by ID
export const put = async (req, res) => {
    try {
        const { personId } = req.params;
        const updatedPerson = req.body;
        const person = await personService.update(personId, updatedPerson);
        if (!person) {
            return setError({ message: "Person not found" }, res);
        }
        setSuccess(person, res);
    } catch (error) {
        setError(error, res);
    }
};

// Delete a person by ID
export const deletePerson = async (req, res) => {
    try {
        const { personId } = req.params;
        const person = await personService.remove(personId);
        if (!person) {
            return setError({ message: "Person not found" }, res);
        }
        res.status(204).send();
    } catch (error) {
        setError(error, res);
    }
};
