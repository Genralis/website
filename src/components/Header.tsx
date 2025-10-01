import MobileNavBar from "./MobileNavbar";
import genralisText from "../assets/images/genralis-text.svg";
import brainLogo from "../assets/images/brain-ai-logo.svg";
import Navbar from "./Navbar";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile(640); // sm breakpoint

  return (
    <header
      className="
        sticky top-0 z-40
        relative
        bg-(--main-bg)
        py-8
        px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20
      "
    >
      {/* Left: Logo (absolute) */}
      <div
        className="absolute left-5 sm:left-8 md:left-12 lg:left-16 xl:left-20 
      top-1/2 -translate-y-1/2 flex items-center gap-2"
      >
        <img src={brainLogo} alt="Genralis brain logo" className="w-10 h-10" />
        <img
          src={genralisText}
          alt="Genralis"
          className="w-32 sm:w-40 h-auto"
        />
      </div>

      {/* Center: takes full width and truly centers content */}
      <div className="w-full flex justify-center">
        {!isMobile ? <Navbar /> : null}
      </div>

      {/* Right: Mobile menu (absolute on small screens only) */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2">
        {isMobile ? <MobileNavBar /> : null}
      </div>
    </header>
  );
};

export default Header;
