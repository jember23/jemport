import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Fullstack from "./pages/fullstack";
import Graphic from "./pages/graphicDesigning";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Certs' element={<Certs/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/fullstack' element={<Fullstack/>} />
        <Route path='/graphicDesigning' element={<Graphic/>} />
      </Routes>
    </div>

    
  );
}

export default App;
