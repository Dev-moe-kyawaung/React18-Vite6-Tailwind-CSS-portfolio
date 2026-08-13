import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Designing, building, and shipping better software.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            className="focus-ring rounded-full p-2 text-slate-400 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={profile.socials.linkedin}
            className="focus-ring rounded-full p-2 text-slate-400 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a
            href="#"
            className="focus-ring rounded-full p-2 text-slate-400 hover:text-cyan-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
