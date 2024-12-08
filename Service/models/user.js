import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        required: true, // Username is mandato
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

// Hash password before saving to database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Skip if the password is not modified
    this.password = await bcrypt.hash(this.password, 10); // Hash the password with a salt factor of 10
    next();
});

// Method to compare the entered password with the stored hashed password
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};
// Create the User model using the schema defined above
const User = mongoose.model("User", userSchema);

export default User;
