export type TeamMember = {
  name: string;
  role: string;
};

export type Project = {
  id: string | number;
  title: string;
  description: string;
  team: TeamMember[];
  stack: string[];
  github?: string; // optional GitHub repo link
  demo?: string; // optional demo/live link
  media?: string; // optional image or video URL
};
