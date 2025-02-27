import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import signupReducer from './slices/signupSlice';
import watchlistReducer from './slices/watchlistSlice';
import portfolioReducer from './slices/portfolioSlice';
const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authentication slice here
    signup: signupReducer,
    watchlist: watchlistReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
