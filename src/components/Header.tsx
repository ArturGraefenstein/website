import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SocialMediaBar from "./SocialMediaBar";
import Divider from "./Divider";

const Header = () => (
  <header className="w-full bg-[#292F36] flex flex-col items-center px-32">
    <div className="w-full flex flex-row justify-between items-center py-16 gap-[262px]">
      <Logo />
      <div className="flex flex-row items-center gap-16">
        <Navbar />
        <div className="flex flex-row items-center gap-16">
          <SearchBar />
          <SocialMediaBar />
        </div>
      </div>
    </div>
    <Divider />
  </header>
);

export default Header;
