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


import React, { useState } from "react";
import "./signup.css";
import signup from "../../../assets/signup.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/users/signup', { username, email, password });
      console.log(response);
      // Show the success popup
      setDialogVisible(true);
      // Optionally show a toast notification
      toast.success("User registered successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signup} alt="Signup" className="signup-image" />
      </div>
      <div className="signup-right">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className="signup-heading">Register</h2>
          <div className="form-group">
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
          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="password-toggle-icon"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
        
          <button type="submit" className="submit-btn">
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>
        </form>
        {dialogVisible && (
          <div className="dialog">
            <div className="dialog-content">
              <p>User registered successfully!</p>
              <button onClick={closeDialog} className="close-btn">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Signup;
