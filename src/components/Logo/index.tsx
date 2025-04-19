import { logoContainerStyles, logoCStyles, logoTextStyles } from "./Logo.styles";

const Logo = () => (
  <div className={logoContainerStyles()}>
    <span className={logoCStyles()}>{"<C/>"}</span>
    <span className={logoTextStyles()}>SinanTokmak</span>
  </div>
);

export default Logo;
