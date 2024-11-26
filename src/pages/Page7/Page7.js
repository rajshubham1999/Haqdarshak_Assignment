import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { setName, setGender, setDob, setAge } from '../../redux/locationSlice';
import './Page7.css';
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';

function Page7() {
    const [name, setNameInput] = useState('');
    const [gender, setGenderInput] = useState('');
    const [dob, setDobInput] = useState('');
    const [age, setAgeInput] = useState('');
    const [message, setMessage] = useState(''); 
    const [messageColor, setMessageColor] = useState(''); 

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const reduxState = useSelector(state => state.location); 

    const handleNextButton = () => {
        if (name && gender && (dob || age)) {
            dispatch(setName(name));
            dispatch(setGender(gender));
            dispatch(setDob(dob));
            dispatch(setAge(age));

           
            const personData = {
                name,
                gender,
                dob: dob || null, 
                age: age || null, 
                state: reduxState.state, 
                district: reduxState.district,
                pincode: reduxState.pincode,
                mobileNumber: reduxState.mobileNumber,
            };

           
            axios.post('https://haqdarshak-backend-yydp.onrender.com/api/savePersonDetails', personData)
                .then((response) => {
                  
                    setMessage('Registration successful!'); 
                    setMessageColor('green');
        
                    setTimeout(() => {
                        navigate('/profileCreated');
                    }, 2000); 
                })
                .catch((error) => {
                    console.error('Error saving data:', error.message);
                    alert('Failed to save data. Please try again.');
                });
        } else {
            alert('Please fill all fields (Name, Gender, and DOB/Age) before proceeding.');
        }
    };

    const handleBackButton = () => {
        navigate('/mobile'); 
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
                    <p className='first'>Person Details</p>
                </div>
            </div>

            <div className='lower'>
             
                {message && <p className="message" style={{ color: messageColor }}>{message}</p>}
                
                <div className='lowerTable'>
                  
                    <div className='box1'>
                        <div className='name'>Name:</div>
                        <div className='fielddetails'>
                            <input
                                style={{ fontSize: '18px' }}
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>
                    </div>

                   
                    <div className="box2">
                        <div className='gender'>Gender</div>
                        <div className='radiomenu'>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={(e) => setGenderInput(e.target.value)}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={(e) => setGenderInput(e.target.value)}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={gender === 'other'}
                                    onChange={(e) => setGenderInput(e.target.value)}
                                />
                                Other
                            </label>
                        </div>
                    </div>

                    
                    <div className='box3'>
                        <div className='dob-age'>DOB/Age</div>
                        <div className='dobval'>
                            <div className='dobinput'>
                                <input
                                    type="date"
                                    placeholder="Enter DOB"
                                    value={dob}
                                    onChange={(e) => setDobInput(e.target.value)}
                                    disabled={!!age} 
                                />
                            </div>
                            <div>Or</div>
                            <div className='Ageinput'>
                                <input
                                    type="text"
                                    maxLength={2}
                                    placeholder="Enter Age"
                                    value={age}
                                    onChange={(e) => setAgeInput(e.target.value)}
                                    disabled={!!dob} 
                                />
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className='lowerButton'>
                    <button className='nextbutton' onClick={handleNextButton}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Page7;
