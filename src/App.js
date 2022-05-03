
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
   <>
    <Header />
   <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/About" element= {<About />} />
   </Routes>
   </Router>
   <Footer />
   
   </>
  );
}

export default App;
