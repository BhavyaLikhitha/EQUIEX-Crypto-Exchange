import NFT from "../models/nft.js"
export const findAllNFTs = async () => {
  return await NFT.find();
};

export const createNFT = async (nftData) => {
  const nft = new NFT(nftData);
  return await nft.save();
};

export const findNFTById = async (id) => {
  return await NFT.findById(id);
};

export const updateNFTById = async (id, updateData) => {
  return await NFT.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

export const deleteNFTById = async (id) => {
  return await NFT.findByIdAndDelete(id);
};

