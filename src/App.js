import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Appointments from "./pages/Appointments";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import Support from "./pages/Support";
// import Inputs from "./components/Inputs";
import Footer from "./components/Footer";
import Caption from "./components/Caption";

function App() {
  console.log(window.location)
  return (
    <div>
      <Navbar/>
      <Caption/>
      <Footer/>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appointments" element={<Appointments />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
      </BrowserRouter>

          </div>
  );
}
export default App;
