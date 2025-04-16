import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center font-sans bg-[#292F36] text-neutral-900 w-full">
      <Header />
      <HeroSection />
    </main>
  );
}

export default App;
