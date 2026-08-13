import { GraduationCap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-20">
      <SectionHeading eyebrow="06 / Education" title="Foundations for continuous learning." />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.institution} className="glass-card p-6">
            <GraduationCap className="text-cyan-300" aria-hidden="true" />
            <p className="mt-6 text-sm text-cyan-200">{item.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">
              {item.institution}
            </h3>
            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
