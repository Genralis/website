import MobileNavBar from "./MobileNavbar";
import newLogo from "../assets/images/newLogo.svg";
import Navbar from "./Navbar";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile(950); // sm breakpoint

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
      flex  justify-center items-center gap-2"
      >
        <img
          src={newLogo}
          alt="Genralis logo"
          className="w-12 h-12 object-contain"
        />
        {/* <img
          src={genralisText}
          alt="Genralis"
          className="w-32 sm:w-40 h-auto"
        /> */}
        {<span className="text-3xl font-[450] font-monserrat">GENRALIS</span>}
      </div>

      {/* Center: takes full width and truly centers content */}
      <div className="w-full flex justify-center">
        {!isMobile ? <Navbar /> : null}
      </div>

      {/* Right: Mobile menu (absolute on small screens only) */}
      <div className="absolute right-5 sm:right-8">
        {isMobile ? <MobileNavBar /> : null}
      </div>
    </header>
  );
};

export default Header;
