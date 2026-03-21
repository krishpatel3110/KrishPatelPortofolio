import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Courses } from "@/sections/Courses";
import { Education } from "@/sections/Education";
import { NotFound } from "@/sections/NotFound";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/CustomCursor";
import { Guestbook } from "@/components/Guestbook";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";

const PageWrapper = ({ children }) => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <PageTransition>{children}</PageTransition>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Guestbook />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <PageWrapper>
              <Hero />
              
              <Education />
            </PageWrapper>
          } />
          <Route path="/about" element={<PageWrapper><About /> </PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/certifications" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;