import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Fullstack from "./pages/fullstack";
import Graphic from "./pages/graphicDesigning";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Certs' element={<Certs/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/fullstack' element={<Fullstack/>} />
        <Route path='/graphicDesigning' element={<Graphic/>} />
      </Routes>
    </div>
  );
}

export default App;
