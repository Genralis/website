import type { IconType } from "react-icons";

const AboutCard = ({
  item,
}: {
  item: { label: string; icon: IconType; description: string };
}) => {
  return (
    <div
      className="
        group rounded-[20px] border border-(--container-border)
        bg-(--about-card-bg) text-(--about-card-text)
        hover:bg-(--about-card-bg-hover) hover:text-(--about-card-text-hover)
        min-h-44 sm:min-h-48 md:min-h-56
        flex flex-col items-center justify-center text-center gap-3
        p-6 transition-transform duration-200 hover:-translate-y-0.5
        cursor-pointer 
      "
    >
      <item.icon size={28} />
      <h3 className="text-preset-2">{item.label}</h3>
      <p className="text-preset-5">{item.description}</p>
    </div>
  );
};

export default AboutCard;
