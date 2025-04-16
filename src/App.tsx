import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center font-sans bg-gradient-to-br from-blue-50 via-white to-neutral-100 text-neutral-900 px-4 sm:px-8">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
