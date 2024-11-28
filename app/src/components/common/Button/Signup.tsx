import React from 'react';
import './signup.css';

// Define the prop types for the Signup component
interface SignupProps {
  text: string; // The text to display in the signup component
  onClick: () => void; // The function to be called when the component is clicked
}

function Signup({ text, onClick }: SignupProps) {
  return (
    <div className='signup' onClick={() => onClick()}>{text}</div>
  );
}

export default Signup;
