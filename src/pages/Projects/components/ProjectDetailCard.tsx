type TeamMember = { name: string; role: string };
type Project = {
  id: number | string;
  title: string;
  description: string;
  team: TeamMember[];
  stack: string[];
  github?: string;
  demo?: string;
  media?: string; // image or video URL
};

const ProjectDetailCard = ({ project }: { project: Project }) => {
  const isVideo =
    project.media?.endsWith(".mp4") || project.media?.endsWith(".webm");

  return (
    <article
      className="rounded-2xl ring-1 ring-[var(--divider)] overflow-hidden bg-white"
      role="region"
      aria-label={`Project: ${project.title}`}
    >
      {/* Media */}
      {project.media ? (
        <div className="w-full aspect-[16/9] bg-[var(--nav-item-bg-active)]">
          {isVideo ? (
            <video
              src={project.media}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.media}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ) : null}

      {/* Body */}
      <div className="p-6 lg:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-preset-1 [color:var(--heading-text)]">
            {project.title}
          </h2>
          <p className="text-preset-4 [color:var(--subheading-text-1)]">
            {project.description}
          </p>
        </div>

        {/* Meta rows */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team */}
          <div>
            <h3 className="text-preset-4 font-semibold [color:var(--subheading-text-2)]">
              Team
            </h3>
            <ul className="mt-2 space-y-1">
              {project.team.map((m, i) => (
                <li
                  key={i}
                  className="text-preset-5 [color:var(--body-text-1)]"
                >
                  <span className="font-medium">{m.name}</span>
                  <span className="opacity-70"> — {m.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h3 className="text-preset-4 font-semibold [color:var(--subheading-text-2)]">
              Stack
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((t, i) => (
                <span
                  key={i}
                  className="text-preset-6 px-2.5 py-1 rounded-full ring-1 ring-[var(--divider)] bg-[var(--nav-item-bg-active)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-preset-4 font-semibold [color:var(--subheading-text-2)]">
              Links
            </h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-preset-5 underline hover:opacity-80"
                >
                  GitHub
                </a>
              ) : (
                <span className="text-preset-6 opacity-60">No repo</span>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-preset-5 underline hover:opacity-80"
                >
                  Demo
                </a>
              ) : (
                <span className="text-preset-6 opacity-60">No demo</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetailCard;
