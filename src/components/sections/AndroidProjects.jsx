import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { androidProjects } from "../../data/portfolio";

export default function AndroidProjects() {
  return (
    <section id="android-projects" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="02 / Android"
        title="Mobile products built for trust."
        copy="Secure, testable Android applications built around strong architecture and polished user experiences."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {androidProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
