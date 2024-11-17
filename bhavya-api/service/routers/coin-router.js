import express from 'express';
import { getCoins, addCoin, getCoinById } from '../controllers/coin-controller.js';

export const coinRouter = express.Router();

coinRouter.get('/', getCoins);
coinRouter.post('/', addCoin);
coinRouter.get('/:id', getCoinById);
