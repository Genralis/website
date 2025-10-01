import type { EventItem } from "../../../types/events";
import EventCard from "./EventCard";

const MonthSection = ({
  month,
  items,
}: {
  month: string;
  items: EventItem[];
}) => (
  <div className="mb-8">
    <h2 className="text-preset-4 font-medium text-[var(--heading-text)] mb-3">
      {month}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  </div>
);

export default MonthSection;
