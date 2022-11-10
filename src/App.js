import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Support from "./pages/support";
import Caption from "./components/Caption";
import Inputs from "./components/Inputs"
function App() {
  return (
    <div>
    <BrowserRouter>
      
        <Navbar />
       
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/support" component={Support} />
        
      </Routes>
       

      
    </BrowserRouter>
  
  <Caption/>
  <Inputs />

  </div>
    
  );
}
export default App;
