import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ContactPage from './components/ContactPage'; // 
import useToken from './components/useToken';
import Analysis from './components/analysis';
import Homepage from './components/homepage';
import ExpenseForm from './components/ExpenseForm';
function App() {

  const { token, setToken } = useToken();

  return (
    <Router>
        {!token && token!=="" &&token!==undefined? 
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm setToken={setToken} />} />
          <Route path="/signup" element={<SignUpForm setToken={setToken} />} />
          </Routes>
        // <LoginForm  setToken={setToken}/>  
        :(
          <div>
        <Routes>
          <Route path="/get-started" element={<SignUpForm />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/analysis' element={<Analysis/>}/>
          <Route path='/expenseform' element={<ExpenseForm/>}/>
        </Routes>
      </div>
        )
      }

      
    </Router>
  );
}

export default App;
