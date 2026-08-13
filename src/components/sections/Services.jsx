import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="11 / Services"
        title="How I can help your team."
        copy="Focused engineering support for products that need stronger foundations, better delivery, or a polished interface."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="glass-card p-7">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-bold text-cyan-300/70">
                0{index + 1}
              </span>
              <ArrowUpRight className="text-slate-500" aria-hidden="true" />
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
