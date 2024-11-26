
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/Page5/Page5';
import Page6 from './pages/Page6/Page6';
import Page7 from './pages/Page7/Page7';
import Page8 from './pages/Page8/Page8'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/language" element={<Page3 />} />
          <Route path="/login" element={<Page4/>}/>
          <Route path="/location" element={<Page5/>}/>
          <Route path="/mobile" element={<Page6/>}/>
          <Route path="/Personal-Details" element={<Page7/>}/>
          <Route path="/profileCreated" element={<Page8/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}


function InitialPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => navigate('/home'), 1000); // Wait for fade-out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`transition-container ${isExiting ? 'fade-out' : 'fade-in'}`}>
      <Page1 />
    </div>
  );
}


function HomePage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => navigate('/language'), 1000); // Wait for fade-out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`transition-container ${isExiting ? 'fade-out' : 'fade-in'}`}>
      <Page2 />
    </div>
  );
}

export default App;
