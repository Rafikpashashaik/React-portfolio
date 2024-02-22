import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Data from "./components/Home/Data";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Scrollup from "./components/ScrollUp/Scrollup";
import Qualification2 from "./components/Qualification/Qualification2";
import Portfolio from "./components/Portfolio/Portfolio";

// import Democontactus from './components/Democontactus'

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />

        <Skills />

        <Portfolio />

        <Qualification />
        <Qualification2 />

        <Contact />

        {/* <Democontactus/> */}
      </main>
      <Footer />

      <Scrollup />
    </>
  );
}

export default App;
