import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import login from '../../../assets/login.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/slices/authSlice'; // Update path as necessary
import { RootState, AppDispatch } from '../../../store/store'; // Update path as necessary


// Define the Login component
function Login() {
  // State for managing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Access Redux state
  const { loading, error } = useSelector((state: RootState) => state.auth);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch login action with email and password
    dispatch(loginUser({ email, password }))
      .unwrap() // Unwrap the promise to handle resolved or rejected state
      .then((response: { token: string; username: string; email: string }) => {
        toast.success('User successfully logged in!');
        localStorage.setItem('userToken', response.token);
        setTimeout(() => {
          navigate('/'); // Redirect to the home page
        }, 2000);
      })
      .catch((err: string) => {
        toast.error(err || 'Login failed');
      });
  };

   // Handle forgot password functionality
  const handleForgotPassword = () => {
    toast.info('A reset link has been sent to your email!');
  };

  return (
    <div className="login-container"> {/* Main container for the login page */}
      <div className="login-left">
        <img src={login} alt="Login" className="login-image" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-heading">Login</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input
              required
              disabled={loading} // Disable input if loading
            />
          </div>
          <div className="form-group"> {/* Password input field */}
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'} {/* Show loading state if applicable */}
          </button>
          <p>
            Forgot password?{' '}
            <button
              type="button"
              className="forgot-password-btn"
              onClick={handleForgotPassword}
              disabled={loading}
            >
              Reset here
            </button>
          </p>
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast notifications */}
    </div>
  );
}

export default Login;
