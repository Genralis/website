import { socialMediaLinks } from "../../../constants/socialMediaLinks";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const HomePageFooter = () => {
  return (
    <>
      <footer
        className="text-(--muted-text) text-preset-6
      border-t border-(--container-border) py-6"
      >
        <div
          className="w-full lg:w-4/5 max-w-8xl mx-auto
                  px-5 
                  flex flex-col md:flex-row items-center 
                  justify-between gap-4"
        >
          <div className="">
            <ul className="w-full mt-2 flex justify-start items-center gap-4">
              {socialMediaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <link.icon size={24} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <MdEmail size={"1.5rem"} />
              <a
                href="mailto:genralis@university.edu"
                className="text-preset-5 underline"
              >
                genralis.ai@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapLocationDot size={"1.5rem"} />
              <div className="text-preset-5 no-word-break">
                SDH lab, Engineering building
                <br />
                Memorial University of Newfoundland, St. John's
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePageFooter;
