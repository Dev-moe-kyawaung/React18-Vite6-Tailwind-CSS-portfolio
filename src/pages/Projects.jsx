import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import { androidProjects, fullStackProjects } from "../data/portfolio";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Moe Kyaw Aung</title>
        <meta
          name="description"
          content="Selected Android and full-stack software projects by Moe Kyaw Aung."
        />
      </Helmet>

      <section className="section-shell pt-36">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built with purpose."
          copy="A selection of mobile and web engineering work. Replace the placeholder links and project descriptions with verified project details before publishing."
        />

        <h2 className="mt-16 font-display text-2xl font-semibold text-white">
          Android projects
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {androidProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <h2 className="mt-20 font-display text-2xl font-semibold text-white">
          Full-stack projects
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
