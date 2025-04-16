// HeroSection.tsx
import NavigationBar from "./NavigationBar";
import InfoCard from "./InfoCard";
import HighlightCard from "./HighlightCard";
import CustomButton from "./CustomButton";

// Icons als Platzhalter, falls react-icons nicht installiert ist, bitte installieren oder durch eigene SVGs ersetzen
const FaEnvelope = () => <span>📧</span>;
const FaMapMarkerAlt = () => <span>📍</span>;
const FaGlobe = () => <span>🌐</span>;
const FaUserTie = () => (
  <span style={{ fontSize: "3rem", color: "white" }}>👤</span>
);

const skills = ["Frontend", "Backend", "UI/UX", "React", "TypeScript"];

const HeroSection = () => (
  <section className="w-full bg-[#292F36] flex flex-col items-center px-4 md:px-[128px] pt-16 pb-32 overflow-x-hidden">
    <div className="w-full flex flex-col gap-16">
      <NavigationBar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-[128px] w-full">
        {/* Linke Seite: Profil, Info, Skills, Button */}
        <div className="flex flex-col items-center gap-8 bg-[#292F36] border-4 border-white shadow-[0_-4px_2px_0_rgba(18,247,214,1)] rounded-[160px_0_160px_0] p-6 md:w-[320px] md:h-[520px]">
          {/* Profilfoto */}
          <div className="w-32 h-32 rounded-full bg-[#43454D] border-4 border-[#12F7D6] flex items-center justify-center overflow-hidden">
            {/* Platzhalter für Profilbild */}
            <FaUserTie />
          </div>
          {/* Name & Rolle */}
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">
              Artur Gräfenstein
            </span>
            <span className="text-lg text-[#12F7D6] font-mono">
              Web Developer
            </span>
          </div>
          {/* InfoCards */}
          <div className="flex flex-col gap-2 w-full">
            <InfoCard
              icon={<FaEnvelope />}
              value="abdurrahman_sinan@hotmail.com"
            />
            <InfoCard icon={<FaMapMarkerAlt />} value="Turkey" />
            <InfoCard icon={<FaUserTie />} value="Full-time / Freelancer" />
            <InfoCard icon={<FaGlobe />} value="www.sinantokmak.com" />
          </div>
          {/* Skills-Labels */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#43454D] text-[#12F7D6] px-4 py-1 rounded-full text-xs font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Download CV Button */}
          <CustomButton variant="primary">Download CV</CustomButton>
        </div>
        {/* Rechte Seite: Begrüßung, Text, CTA, Highlights */}
        <div className="flex flex-col gap-8 items-start w-full max-w-xl">
          {/* Begrüßung, Name, Rolle */}
          <div className="flex flex-col gap-2">
            <span className="text-[#12F7D6] text-lg font-mono">
              Hi, ich bin
            </span>
            <span className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Artur Gräfenstein
            </span>
            <span className="text-2xl text-[#98FAEC] font-mono">
              Web Developer
            </span>
          </div>
          {/* Beschreibungstext */}
          <p className="text-white/80 text-base md:text-lg max-w-lg">
            Ich entwickle moderne, performante und ästhetische Webanwendungen
            mit Fokus auf Usability und Design. Lass uns gemeinsam dein nächstes
            Projekt realisieren!
          </p>
          {/* CTA Button: Let’s talk */}
          <CustomButton variant="secondary">Let’s talk</CustomButton>
          {/* Highlights */}
          <div className="flex flex-row gap-6 mt-4">
            <HighlightCard
              value="5+"
              labelTop="Jahre"
              labelBottom="Erfahrung"
            />
            <HighlightCard value="12" labelTop="Tools" labelBottom="im Stack" />
            <HighlightCard
              value="4"
              labelTop="Sprachen"
              labelBottom="fließend"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
