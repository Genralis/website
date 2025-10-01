import { useContext } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleTheme();
    event.currentTarget.blur();
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="w-fit px-3 py-2
        cursor-pointer 
        bg-white/90 dark:bg-zinc-800/90
        flex items-center
        ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 
        shadow-lg rounded-full 
        text-sm text-zinc-800 dark:text-teal-500"
        aria-label="Toggle Theme"
        onClick={handleClick}
      >
        {!isDarkMode ? (
          <span className="material-symbols-outlined">
            <MdOutlineLightMode size={20} />
          </span>
        ) : (
          <span className="material-symbols-outlined">
            <MdOutlineDarkMode size={20} />
          </span>
        )}
      </button>
    </div>
  );
};

export default Theme;
