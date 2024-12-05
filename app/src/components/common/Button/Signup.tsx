// // signup.tsx
// import React, { useState } from "react";
// import "./signup.css";
// import signup from "../../../assets/signup.jpg";
// import { signupUser } from "../../../services/UserService";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [profilePic, setProfilePic] = useState<File | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [dialogVisible, setDialogVisible] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     axios.post('http://localhost:3002/users/signup',{username,email,password})
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const closeDialog = () => {
//     setDialogVisible(false);
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     // setProfilePic(null);
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src={signup} alt="Signup" className="signup-image" />
//       </div>
//       <div className="signup-right">
//         <form onSubmit={handleSubmit} className="signup-form">
//           <h2 className="signup-heading">Register</h2>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <div className="password-container">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 className="password-toggle-icon"
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </span>
//             </div>
//           </div>
        
//           <button type="submit" className="submit-btn">
//             Sign up
//           </button>
//           <p>
//             Already have an account?{" "}
//             <a href="/login" className="login-link">
//               Login
//             </a>
//           </p>
//         </form>
//         {dialogVisible && (
//           <div className="dialog">
//             <div className="dialog-content">
//               <p>User registered successfully!</p>
//               <button onClick={closeDialog} className="close-btn">
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import "./signup.css";
// import signup from "../../../assets/signup.jpg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [dialogVisible, setDialogVisible] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3002/users/signup', { username, email, password });
//       console.log(response);
//       // Show the success popup
//       setDialogVisible(true);
//       // Optionally show a toast notification
//       toast.success("User registered successfully!");
//     } catch (error:any) {
//       console.error(error.response);
//       // Check if the error has a response and handle it accordingly
//       console.error("Signup error:", error.response || error.message);
//         if (error.response) {
//           // Specific error message for email duplication
//           if (error.response.data.message === 'Email already exists') {
//             toast.error('This email is already exists. Please try another one.');
//           } else {
//             toast.error(error.response.data.message || 'An error occurred during signup.');
//           }
//         } else {
//           toast.error('An unexpected error occurred.');
//         }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const closeDialog = () => {
//     setDialogVisible(false);
//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src={signup} alt="Signup" className="signup-image" />
//       </div>
//       <div className="signup-right">
//         <form onSubmit={handleSubmit} className="signup-form">
//           <h2 className="signup-heading">Register</h2>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <div className="password-container">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 className="password-toggle-icon"
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </span>
//             </div>
//           </div>
        
//           <button type="submit" className="submit-btn">
//             Sign up
//           </button>
//           <p>
//             Already have an account?{" "}
//             <a href="/login" className="login-link">
//               Login
//             </a>
//           </p>
//         </form>
//         {dialogVisible && (
//           <div className="dialog">
//             <div className="dialog-content">
//               <p>User registered successfully!</p>
//               <button onClick={closeDialog} className="close-btn">
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import "./signup.css";
// import signup from "../../../assets/signup.jpg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Keyboard from "react-simple-keyboard";
// import "react-simple-keyboard/build/css/index.css";
// import KeyboardHideRoundedIcon from '@mui/icons-material/KeyboardHideRounded'; // Importing the icon

// function Signup() {
//   const [username, setUsername] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [dialogVisible, setDialogVisible] = useState<boolean>(false);
//   const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
//   const [inputFocus, setInputFocus] = useState<string>("");

//   // Define the keyboard layout
//   const keyboardLayout = {
//     default: [
//       "q w e r t y u i o p",
//       "a s d f g h j k l",
//       "z x c v b n m",
//       "{shift} {space} {enter}"
//     ],
//     shift: [
//       "Q W E R T Y U I O P",
//       "A S D F G H J K L",
//       "Z X C V B N M",
//       "{shift} {space} {enter}"
//     ]
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3002/users/signup', { username, email, password });
//       console.log(response);
//       setDialogVisible(true);
//       toast.success("User registered successfully!");
//     } catch (error: any) {
//       console.error(error.response);
//       if (error.response) {
//         if (error.response.data.message === 'Email already exists') {
//           toast.error('This email is already exists. Please try another one.');
//         } else {
//           toast.error(error.response.data.message || 'An error occurred during signup.');
//         }
//       } else {
//         toast.error('An unexpected error occurred.');
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const closeDialog = () => {
//     setDialogVisible(false);
//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

//   // Handle input changes using the virtual keyboard
//   const handleKeyboardInput = (input: string) => {
//     if (inputFocus === "username") {
//       setUsername(username + input);
//     } else if (inputFocus === "email") {
//       setEmail(email + input);
//     } else if (inputFocus === "password") {
//       setPassword(password + input);
//     }
//   };

//   // Function to toggle the virtual keyboard visibility
//   const toggleKeyboard = () => {
//     setIsKeyboardVisible(!isKeyboardVisible);
//   };

//   // Handle closing the keyboard when "x" is pressed
//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.key === "x" || event.key === "X") {
//       setIsKeyboardVisible(false);
//     }
//   };

//   // Handle input focus to prevent showing the keyboard when typing
//   const handleInputFocus = (field: string) => {
//     setInputFocus(field);
//     // If the keyboard is set to visible and a field is focused, don't show the keyboard automatically
//     if (!isKeyboardVisible) {
//       setIsKeyboardVisible(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src={signup} alt="Signup" className="signup-image" />
//       </div>
//       <div className="signup-right">
//         <form onSubmit={handleSubmit} className="signup-form">
//           <h2 className="signup-heading">Register</h2>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               onFocus={() => handleInputFocus("username")}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               onFocus={() => handleInputFocus("email")}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <div className="password-container">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 onFocus={() => handleInputFocus("password")}
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 className="password-toggle-icon"
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </span>
//             </div>
//           </div>

//           <button type="submit" className="submit-btn"  onClick={closeDialog}>
//             Sign up
//           </button>
//           <p>
//             Already have an account?{" "}
//             <a href="/login" className="login-link">
//               Login
//             </a>
            
//           <KeyboardHideRoundedIcon onClick={toggleKeyboard} className="keyboard"/>
//           </p>
//         </form>
//         {isKeyboardVisible && (
//           <div className="virtual-keyboard">
//             <Keyboard
//               onKeyPress={(input) => handleKeyboardInput(input)}
//               layout={keyboardLayout}
//               display={{
//                 '{bksp}': '⌫',
//                 '{enter}': '↵',
//                 '{shift}': '⇧',
//                 '{space}': 'Space'
//               }}
//             />
//           </div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default Signup;

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
