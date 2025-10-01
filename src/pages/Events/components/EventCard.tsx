import { useNavigate } from "react-router";
import Button from "../../../ui/Button";
import { formatDateRange } from "../../../utils/events";
import type { EventItem } from "../../../types/events";

const EventCard = ({ event }: { event: EventItem }) => {
  const navigate = useNavigate();
  const dateText = formatDateRange(event.start, event.end);

  const onView = () => {
    if (event.href) navigate(event.href);
  };

  return (
    <article
      className="rounded-[12px] border border-(--container-border)
                 bg-(--container-card-bg) text-(--container-text)
                 p-5 flex flex-col gap-3 w-full h-full"
    >
      {/* Date badge */}
      <div
        className="inline-block text-preset-6 px-2 py-1 rounded-[8px] 
      border border-(--container-border) bg-(--input-field-hover-bg)"
      >
        {dateText}
      </div>

      <h3 className="text-preset-3 font-medium">{event.title}</h3>

      {event.description && (
        <p className="text-preset-6 text-(--subheading-text-1)">
          {event.description}
        </p>
      )}

      <div className="text-preset-6 text-(--muted-text)">{event.location}</div>

      {event.tags && event.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {event.tags.map((t) => (
            <span
              key={t}
              className="text-preset-6 px-2 py-0.5 rounded-[12px]
               border border-(--container-border)"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-2">
        <Button
          variant="outlined"
          color="var(--heading-text)"
          onClick={onView}
          disabled={!event.href}
        >
          {event.href ? "View details" : "Details soon"}
        </Button>
      </div>
    </article>
  );
};

export default EventCard;
