import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="05 / Experience"
        title="Experience that scales beyond code."
        copy="A track record of turning ambiguous product problems into dependable engineering outcomes."
      />

      <div className="mt-12 space-y-4">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[180px_1fr]"
          >
            <p className="text-sm font-semibold text-cyan-300">{item.period}</p>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-slate-400">{item.company}</p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
