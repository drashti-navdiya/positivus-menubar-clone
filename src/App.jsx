import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./sections/hero";
import LogoSlider from "./sections/logoSlider";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import UseCases from "./pages/useCases";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <main>
          <Hero />
          <LogoSlider />
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;