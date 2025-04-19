import {
  bracketClass,
  logoContainerClass,
  logoTextClass,
  nameClass,
} from "./logo.styles";

export const Logo = () => {
  return (
    <div className={logoContainerClass}>
      <span className={`${logoTextClass} ${bracketClass}`}>&lt;AG/&gt;</span>
      <span className={`${logoTextClass} ${nameClass}`}>ArturGräfenstein</span>
    </div>
  );
};
