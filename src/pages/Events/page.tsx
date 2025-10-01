import { useMemo, useState } from "react";
import { groupByMonth, splitEvents } from "../../utils/events";
import { EVENTS } from "../../data/events";
import TabButton from "./components/TabButton";
import MonthSection from "./components/MonthSection";

const EventsPage = () => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const { upcoming, past } = useMemo(() => splitEvents(EVENTS), []);
  const data = tab === "upcoming" ? upcoming : past;

  return (
    <div className="page-container">
      <header className="w-full mx-auto text-center">
        <h1 className="font-semibold text-preset-7 text-[var(--heading-text)]">
          Events
        </h1>
        <p className="mt-3 text-preset-3 text-[var(--subheading-text-1)]">
          Join workshops, competitions, project showcases, and more.
        </p>
      </header>

      {/* Tabs */}
      <div className="w-full text-center ">
        <div
          className="inline-flex rounded-[12px] 
        border border-(--container-border)
        bg-(--container-bg) p-1"
        >
          <TabButton
            active={tab === "upcoming"}
            onClick={() => setTab("upcoming")}
          >
            Upcoming
          </TabButton>
          <TabButton active={tab === "past"} onClick={() => setTab("past")}>
            Past
          </TabButton>
        </div>
      </div>

      {/* Lists */}
      <section className="lg:max-w-[85%] mx-auto w-full">
        {data.length === 0 ? (
          <>
            <h3 className="text-preset-3 font-medium">
              {tab === "upcoming"
                ? "No upcoming events (yet!)"
                : "No past events to show"}
            </h3>
            <p className="text-preset-6 text-(--muted-text) mt-2">
              {tab === "upcoming"
                ? "Check back soon or subscribe for updates on the Contact page."
                : "Once events wrap up, we'll list them here with slides and recordings."}
            </p>
          </>
        ) : (
          groupByMonth(data).map(([month, items]) => (
            <MonthSection key={month} month={month} items={items} />
          ))
        )}
      </section>
    </div>
  );
};

export default EventsPage;
