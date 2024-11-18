import express from 'express';
import * as nftController from "../controllers/nft-controller.js";

const router = express.Router();

router.get('/', nftController.getAllNFTs); // Retrieve all NFTs
router.post('/', nftController.mintNFT); // Mint a new NFT
router.get('/:id', nftController.getNFTById); // View a specific NFT
router.put('/:id', nftController.updateNFT); // Update an NFT
router.delete('/:id', nftController.deleteNFT); // Delete an NFT

export default router;