import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-gray-500">
        © 2026 Avinash Pal. All rights reserved.
      </footer>
    </div>
  );
}

export default App;