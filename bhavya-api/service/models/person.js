import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
    privacy: { type: Boolean, required: true },
    emailNotifications: { type: Boolean, required: true },
    securitySettings: { type: String, required: true }
});

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    settings: { type: settingsSchema, required: true }
});

const Person = mongoose.model("Person", personSchema);

export default Person;
