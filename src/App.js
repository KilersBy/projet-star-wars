import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personnages from './pages/Personnages/Personnages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Personnages />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >

  );
};

export default App;