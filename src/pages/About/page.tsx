import PageHeading from "../../components/PageHeading";
import { aboutCardsList } from "../../constants/aboutCardsList";
import type { IconType } from "react-icons";

const AboutPage = () => {
  return (
    <>
      {/* Left: vertically centered by using full height + justify-center */}
      <div className="page-container">
        {/* heading and tagline */}
        <PageHeading
          heading="About Genralis"
          subheading="Empowering students through AI innovation."
          description="Genralis is an AI innovation club where students collaborate on groundbreaking projects, participate in competitions, and build a vibrant community of AI enthusiasts."
        />

        {/* about cards */}
        <div
          className="grid w-full gap-4 items-stretch
    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    auto-rows-fr mx-auto
        "
        >
          {aboutCardsList.map((item) => {
            return <AboutCard item={item} key={item.label} />;
          })}
        </div>
      </div>
    </>
  );
};

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

export default AboutPage;
