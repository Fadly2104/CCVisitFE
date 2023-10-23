import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from "./Beranda";
import Tamu from "./Tamu";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="/tamu" element={<Tamu />} />
    </Routes>
  )
}

export default App;
