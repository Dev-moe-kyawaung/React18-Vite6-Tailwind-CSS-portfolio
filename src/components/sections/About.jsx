import { ShieldCheck, Sparkles, Workflow } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/portfolio";

const principles = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    text: "Security and privacy are considered from architecture through delivery."
  },
  {
    icon: Sparkles,
    title: "Crafted experiences",
    text: "Interfaces should feel fast, clear, inclusive, and intentional."
  },
  {
    icon: Workflow,
    title: "Reliable systems",
    text: "Maintainable code and automation create confidence at every release."
  }
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeading
        eyebrow="01 / About"
        title="Engineering with a human perspective."
        copy="I combine deep mobile expertise with modern web engineering to help teams ship useful, resilient products."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="space-y-5 text-slate-400">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <Reveal key={title}>
              <article className="glass-card h-full p-5">
                <Icon className="text-cyan-300" size={24} aria-hidden="true" />
                <h3 className="mt-6 font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
