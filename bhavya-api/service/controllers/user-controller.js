import User from "../models/user.js";

// User Registration
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Save the raw password (not secure but simpler for understanding)
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Compare raw passwords (again, not secure for real-world use)
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Return a simple confirmation instead of a token
        res.status(200).json({ id: user._id, name: user.name, email: user.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
