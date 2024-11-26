import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page4.css';
import { IoMdArrowBack } from "react-icons/io";

function Page4() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleBackButton = () => {
    navigate('/language');
  };

  const handleNextButton = () => {
    if (selectedOption === 'phone') {
    
      navigate('/mobile');
    } else if (selectedOption === 'register') {
     
      navigate('/location');
    } else {
    
      alert('Please select a login/Register option to proceed.');
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="back">
          <button className='backButton' onClick={handleBackButton}>
            <IoMdArrowBack size={30} style={{ color: "black" }} />
          </button>
        </div>
        <div className='upper'>
          <p className='first'>How do you want to login?</p>
        </div>
      </div>

      <div className='lower'>
        <div className='lowerTable'>
          <div className='field2'>
            <label className="radios" htmlFor="register">
              <input
                type="radio"
                id="register"
                name="loginOption"
                value="register"
                onChange={handleOptionChange}
              />
              Register me as new User
            </label>
          </div>
          <div className='field2'>
            <label className="radios" htmlFor="phone">
              <input
                type="radio"
                id="phone"
                name="loginOption"
                value="phone"
                onChange={handleOptionChange}
              />
              Use my Phone Number
            </label>
          </div>
          <div className='field2'>
            <label className="radios" htmlFor="yojana">
              <input
                type="radio"
                id="yojana"
                name="loginOption"
                value="yojana"
                disabled
              />
              Yojana Card
            </label>
          </div>
        </div>
        <div className='lowerButton'>
          <button onClick={handleNextButton} className='nextbutton'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Page4;
