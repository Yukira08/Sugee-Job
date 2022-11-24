import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/home/Home";
import Employer from "./components/employer/Home";



const App = () => {
  return (
    <div>
      <Header/>
      <Employer/>
      <Footer/>
    </div>
  );
}

export default App;
