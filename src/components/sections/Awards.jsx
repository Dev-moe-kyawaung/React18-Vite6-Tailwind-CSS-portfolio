import { Trophy } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { awards } from "../../data/portfolio";

export default function Awards() {
  return (
    <section id="awards" className="section-shell scroll-mt-20">
      <SectionHeading eyebrow="09 / Awards" title="Recognition for meaningful impact." />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {awards.map((award) => (
          <article key={award} className="glass-card p-6">
            <Trophy className="text-cyan-300" aria-hidden="true" />
            <h3 className="mt-6 font-semibold leading-7 text-white">{award}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
