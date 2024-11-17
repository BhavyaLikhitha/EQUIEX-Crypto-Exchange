import Person from "../models/person.js";

// Save a new person
export const save = async (newPerson) => {
    const person = new Person(newPerson);
    return person.save();
};

// Find a person by ID
export const findById = async (personId) => {
    return Person.findById(personId);
};

// Update a person by ID
export const update = async (personId, updatedPerson) => {
    return Person.findByIdAndUpdate(personId, updatedPerson, { new: true });
};

// Delete a person by ID
export const remove = async (personId) => {
    return Person.findByIdAndDelete(personId);
};
