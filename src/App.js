import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Visa from "./Visa/Visa";
import NotFound from "./NotFound/NotFound";
import Navigation from "./Components/LayoutComponents/Navigation";
import Footer from "./Components/LayoutComponents/Footer";
import FormModal from "./Components/FormModal/FormModal";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/form" element={<FormModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
