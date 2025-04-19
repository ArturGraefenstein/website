import { navbarClass, containerClass, menuClass } from "./navbar.styles";
import { Logo } from "../logo";
import { NavbarButton } from "../navbar-button";

export const Navbar = () => {
  return (
    <nav className={navbarClass}>
      <div className={containerClass}>
        <Logo />

        <div className={menuClass}>
          <NavbarButton label="Home" />
          <NavbarButton label="Blog" />
        </div>
      </div>
    </nav>
  );
};
