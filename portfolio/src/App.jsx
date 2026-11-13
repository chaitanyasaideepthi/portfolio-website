
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Project from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import ContactSection from "./components/Contact/Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Project />
      <Certificates />
      <ContactSection />
    </>
  );
}

export default App;
