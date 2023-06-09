import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HouseLayout from './components/HouseLayout/HouseLayout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/house-layout" element={<HouseLayout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

