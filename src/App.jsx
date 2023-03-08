import logo from './assets/img/logo.svg';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
    return (
      <div className="App">
        <NavBar />
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
         <Footer/> 
      </div>
    );
  }


export default App;
