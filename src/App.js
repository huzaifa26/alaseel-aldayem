import Nav from "./components/Nav";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import Grocery from "./pages/Product/Grocery";
import Electronic from "./pages/Product/Electronic";

function App() {
  return (
    <div>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="grocery" element={<Grocery />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;