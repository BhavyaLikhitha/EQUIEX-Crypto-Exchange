import NFT from "../models/nft.js"

// Retrieve all NFTs
export const getAllNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find();
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ errorCode: 'INTERNAL_ERROR', message: error.message });
  }
};

// Mint a new NFT
export const mintNFT = async (req, res) => {
  try {
    const { name, owner, value, metadata } = req.body;
    console.log(req.body); // Add this to confirm the received data
    const newNFT = new NFT({ name, owner, value, metadata });
    const savedNFT = await newNFT.save();
    res.status(201).json(savedNFT);
  } catch (error) {
    console.error("Error creating NFT:", error); // Log error for debugging
    res.status(400).json({ errorCode: 'INVALID_INPUT', message: error.message });
  }
};

// View a specific NFT
export const getNFTById = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id);
    if (!nft) {
      return res.status(404).json({ errorCode: 'NFT_NOT_FOUND', message: 'The NFT with the provided ID does not exist.' });
    }
    res.status(200).json(nft);
  } catch (error) {
    res.status(500).json({ errorCode: 'INTERNAL_ERROR', message: error.message });
  }
};

// Update an NFT
export const updateNFT = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!nft) {
      return res.status(404).json({ errorCode: 'NFT_NOT_FOUND', message: 'The NFT with the provided ID does not exist.' });
    }
    res.status(200).json(nft);
  } catch (error) {
    res.status(400).json({ errorCode: 'INVALID_INPUT', message: error.message });
  }
};

// Delete an NFT
export const deleteNFT = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndDelete(req.params.id);
    if (!nft) {
      return res.status(404).json({ errorCode: 'NFT_NOT_FOUND', message: 'The NFT with the provided ID does not exist.' });
    }
    res.status(200).json({ message: 'NFT successfully deleted.' });
  } catch (error) {
    res.status(500).json({ errorCode: 'INTERNAL_ERROR', message: error.message });
  }
};
