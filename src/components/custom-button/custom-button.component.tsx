import { buttonClass } from "./custom-button.styles";
import type { CustomButtonProps } from "./custom-button.types";

export const CustomButton = ({
  children,
  variant = "primary",
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={buttonClass({ variant })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
