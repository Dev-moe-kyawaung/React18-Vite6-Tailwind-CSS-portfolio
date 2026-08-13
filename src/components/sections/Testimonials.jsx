import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell scroll-mt-20">
      <SectionHeading eyebrow="10 / Testimonials" title="What collaborators say." />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="glass-card p-7">
            <Quote className="text-cyan-300" size={28} aria-hidden="true" />
            <blockquote className="mt-6 text-lg leading-8 text-slate-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-slate-400">
              <span className="font-semibold text-white">{testimonial.name}</span>
              <span className="mx-2">·</span>
              {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
