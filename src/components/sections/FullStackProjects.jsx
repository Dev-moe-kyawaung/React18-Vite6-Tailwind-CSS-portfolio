import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { fullStackProjects } from "../../data/portfolio";

export default function FullStackProjects() {
  return (
    <section id="full-stack-projects" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="03 / Full-stack"
        title="Web platforms with momentum."
        copy="Fast, accessible, and maintainable web products using modern React and TypeScript workflows."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {fullStackProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
