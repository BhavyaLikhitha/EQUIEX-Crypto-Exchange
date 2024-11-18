import mongoose from 'mongoose';
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

const NFT = mongoose.model('NFT', nftSchema);

export default NFT;