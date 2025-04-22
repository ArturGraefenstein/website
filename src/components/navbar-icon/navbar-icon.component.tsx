import { navbarIconClass } from "./navbar-icon.styles";
import type { NavbarIconProps } from "./navbar-icon.types";

export const NavbarIcon = ({ icon, link }: NavbarIconProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={navbarIconClass}>
      {icon}
    </a>
  );
};
