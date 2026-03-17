import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Courses } from "@/sections/Courses";
import { Education } from "@/sections/Education";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/CustomCursor";

const PageWrapper = ({ children }) => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PageWrapper>
              <Hero />
              <About />
              <Education />
            </PageWrapper>
          } />
          <Route path="/about" element={<PageWrapper><About /> <Education /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/certifications" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;