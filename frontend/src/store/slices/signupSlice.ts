import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SignupState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: SignupState = {
  loading: false,
  error: null,
  success: false,
};

// Async Thunk for user signup
export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async ({ username, email, password }: { username: string; email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3002/users/signup', { username, email, password });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'An error occurred during signup');
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
