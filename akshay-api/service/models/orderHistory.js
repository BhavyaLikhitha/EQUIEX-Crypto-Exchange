import mongoose from 'mongoose';

// Define the schema for the order history
const orderHistorySchema = new mongoose.Schema({
    email: { type: String, required: true },
    coinName: { type: String, required: true },
    quantity: { type: Number, required: true },
    coinPrice: {type: Number},
    value: { type: Number, required: true }, // The value at the time of the transaction
    transactionType: {
        type: String,
        required: true,
        enum: ['BUY', 'SELL'], // Ensures only 'BUY' or 'SELL' are valid
    },
    createdAt: { type: Date, default: Date.now }, // Timestamp of when the transaction occurred
});

// Create the model from the schema
const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

export default OrderHistory;