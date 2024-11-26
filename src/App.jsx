import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import ExpoCenters from "./pages/ExpoCenters";
import About from "./pages/About";
import Attend from "./pages/Attend";
import Host from "./pages/Host";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
   
      <Route path="" element={<Home/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/expo-center" element={<ExpoCenters/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/attend" element={<Attend/>} />
      <Route path="/host" element={<Host/>} />
      <Route path="/activities" element={<Activities/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
