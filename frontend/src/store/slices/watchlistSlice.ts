import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  price_change_percentage_24h: number;
  current_price: number;
  total_volume: number;
  market_cap: number;
}

interface WatchlistState {
  watchlist: Coin[];
  loading: boolean;
  error: string | null;
}

const initialState: WatchlistState = {
  watchlist: [],
  loading: false,
  error: null,
};

// Thunks for asynchronous operations
export const fetchWatchlist = createAsyncThunk('watchlist/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:3002/tracker/watchlist');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch watchlist');
  }
});

export const toggleWatchlist = createAsyncThunk(
  'watchlist/toggle',
  async (coin: Coin, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { watchlist: WatchlistState };
      const isFavorite = state.watchlist.watchlist.some((item) => item.symbol === coin.symbol);

      if (isFavorite) {
        await axios.delete(`http://localhost:3002/tracker/watchlist/${coin.symbol}`);
        return { action: 'removed', coin };
      } else {
        await axios.post('http://localhost:3002/tracker/watchlist', coin);
        return { action: 'added', coin };
      }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update watchlist');
    }
  }
);

// Slice
const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.loading = false;
        state.watchlist = action.payload;
      })
      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(toggleWatchlist.fulfilled, (state, action) => {
        const { action: toggleAction, coin } = action.payload;
        if (toggleAction === 'added') {
          state.watchlist.push(coin);
        } else {
          state.watchlist = state.watchlist.filter((item) => item.symbol !== coin.symbol);
        }
      })
      .addCase(toggleWatchlist.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default watchlistSlice.reducer;
