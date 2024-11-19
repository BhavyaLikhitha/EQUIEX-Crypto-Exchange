import mongoose from "mongoose";
// Define the schema for the Coin model
const coinSchema = new mongoose.Schema({
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
});
// Create the Coin model using the schema defined above
const Coin = mongoose.model("Coin", coinSchema);
// Export the Coin model so it can be used in other parts of the application
export default Coin;
