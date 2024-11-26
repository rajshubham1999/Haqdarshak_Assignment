import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileNumber } from '../../redux/locationSlice';
import './Page6.css';
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';

function Page6() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobileNumber = useSelector((state) => state.location.mobileNumber);
  const [localMobileNumber, setLocalMobileNumber] = useState(mobileNumber);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState(''); 

  const handleBackButton = () => {
    navigate('/location');
  };

  const handleNextButton = async () => {
    if (localMobileNumber && localMobileNumber.length === 10) {
      try {
     
        const response = await axios.post('https://haqdarshak-backend-yydp.onrender.com/api/checkMobileNumber', {
          mobileNumber: localMobileNumber,
        });

        if (response.data.message === 'Phone number already registered') {
          setMessage('You already have an account.');
          setMessageColor('green');
       
          setTimeout(() => {
            navigate('/profileCreated');
          }, 1500); 
        } else {
          setMessage('No account found, please provide personal details.');
          setMessageColor('red'); 
          dispatch(setMobileNumber(localMobileNumber));
          navigate('/Personal-Details');
        }
      } catch (error) {
        console.error('Error checking phone number:', error);
        alert('There was an error checking the phone number.');
      }
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { 
      setLocalMobileNumber(value);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="back">
          <button className='backButton'>
            <IoMdArrowBack onClick={handleBackButton} size={30} style={{ color: "black" }} />
          </button>
        </div>
        <div className='upper'>
          <p className='first'>What is Your Mobile Number?</p>
        </div>
      </div>

      <div className='lower'>
    
        {message && <p className="message" style={{ color: messageColor }}>{message}</p>}
        <div className='lowerTable'>
          <div className='fieldphone'>
            <input
              type="text"
              maxLength={10}
              value={localMobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter Mobile Number"
              className="inputField"
            />
          </div>
          <div>
            <p>This is used to create an account on Haqdarshak App</p>
          </div>
        </div>
        <div className='lowerButton'>
          <button className='nextbutton' onClick={handleNextButton}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Page6;
