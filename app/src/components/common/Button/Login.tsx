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
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import login from '../../../assets/login.jpg';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const result = await axios.post('http://localhost:3002/users/login', { email, password });
        console.log(result); // Check the response in the console

        const token = result.data.token; // Extract token from the response

        if (token) {
            localStorage.setItem('userToken', token); // Store token in localStorage
            toast.success('User successfully logged in!');
            setTimeout(() => {
                navigate('/'); // Redirect to the home page
            }, 2000);
        } else {
            toast.error('Token not found in response');
        }
    } catch (error: any) {
        console.error(error.response);
        if (error.response) {
            if (error.response.data.message === 'Invalid credentials') {
                toast.error('Invalid credentials.');
            } else {
                toast.error(error.response.data.message || 'An error occurred during login.');
            }
        } else {
            toast.error('An unexpected error occurred.');
        }
    }
};

  const handleForgotPassword = () => {
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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;