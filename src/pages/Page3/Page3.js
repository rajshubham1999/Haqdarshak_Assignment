import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page3.css';
import { IoMdArrowBack } from "react-icons/io";

function Page3() {


  const navigate = useNavigate();


  const handlebackbutton=()=>{
    navigate('/home')
  }

  const handleNextButton=()=>{
    navigate('/login')
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className="back">
          <button className='backButton'>
            <IoMdArrowBack onClick={handlebackbutton} size={30} style={{ color: "black" }} />
          </button>
        </div>
        <div className='upper'>
          <p className='first'>Which language do you Prefer?</p>
        </div>
      </div>

      <div className='lower'>
        <div className='lowerTable'>
          <div className='field1'>
            <input type="radio" id="english" name="language" value="english" checked disabled />
            <label htmlFor="english">English</label>
          </div>
          <div className='field1'>
            <input type="radio" id="hindi" name="language" value="hindi" disabled />
            <label htmlFor="hindi">हिन्दी</label>
          </div>
          <div className='field1'>
            <input type="radio" id="tamil" name="language" value="tamil" disabled />
            <label htmlFor="tamil">ಕನ್ನಡ</label>
          </div>
        </div>
        <div className='lowerButton'>
          <button  onClick={handleNextButton} className='nextbutton'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
