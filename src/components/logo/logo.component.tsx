import { bracketClass, logoContainerClass, logoTextClass } from "./logo.styles";

export const Logo = () => {
  return (
    <div className={logoContainerClass}>
      <span className={`${logoTextClass} ${bracketClass}`}>&lt;AG/&gt;</span>
    </div>
  );
};
