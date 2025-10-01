import { useMemo, useState } from "react";
import { groupByMonth, splitEvents } from "../../utils/events";
import { EVENTS } from "../../data/events";
import EmptyState from "./components/EmptyState";
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
          <EmptyState tab={tab} />
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
