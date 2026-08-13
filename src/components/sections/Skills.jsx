import SectionHeading from "../ui/SectionHeading";
import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="04 / Skills"
        title="A versatile engineering toolkit."
        copy="Tools and technologies I use to design, build, secure, and ship production software."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
