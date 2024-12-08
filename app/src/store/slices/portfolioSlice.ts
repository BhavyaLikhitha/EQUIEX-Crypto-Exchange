import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Coin {
  coinName: string;
  quantity: number;
  price: number;
  value: number;
  imageUrl: string;
}

interface PortfolioState {
  portfolio: Coin[];
  totalValue: number;
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  portfolio: [],
  totalValue: 0,
  loading: false,
  error: null,
};

// Async thunk to fetch portfolio data
export const fetchPortfolio = createAsyncThunk(
  'portfolio/fetch',
  async (walletAddress: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`
      );
      const data = await response.json();
      return data.data.portfolio;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch portfolio');
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolio = action.payload;

        // Calculate total value
        state.totalValue = action.payload.reduce((sum: number, coin: Coin) => sum + coin.value, 0);
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default portfolioSlice.reducer;
