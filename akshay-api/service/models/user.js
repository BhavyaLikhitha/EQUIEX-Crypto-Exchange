import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        required: true,
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
    },
    phoneNumber: {
        required: true,
        type: String
    },
    usdtBalance: {
        type: Number,
        default: 100000
    },
    coins: [{
         // Array of coins the user owns, each coin has the following properties
        name: {
            type: String,
            required: true,
        },
        symbol: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    }],
});

// Hash password before saving to database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare password during login
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};
// Create the User model using the schema defined above
const User = mongoose.model("User", userSchema);
// Export the User model to use it in other parts of the application
export default User;