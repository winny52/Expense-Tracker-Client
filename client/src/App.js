import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import Analysis from './analysis';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
      </Routes>

    </div>
  );
}

export default App;
