export type EventItem = {
  id: string;
  title: string;
  start: string; // ISO
  end?: string; // ISO
  location: string;
  description?: string;
  tags?: string[];
  href?: string;
};
