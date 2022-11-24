import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import JobSeeker from "./pages/JobSeeker";
import Employer from "./pages/Employer";




const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' exact element={<Navigate to='/jobseeker'/>}/>
        <Route path='/jobseeker' exact element={<JobSeeker/>}/>
        <Route path='/employer' exact element={<Employer/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
