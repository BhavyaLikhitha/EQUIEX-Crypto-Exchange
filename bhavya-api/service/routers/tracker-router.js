import express from 'express';
import { getUserTracker, addCoinToTracker, updateCoinInTracker, removeCoinFromTracker } from '../controllers/tracker-controller.js';

export const trackerRouter = express.Router();

trackerRouter.get('/', getUserTracker);
trackerRouter.post('/', addCoinToTracker);
trackerRouter.put('/:coinId', updateCoinInTracker);
trackerRouter.delete('/:coinId', removeCoinFromTracker);

