import logo from "./logo.svg";
import Books from "./Home";
import Headers from "./Header";
import Footers from "./Footer";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Signup from "./Signup";

function App() {
  return (
    <div>
     
      <BrowserRouter> 
      <Headers />
      <Footers />
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Books/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
