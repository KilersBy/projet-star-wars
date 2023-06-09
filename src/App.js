import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personnages from './pages/Personnages/Personnages'
import Films from './pages/Films/Films'
import Vehicules from './pages/Vehicules/Vehicules'
import Details from './pages/Details';
import Navbar from './components/Navbar/Navbar.js'
import ListeFavoris from './pages/Personnages/ListeFavoris'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route exact path='/' element={<Personnages />} />
            <Route exact path='/films' element={<Films/>} />
            <Route exact path='/vehicules' element={<Vehicules/>} />
            <Route path='/details/:id' element={<Details/>} />
            <Route path='/favoris' element={<ListeFavoris/>} />
          </Routes>
      </BrowserRouter >
    </div >

  );
};

export default App;