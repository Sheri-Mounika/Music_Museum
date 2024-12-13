import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../Images/background-image.jpg';
import './index.css'

function LoginPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === '143Music') {
      navigate('/welcome'); // Navigate to the welcome page
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div  style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      textAlign: 'center',
  }} className='bg-container'>
      <div className='in-container'>
      <h1 className='heading'>Music Museum</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Password"
      />
      <div>
      <button onClick={handleSubmit} className='button-style'>Login</button>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
