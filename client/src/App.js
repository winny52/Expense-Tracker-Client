import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ContactPage from './components/ContactPage'; // 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/get-started" element={<SignUpForm />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
