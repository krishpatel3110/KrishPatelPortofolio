import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
