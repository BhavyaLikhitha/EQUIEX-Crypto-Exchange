// import React, { useState } from 'react';
// import './signup.css';
// import signup from '../../../assets/signup.jpg';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [profilePic, setProfilePic] = useState<File | null>(null);
  

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Signup Details:', { name, email, password, profilePic });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setProfilePic(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src={signup} alt="Signup" className="signup-image" />
//       </div>
//       <div className="signup-right">
//         <form onSubmit={handleSubmit} className="signup-form">
//           <h2 className='signup-heading'>Register</h2>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Profile Picture</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//           </div>
//           <button type="submit" className="submit-btn">
//             Sign up
//           </button>
//           <p>
//             Already have an account?{' '}
//             <a href="/login" className="login-link">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import './signup.css';
import signup from '../../../assets/signup.jpg';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Details:', { name, email, password, profilePic });
    setDialogVisible(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signup} alt="Signup" className="signup-image" />
      </div>
      <div className="signup-right">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className='signup-heading'>Register</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <button type="submit" className="submit-btn">
            Sign up
          </button>
          <p>
            Already have an account?{' '}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>
        </form>
        {dialogVisible && (
          <div className="dialog">
            <div className="dialog-content">
              <p>User registered successfully!</p>
              <button onClick={closeDialog} className="close-btn">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
