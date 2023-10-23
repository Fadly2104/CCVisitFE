import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from "./Beranda";
import Tamu from "./Tamu";
import Registrasi from "./Registrasi";
import Team from "./Team";
import Ruang from "./Ruang";
import Survey from "./Survey";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="/tamu" element={<Tamu />} />
    <Route path="/registrasi" element={<Registrasi />} />
    <Route path="/team" element={<Team />} />
    <Route path="/ruang" element={<Ruang />} />
    <Route path="/survey" element={<Survey />} />
    </Routes>
  )
}

export default App;
