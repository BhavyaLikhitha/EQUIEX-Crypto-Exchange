import React, { useEffect, useState } from 'react';
import './signup.css';
import signup from '../../../assets/signup.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { signupUser, resetSignupState } from '../../../store/slices/signupSlice';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import KeyboardHideRoundedIcon from '@mui/icons-material/KeyboardHideRounded';

function Signup() {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // For toggling password visibility
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false); // Toggle virtual keyboard
  const [inputFocus, setInputFocus] = useState<string>('');
  const dispatch = useAppDispatch(); // Redux dispatch hook
  const { loading, error, success } = useAppSelector((state) => state.signup);

   // Keyboard layout
   const keyboardLayout = {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m', '{bksp} {space} {enter}'],
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupUser({ username, email, password }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);


  // Handle virtual keyboard input
  const handleKeyboardInput = (input: string) => {
    if (inputFocus === 'username') setUsername((prev) => prev + input);
    else if (inputFocus === 'email') setEmail((prev) => prev + input);
    else if (inputFocus === 'password') setPassword((prev) => prev + input);
  };

  // Toggle virtual keyboard visibility
  const toggleKeyboard = () => setIsKeyboardVisible((prev) => !prev);

  const handleInputFocus = (field: string) => setInputFocus(field);


  // Side effect to handle success and error state
  useEffect(() => {
    if (success) {
      toast.success('User registered successfully!');
      dispatch(resetSignupState());
      setUsername('');
      setEmail('');
      setPassword('');
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error, dispatch]);

  return (
    <div className="signup-container"> {/* Main container */}
      <div className="signup-left">
        <img src={signup} alt="Signup" className="signup-image" />
      </div>
      <div className="signup-right"> {/* Right section with form */}
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className="signup-heading">Register</h2>
          <div className="form-group"> {/* Username input */}
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group"> {/* Password input with toggle */}
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleInputFocus('password')}
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {showPassword ? '🙈' : '👁️'} {/* Toggle icon */}
              </span>
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'} {/* Show loading state */}
          </button>
          <p>
          <KeyboardHideRoundedIcon onClick={toggleKeyboard} className="keyboard-icon" />
            Already have an account?{' '}
            <a href="/login" className="login-link">
              Login
            </a>
            
          </p>
          
        </form>
        {isKeyboardVisible && (
          <div className="virtual-keyboard">
            <Keyboard
              onKeyPress={(input) => handleKeyboardInput(input)}
              layout={keyboardLayout}
              display={{
                '{bksp}': '⌫',
                '{space}': 'Space',
                '{enter}': '↵',
              }}
            />
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast notifications */}
    </div>
  );
}

export default Signup;
