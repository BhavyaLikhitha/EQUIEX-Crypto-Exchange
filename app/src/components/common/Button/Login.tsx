// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './login.css';
// import login from '../../../assets/login.jpg';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [forgotPassword, setForgotPassword] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email === 'test@example.com' && password === 'password') {
//       toast.success('User successfully logged in!');
//     } else {
//       toast.error('Incorrect email or password!');
//     }
//   };

//   const handleForgotPassword = () => {
//     setForgotPassword(true);
//     toast.info('A reset link has been sent to your email!');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <img src={login} alt="Login" className="login-image" />
//       </div>
//       <div className="login-right">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2 className='login-heading'>Login</h2>
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
//           <button type="submit" className="submit-btn">
//             Login
//           </button>
//           <p>
//             Forgot password?{' '}
//             <button
//               type="button"
//               className="forgot-password-btn"
//               onClick={handleForgotPassword}
//             >
//               Reset here
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import login from '../../../assets/login.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      toast.success('User successfully logged in!');
      setTimeout(() => {
        navigate('/'); // Redirect to the home page
      }, 2000); // Delay to show the toast message
    } else {
      toast.error('Incorrect email or password!');
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    toast.info('A reset link has been sent to your email!');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={login} alt="Login" className="login-image" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className='login-heading'>Login</h2>
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
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <p>
            Forgot password?{' '}
            <button
              type="button"
              className="forgot-password-btn"
              onClick={handleForgotPassword}
            >
              Reset here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
