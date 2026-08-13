import SectionHeading from "../ui/SectionHeading";
import { publications } from "../../data/portfolio";

export default function Publications() {
  return (
    <section id="publications" className="section-shell scroll-mt-20">
      <SectionHeading eyebrow="08 / Publications" title="Sharing useful engineering knowledge." />

      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-semibold text-white">{publication.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{publication.outlet}</p>
            </div>
            <span className="text-sm text-cyan-300">{publication.year}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
