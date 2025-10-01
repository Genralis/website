import { aboutCardsList } from "../../constants/aboutCardsList";
import { nextUpcoming } from "../../utils/events";
import AboutCard from "./components/AboutCard";
import EventCard from "../Events/components/EventCard";
import HomePageFooter from "./components/HomePageFooter";
import SubscribeBox from "../Contact/components/SubscribeBox";

const HomePage = () => {
  const upcoming = nextUpcoming();

  return (
    <>
      <div
        className="min-h-full w-full my-10 lg:my-20
      flex flex-col gap-10 justify-center items-center"
      >
        {/* heading and tagline */}
        <div
          className="text-center mx-auto flex flex-col justify-center 
          max-w-3xl gap-12 my-10 lg:my-20"
        >
          <h1 className="text-preset-7 text-(--heading-text)">
            Welcome to <span>Genralis</span>
          </h1>

          <p className="text-(--subheading-text-1) text-preset-2 font-semibold">
            Empowering students through AI innovation, project collaboration,
            and competitive excellence.
          </p>

          <p className="text-(--subheading-text-1) text-preset-2 font-semibold">
            Genralis is an AI innovation club where students collaborate on
            groundbreaking projects, participate in competitions, and build a
            vibrant community of AI enthusiasts. We focus on practical AI
            applications, machine learning projects, and fostering the next
            generation of AI innovators.
          </p>
        </div>

        {/* about cards */}
        <div className="bg-(--secondary-bg) w-full py-10 lg:py-20">
          <div
            className="grid gap-10 items-stretch w-4/5 max-w-8xl
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          auto-rows-fr mx-auto
          "
          >
            {aboutCardsList.map((item) => {
              return <AboutCard item={item} key={item.label} />;
            })}
          </div>
        </div>

        {/* Left: vertically centered by using full height + justify-center */}
        <div
          className=" 
          flex flex-col lg:flex-row gap-20 justify-center items-center
          text-center w-full max-w-[90%] lg:max-w-7xl "
        >
          {/* Upcoming + Join row */}

          <div className="flex-1 flex flex-col gap-6">
            <div className="text-preset-2 text-(--muted-text)">
              Upcoming event
            </div>
            {upcoming ? (
              <EventCard event={upcoming} />
            ) : (
              <div
                className="flex-1 rounded-[12px] border border-(--container-border)
                       bg-(--container-bg) text-[var(--container-text)
                       p-4 sm:p-5"
              >
                <h3 className="text-preset-3 font-medium">
                  No event announced yet
                </h3>
                <p className="text-preset-6 text-(--muted-text) mt-1">
                  Check our Events page or subscribe on the Contact page.
                </p>
              </div>
            )}
          </div>

          <div className="flex-1">
            <SubscribeBox />
          </div>
        </div>
      </div>

      <HomePageFooter />
    </>
  );
};

export default HomePage;
