export type CustomButtonVariant = "primary" | "secondary";

export interface CustomButtonProps {
  children: React.ReactNode;
  variant?: CustomButtonVariant;
  onClick?: () => void;
}