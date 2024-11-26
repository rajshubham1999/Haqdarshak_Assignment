import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setState, setDistrict, setPincode } from '../../redux/locationSlice';
import './Page5.css';
import { IoMdArrowBack } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Page5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);

  const [selectedState, setSelectedStateLocal] = useState(location.state);
  const [selectedDistrict, setSelectedDistrictLocal] = useState(location.district);
  const [pincode, setPincodeLocal] = useState(location.pincode);

  const states = [
    'Maharashtra', 'Uttar Pradesh', 'Rajasthan', 'Gujarat', 'Karnataka',
    'Tamil Nadu', 'Punjab', 'West Bengal', 'Bihar', 'Kerala'
  ];

  const districts = [
    'District 1', 'District 2', 'District 3', 'District 4', 'District 5',
    'District 6', 'District 7', 'District 8', 'District 9', 'District 10'
  ];

  const handleStateChange = (event) => {
    setSelectedStateLocal(event.target.value);
    dispatch(setState(event.target.value));
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrictLocal(event.target.value);
    dispatch(setDistrict(event.target.value));
  };

  const handlePincodeChange = (event) => {
    setPincodeLocal(event.target.value);
    dispatch(setPincode(event.target.value));
  };

  const handleBackButton = () => {
    navigate('/login');
  };

  const handleNextButton = () => {
    if (selectedState && selectedDistrict && pincode) {
      navigate('/mobile');
    } else {
      alert('Please fill all fields (State, District, and Pincode) before proceeding.');
    }
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
          <p className='first'>Choose Location</p>
        </div>
      </div>

      <div className='lower'>
        <div className='lowerTable'>
          <div className='field'>
            <label htmlFor="state"></label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="dropdown"
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {selectedState && (
            <>
              <div className='field'>
                <label htmlFor="district"></label>
                <select
                  id="district"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="dropdown"
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className='field'>
                <input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  placeholder="Enter Pincode"
                  className="inputField"
                />
              </div>
            </>
          )}

          {!selectedState && (
            <>
              <div>-------Or------</div>
              <div className='location'>
                <button className="locationbtn">
                  <span>
                    <FaLocationCrosshairs />
                  </span>
                  Use current location
                </button>
              </div>
            </>
          )}
        </div>
        <div className='lowerButton'>
          <button onClick={handleNextButton} className='nextbutton'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Page5;
