import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="glass-card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mb-8 flex items-center justify-between">
        <span className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs font-semibold text-cyan-200">
          {project.type}
        </span>
        <a
          className="focus-ring rounded-full p-2 text-slate-400 transition group-hover:text-cyan-300"
          href={project.link}
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>

      <h3 className="font-display text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
