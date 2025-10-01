import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import { socialMediaLinks } from "../../../constants/socialMediaLinks";

const ReachOutInfo = () => {
  return (
    <aside
      className="space-y-6 rounded-[12px] border border-(--container-border)
         bg-(--container-bg) p-6 md:p-8 h-fit"
    >
      <h2 className="text-preset-3 font-medium">Reach us directly</h2>

      <div className="flex items-center gap-3">
        <MdEmail />
        <a
          href="mailto:genralis@university.edu"
          className="text-preset-5 underline break-all"
        >
          genralis.ai@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-3">
        <FaMapLocationDot />
        <div className="text-preset-5">
          SDH lab, Engineering building
          <br />
          Memorial University of Newfoundland, St. John's
        </div>
      </div>

      <div>
        <ul className="mt-2 flex flex-col gap-3">
          {socialMediaLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-"
              >
                <link.icon size={24} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ReachOutInfo;
