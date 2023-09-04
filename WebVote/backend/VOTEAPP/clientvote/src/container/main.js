import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Candidatelist from "../pages/Candidatelist/candidatelist"
import CandidateForm from '../pages/admin';
import Login from '../components/login/login';
import ResultCandidate from '../pages/Result/result';
import Registration from '../components/login/registrasi';

export default function Main() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/candidatelist' element={<Candidatelist/>} />
          <Route path='/result' element={<ResultCandidate/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registrasi' element={<Registration/>} />
          <Route path='/admin' element={<CandidateForm/>} />
        </Routes>
      </Router>
    </div>
  )
}
