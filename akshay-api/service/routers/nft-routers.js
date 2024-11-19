import express from 'express';
import * as nftController from "../controllers/nft-controller.js";

const router = express.Router();
// GET REQUEST
router.get('/', nftController.getAllNFTs); // Retrieve all NFTs
// POST REQUEST
router.post('/', nftController.mintNFT); // Mint a new NFT
// GET REQUEST
router.get('/:id', nftController.getNFTById); // View a specific NFT
// PUT REQUEST
router.put('/:id', nftController.updateNFT); // Update an NFT
// DELETE REQUEST
router.delete('/:id', nftController.deleteNFT); // Delete an NFT

export default router;