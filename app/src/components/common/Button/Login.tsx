import React from 'react';
import './login.css';

// Define the prop types
interface LoginProps {
  text: string; // The text to display in the login component
  onClick: () => void; // The function to be called when the component is clicked
}

function Login({ text, onClick }: LoginProps) {
  return (
    <div className='login' onClick={() => onClick()}>{text}</div>
  );
}

export default Login;
