import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { navItems } from "../constants/navItems";

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle menu button handler
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu if user clicks outside it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav ref={menuRef} className="w-fit relative">
        <div
          className="bg-white/90 dark:bg-zinc-800
          text-zinc-800 dark:text-zinc-200 rounded-full
          ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10
          shadow-lg"
        >
          <button
            className="px-4 py-2.5 text-sm font-medium 
            flex items-center justify-center gap-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            Menu
            {isMenuOpen ? (
              <MdOutlineKeyboardArrowUp size={16} />
            ) : (
              <MdOutlineKeyboardArrowDown size={16} />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul
            className="
              absolute top-full right-0 w-[128px]
              bg-white dark:bg-zinc-800
              shadow-lg mt-2 rounded-lg
              flex flex-col items-center space-y-2
              text-zinc-800 dark:text-zinc-200
              py-3
            "
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block px-4 py-2.5 transition cursor-pointer ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default MobileNavBar;
