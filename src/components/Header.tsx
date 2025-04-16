import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SocialMediaBar from "./SocialMediaBar";
import Divider from "./Divider";

const Header = () => (
  <header className="w-full bg-[#292F36] overflow-x-hidden">
    <div className="max-w-screen-2xl mx-auto w-full flex flex-row justify-between items-center py-16 px-4 md:px-[128px] gap-8 md:gap-[120px]">
      <Logo />
      <div className="flex flex-row items-center gap-8 md:gap-16 flex-shrink-0">
        <Navbar />
        <div className="flex flex-row items-center gap-4 md:gap-8 flex-shrink-0">
          <SearchBar />
          <SocialMediaBar />
        </div>
      </div>
    </div>
    <Divider />
  </header>
);

export default Header;
