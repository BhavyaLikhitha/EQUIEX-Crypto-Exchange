import NFT from "../models/nft.js"; // Import the NFT model to interact with the NFT collection in the database

// Retrieve all NFTs from the database
export const findAllNFTs = async () => {
  return await NFT.find(); // Fetches all NFT documents
};

// Create a new NFT in the database
export const createNFT = async (nftData) => {
  const nft = new NFT(nftData); // Initialize a new NFT document with provided data
  return await nft.save(); // Save the new NFT to the database and return the saved document
};

// Find a specific NFT by its unique ID
export const findNFTById = async (id) => {
  return await NFT.findById(id); // Fetch the NFT document that matches the provided ID
};

// Update an existing NFT by its unique ID
export const updateNFTById = async (id, updateData) => {
  return await NFT.findByIdAndUpdate(
    id, 
    updateData, // Data to update in the NFT document
    { new: true, runValidators: true } // Options: return the updated document and validate updates
  );
};

// Delete an NFT by its unique ID
export const deleteNFTById = async (id) => {
  return await NFT.findByIdAndDelete(id); // Remove the NFT document that matches the provided ID
};