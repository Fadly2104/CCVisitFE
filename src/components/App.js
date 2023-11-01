import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from "./Beranda";
import Tamu from "./Tamu";
import Registrasi from "./Registrasi";
import Ruang from "./Ruang";
import Survey from "./Survey";
import TimSurvey from "./TimSurvey";
import Jadwal from "./Jadwal";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="/tamu" element={<Tamu />} />
    <Route path="/registrasi" element={<Registrasi />} />
    <Route path="/ruang" element={<Ruang />} />
    <Route path="/survey" element={<Survey />} />
    <Route path="/timsurvey" element={<TimSurvey />} />
    <Route path="/jadwal" element={<Jadwal />} />
    </Routes>
  )
}

export default App;
