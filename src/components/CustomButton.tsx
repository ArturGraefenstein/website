// CustomButton.tsx
import type { ReactNode } from "react";

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
  const base =
    "flex flex-row items-center gap-2 px-8 py-4 rounded-[32px] font-sans text-lg font-normal transition-colors cursor-pointer select-none";
  const primary = "bg-[#12F7D6] text-[#292F36] hover:bg-[#98FAEC]";
  const secondary =
    "bg-[#43454D] text-white hover:bg-[#292F36] hover:text-[#12F7D6]";
  return (
    <button
      type="button"
      className={`${base} ${variant === "primary" ? primary : secondary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
