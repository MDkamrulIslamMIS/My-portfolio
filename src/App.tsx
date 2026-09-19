import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AllTechAcademy from './components/AllTechAcademy';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040919] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Dashboard */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Middle Bento Grid & Bottom Grid with Clean White/Off-White Background */}
        <div className="bg-[#f8fafc] text-slate-900 border-t border-slate-200/80 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Column: About Me, Technical Skills, Education */}
              <div className="flex flex-col gap-6">
                <About />
                <Skills />
                <Education />
              </div>

              {/* Right Column: Work Experience, Featured Projects, All Tech Academy */}
              <div className="flex flex-col gap-6">
                <Experience />
                <Projects />
                <AllTechAcademy />
              </div>
            </div>
          </div>

          {/* 3. Bottom Grid: FAQ & Contact (2 Columns on Desktop) */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <FAQ />
              <Contact />
            </div>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
