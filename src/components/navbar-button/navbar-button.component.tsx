import type { NavbarButtonProps } from "./navbar-button.types";
import { navbarButtonClass } from "./navbar-button.styles";

export const NavbarButton = ({
  label,
  isActive = false,
  onClick,
}: NavbarButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={navbarButtonClass({ isActive })}
    >
      {label}
    </button>
  );
};
