import { trackerService } from '../services/tracker-service.js';

// Get user tracker
export const getUserTracker = async (req, res) => {
  try {
    const tracker = await trackerService.getUserTracker(req.params.userId);
    if (tracker) {
      res.status(200).json(tracker);
    } else {
      res.status(404).json({ message: 'Tracker not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add coin to user's tracker
export const addCoinToTracker = async (req, res) => {
  try {
    const tracker = await trackerService.addCoinToTracker(req.params.userId, req.body);
    res.status(201).json(tracker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update coin in user's tracker
export const updateCoinInTracker = async (req, res) => {
  try {
    const tracker = await trackerService.updateCoinInTracker(req.params.userId, req.params.coinId, req.body);
    res.status(200).json(tracker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove coin from user's tracker
export const removeCoinFromTracker = async (req, res) => {
  try {
    await trackerService.removeCoinFromTracker(req.params.userId, req.params.coinId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

