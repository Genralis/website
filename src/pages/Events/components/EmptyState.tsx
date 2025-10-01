const EmptyState = ({ tab }: { tab: "upcoming" | "past" }) => (
  <div
    className="rounded-[12px] border border-(--container-border)
               bg-(--container-bg) text-(--container-text)
               p-8 text-center"
  >
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
  </div>
);

export default EmptyState;
