import mongoose from 'mongoose';
// Define the schema for NFTS
const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  metadata: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model for the nft schema
const NFT = mongoose.model('NFT', nftSchema);

export default NFT;