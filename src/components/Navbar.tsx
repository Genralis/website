import { NavLink } from "react-router";
import { navItems } from "../constants/navItems";

const NavBar = () => {
  return (
    <>
      <div className="flex pointer-events-auto w-full justify-center">
        <nav className="">
          <ul
            className="px-3 text-sm font-medium rounded-full
                  text-zinc-800 dark:text-zinc-200 
                  bg-white/90 dark:bg-zinc-800/90
                  ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10
                  shadow-lg flex justify-center space-x-4"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative block px-4 py-2.5 transition cursor-pointer ${
                      isActive
                        ? /* Active styles */
                          `text-teal-500 after:content-[''] after:absolute
                    after:inset-x-1 after:-bottom-px after:h-[2px]
                    after:bg-gradient-to-r after:from-teal-500/0 
                    after:via-teal-500/40 after:to-teal-500/0`
                        : /* Inactive (hover) styles */
                          `hover:text-teal-500`
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
