import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import ProjectDetailCard from "./components/ProjectDetailCard";
import Button from "../../ui/Button";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const ProjectsPage = () => {
  const [index, setIndex] = useState(0);

  const hasProjects = projects && projects.length > 0;
  const project = useMemo(
    () => (hasProjects ? projects[index] : null),
    [hasProjects, index]
  );

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setIndex((i) => (projects ? Math.min(projects.length - 1, i + 1) : 0));

  return (
    <div className="page-container">
      {projects.length === 0 ? (
        <>
          <div
            className="text-preset-2 text-(--heading-text)
            mx-auto text-center font-semibold"
          >
            No Projects yet
          </div>
          <p
            className="mt-2 text-preset-4 text-(--subheading-text-1)
            mx-auto text-center"
          >
            Please check back later to see the exciting projects our team is
            working on!
          </p>
        </>
      ) : (
        <>
          <header className="w-full mx-auto text-center">
            <h1 className="font-semibold text-preset-7 text-[var(--heading-text)]">
              Projects
            </h1>
            <p className="mt-3 text-preset-3 text-[var(--subheading-text-1)]">
              Explore innovative AI projects developed by our members,
              showcasing their creativity and technical skills.
            </p>
          </header>

          {/* Lists */}
          <section className="lg:max-w-[85%] mx-auto w-full">
            <div className="flex items-center gap-4">
              {/* Prev */}
              <Button
                variant="icon"
                icon={<TfiArrowCircleLeft size={20} />}
                onClick={prev}
                disabled={index === 0}
              />

              {/* Card */}
              <div className="w-full">
                <ProjectDetailCard project={project!} />
                <p className="mt-3 text-center text-preset-4 [color:var(--subheading-text-2)]">
                  {index + 1} / {projects.length}
                </p>
              </div>

              {/* Next */}
              <Button
                onClick={next}
                disabled={index === projects.length - 1}
                variant="icon"
                icon={<TfiArrowCircleRight size={20} />}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
