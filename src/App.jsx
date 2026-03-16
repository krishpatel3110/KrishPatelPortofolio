import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";

const PageWrapper = ({ children }) => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/certifications" element={<PageWrapper><Testimonials /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;