import { navbarClass, containerClass, menuClass } from "./navbar.styles";
import { Logo } from "../logo";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavbarIcon } from "../navbar-icon";

export const Navbar = () => {
  return (
    <nav className={navbarClass}>
      <div className={containerClass}>
        <Logo />

        <div className={menuClass}>
          <NavbarIcon
            icon={<FaXTwitter />}
            link="https://x.com/graefenstein_"
          />
          <NavbarIcon
            icon={<FaGithub />}
            link="https://github.com/ArturGraefenstein"
          />
          <NavbarIcon
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/artur-graefenstein/"
          />
        </div>
      </div>
    </nav>
  );
};
