import express from "express";
import * as coinController from "../controllers/coin-controller.js";

const router = express.Router();

// Add a new coin
router.post("/", coinController.postCoin);

// Get all coins
router.get("/", coinController.getAllCoins);

// Get coin details by name
router.get("/:name", coinController.getCoinByName);

// Add coin to user's tracker
router.post("/users/:email/coins", coinController.postUserCoin);

// Get user's coin tracker
router.get("/users/:email/coins", coinController.getUserCoins);

// Edit coin in user's tracker
router.put("/users/:email/coins/:name", coinController.putUserCoin);

// Delete coin from user's tracker
router.delete("/users/:email/coins/:name", coinController.deleteUserCoin);

export default router;
