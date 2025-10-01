import { EVENTS } from "../data/events";
import type { EventItem } from "../types/events";

export const byStartAsc = (a: EventItem, b: EventItem) =>
  new Date(a.start).getTime() - new Date(b.start).getTime();

export const byStartDesc = (a: EventItem, b: EventItem) =>
  new Date(b.start).getTime() - new Date(a.start).getTime();

export function nextUpcoming(): EventItem | null {
  const nowT = Date.now();
  const upcoming = EVENTS.filter(
    (e) => new Date(e.start).getTime() >= nowT
  ).sort(byStartAsc);
  return upcoming[0] ?? null;
}

export function formatDateRange(startISO: string, endISO?: string) {
  const s = new Date(startISO);
  const e = endISO ? new Date(endISO) : null;

  const date = s.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const sTime = s.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const eTime = e
    ? e.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
    : null;

  return eTime ? `${date} • ${sTime}-${eTime}` : `${date} • ${sTime}`;
}

// Group by "Month YYYY" for nicer scanning
export function groupByMonth(events: EventItem[]) {
  const map = new Map<string, EventItem[]>();
  for (const ev of events) {
    const d = new Date(ev.start);
    const key = d.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    });
    const arr = map.get(key) ?? [];
    arr.push(ev);
    map.set(key, arr);
  }
  return Array.from(map.entries());
}

export function splitEvents(items: EventItem[]) {
  const now = new Date();
  const t = now.getTime();
  const upcoming: EventItem[] = [];
  const past: EventItem[] = [];
  for (const ev of items) {
    const startT = new Date(ev.start).getTime();
    if (startT >= t) upcoming.push(ev);
    else past.push(ev);
  }
  return {
    upcoming: upcoming.sort(byStartAsc),
    past: past.sort(byStartDesc),
  };
}
