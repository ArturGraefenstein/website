// CustomButton.tsx
import type { ReactNode } from "react";
import { buttonStyles } from "./CustomButton.styles";

interface CustomButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const CustomButton = ({
  children,
  variant = "primary",
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ variant })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
