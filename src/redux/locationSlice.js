
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: '',
  district: '',
  pincode: '',
  mobileNumber: '', 
  name: '',         
  gender: '',       
  dob: '',          
  age: '',          
};

const locationSlice = createSlice({
  name: 'Details',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setName: (state, action) => { 
      state.name = action.payload;
    },
    setGender: (state, action) => { 
      state.gender = action.payload;
    },
    setDob: (state, action) => { 
      state.dob = action.payload;
    },
    setAge: (state, action) => { 
      state.age = action.payload;
    },
  },
});

export const {
  setState,
  setDistrict,
  setPincode,
  setMobileNumber,
  setName,
  setGender,
  setDob,
  setAge,
} = locationSlice.actions;

export default locationSlice.reducer;
