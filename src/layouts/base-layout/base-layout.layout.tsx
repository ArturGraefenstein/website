import { Navbar } from "../../components/navbar";
import { wrapperClass } from "./base-layout.styles";
import type { BaseLayoutProps } from "./base-layout.types";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={wrapperClass}>
      <Navbar />
      {children}
    </div>
  );
};
