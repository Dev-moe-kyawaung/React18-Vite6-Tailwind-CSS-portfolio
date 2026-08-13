import { BadgeCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="07 / Certifications"
        title="Evidence of disciplined practice."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {certifications.map((certification) => (
          <div key={certification} className="glass-card flex items-center gap-3 p-5">
            <BadgeCheck className="shrink-0 text-cyan-300" size={20} aria-hidden="true" />
            <span className="text-sm text-slate-300">{certification}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
