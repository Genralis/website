import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../../ui/Button";
import type { EventItem } from "../../types/events";
import { EVENTS } from "../../data/events";
import { formatDateRange } from "../../utils/events";
import { buildICS, downloadICS } from "../../utils/ics";
import { MdArrowBackIosNew } from "react-icons/md";

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // find event
  const event = useMemo<EventItem | undefined>(
    () => EVENTS.find((e) => e.id === id),
    [id]
  );

  if (!event) {
    return (
      <div className="min-h-full w-full flex flex-col items-center justify-center gap-4 py-16">
        <h1 className="text-preset-4 font-medium text-(--heading-text)">
          Event not found
        </h1>
        <Button
          variant="primary"
          width="auto"
          height="41px"
          onClick={() => navigate(-1)}
        >
          Back to Events
        </Button>
      </div>
    );
  }

  const dateText = formatDateRange(event.start, event.end);

  const handleAddToCalendar = () => {
    const ics = buildICS(event);
    downloadICS(event.title.replace(/\s+/g, "-"), ics);
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: `${event.title} — ${dateText} @ ${event.location}`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="min-h-full lg:max-w-6xl mx-auto w-full flex flex-col gap-10 lg:gap-14 mt-10 lg:mt-16">
      {/* Breadcrumbs */}

      <div className="text-left">
        <Button
          variant="icon"
          width="100%"
          height="41px"
          icon={<MdArrowBackIosNew size={24} />}
          onClick={() => navigate(-1)}
        ></Button>
      </div>

      {/* Header  */}
      <header
        className="rounded-[12px] 
      border border-(--container-border) bg-(--container-bg) p-6 md:p-8"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          <div className="flex-1">
            <h1 className="text-preset-7 font-semibold text-(--heading-text)">
              {event.title}
            </h1>
            <div className="mt-3 text-preset-6">
              <div>{dateText}</div>
              <div className="text-(--muted-text)">{event.location}</div>
            </div>

            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {event.tags.map((t) => (
                  <span
                    key={t}
                    className="text-preset-4 px-2 py-1 rounded-[10px] 
                    border border-(--container-border)"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 md:w-1/5 w-full">
            <Button
              variant="primary"
              width="100%"
              height="41px"
              onClick={handleAddToCalendar}
            >
              Add to calendar
            </Button>
            {/* Hook this to your RSVP/registration page if you have it */}
            <Button
              variant="outlined"
              color="var(--heading-text)"
              width="100%"
              height="41px"
              onClick={() => alert("RSVP flow goes here")}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              width="100%"
              height="41px"
              color="var(--heading-text)"
              onClick={handleShare}
            >
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Description */}
        <section
          className="lg:col-span-2 rounded-[12px] 
        border border-(--container-border) bg-(--about-card-bg) p-6 md:p-8"
        >
          <h2 className="text-preset-4 font-medium mb-3">About this event</h2>
          <p className="text-preset-5 text-(--container-text) whitespace-pre-line">
            {event.description ?? "Details coming soon. Check back shortly!"}
          </p>
        </section>

        {/* Side info (you can add organizers, map, etc.) */}
        <aside
          className="space-y-6 rounded-[12px] 
        border border-(--container-border) bg-(--container-bg)] p-6 md:p-8"
        >
          <h3 className="text-preset-4">Quick info</h3>
          <div className="text-preset-6">
            <div className="text-(--muted-text)">When</div>
            <div>{dateText}</div>
          </div>
          <div className="text-preset-6">
            <div className="text-(--muted-text)">Where</div>
            <div>{event.location}</div>
          </div>
          {/* Optional: map embed */}
          {/* <iframe className="mt-2 w-full h-40 rounded-xl border" src="..." loading="lazy" /> */}
        </aside>
      </main>
    </div>
  );
};

export default EventDetailPage;
