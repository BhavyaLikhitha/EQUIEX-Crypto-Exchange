import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the state structure
interface AuthState {
  user: {
    username: string;
    email: string;
  } | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Define the payload types for login
interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  username: string;
  email: string;
}

export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3002/users/login', credentials);
      return response.data; // Ensure this matches the LoginResponse structure
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.user = {
          username: action.payload.username,
          email: action.payload.email,
        };
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An unexpected error occurred';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
