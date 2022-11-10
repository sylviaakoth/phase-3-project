import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Caption from "./components/Caption";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/appointments" element={<Appointments />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </Router>
   <Caption/>
   <Footer/>
   
    </div>
  );
}
export default App;
