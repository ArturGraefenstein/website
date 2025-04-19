// HeroSection.tsx
import NavigationBar from "./NavigationBar";
import InfoCard from "./InfoCard";
import HighlightCard from "./HighlightCard";
import CustomButton from "./CustomButton";
import {
  heroSectionStyles,
  heroInnerStyles,
  heroProfileCardStyles,
  heroProfilePicStyles,
  heroProfileNameStyles,
  heroProfileRoleStyles,
  heroInfoCardsStyles,
  heroSkillsListStyles,
  heroSkillStyles,
  heroRightColStyles,
  heroRightHeaderStyles,
  heroRightHiStyles,
  heroRightNameStyles,
  heroRightRoleStyles,
  heroRightTextStyles,
  heroRightHighlightsStyles
} from "./HeroSection.styles";

// Icons als Platzhalter, falls react-icons nicht installiert ist, bitte installieren oder durch eigene SVGs ersetzen
const FaEnvelope = () => <span>📧</span>;
const FaMapMarkerAlt = () => <span>📍</span>;
const FaGlobe = () => <span>🌐</span>;
const FaUserTie = () => (
  <span style={{ fontSize: "3rem", color: "white" }}>👤</span>
);

const skills = ["Frontend", "Backend", "UI/UX", "React", "TypeScript"];

const HeroSection = () => (
  <section className={heroSectionStyles()}>
    <div className={heroInnerStyles()}>
      <NavigationBar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-[128px] w-full">
        {/* Linke Seite: Profil, Info, Skills, Button */}
        <div className={heroProfileCardStyles()}>
          {/* Profilfoto */}
          <div className={heroProfilePicStyles()}>
            {/* Platzhalter für Profilbild */}
            <FaUserTie />
          </div>
          {/* Name & Rolle */}
          <div className={heroProfileNameStyles()}>
            <span className={heroProfileRoleStyles()}>
              Artur Gräfenstein
            </span>
            <span className={heroProfileRoleStyles({ variant: "role" })}>
              Web Developer
            </span>
          </div>
          {/* InfoCards */}
          <div className={heroInfoCardsStyles()}>
            <InfoCard
              icon={<FaEnvelope />}
              value="abdurrahman_sinan@hotmail.com"
            />
            <InfoCard icon={<FaMapMarkerAlt />} value="Turkey" />
            <InfoCard icon={<FaUserTie />} value="Full-time / Freelancer" />
            <InfoCard icon={<FaGlobe />} value="www.sinantokmak.com" />
          </div>
          {/* Skills-Labels */}
          <div className={heroSkillsListStyles()}>
            {skills.map((skill) => (
              <span
                key={skill}
                className={heroSkillStyles()}
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Download CV Button */}
          <CustomButton variant="primary">Download CV</CustomButton>
        </div>
        {/* Rechte Seite: Begrüßung, Text, CTA, Highlights */}
        <div className={heroRightColStyles()}>
          {/* Begrüßung, Name, Rolle */}
          <div className={heroRightHeaderStyles()}>
            <span className={heroRightHiStyles()}>
              Hi, ich bin
            </span>
            <span className={heroRightNameStyles()}>
              Artur Gräfenstein
            </span>
            <span className={heroRightRoleStyles()}>
              Web Developer
            </span>
          </div>
          {/* Beschreibungstext */}
          <p className={heroRightTextStyles()}>
            Ich entwickle moderne, performante und ästhetische Webanwendungen
            mit Fokus auf Usability und Design. Lass uns gemeinsam dein nächstes
            Projekt realisieren!
          </p>
          {/* CTA Button: Let’s talk */}
          <CustomButton variant="secondary">Let’s talk</CustomButton>
          {/* Highlights */}
          <div className={heroRightHighlightsStyles()}>
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
