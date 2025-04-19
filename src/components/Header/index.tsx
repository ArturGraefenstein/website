import Logo from "./Logo";
import SocialMediaBar from "./SocialMediaBar";
import Divider from "./Divider";
import { headerStyles, headerInnerStyles, headerLogoBarStyles } from "./Header.styles";

const Header = () => (
  <header className={headerStyles()}>
    <div className={headerInnerStyles()}>
      <Logo />
      <div className={headerLogoBarStyles()}>
        <SocialMediaBar />
      </div>
    </div>
    <Divider />
  </header>
);

export default Header;
