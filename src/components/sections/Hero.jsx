import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Button from "../ui/Button";
import { profile } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:42px_42px]" />
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-sm text-emerald-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            {profile.availability}
          </div>

          <p className="eyebrow">Senior software engineer</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Building digital products with{" "}
            <span className="text-cyan-300">clarity</span> and craft.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/projects">
              Explore projects <ArrowUpRight className="ml-2" size={18} />
            </Button>
            <Button href="#contact" variant="secondary">
              Start a conversation
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-card relative aspect-square overflow-hidden p-5">
            <div className="absolute inset-5 rounded-2xl border border-cyan-300/20" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="relative grid h-full place-items-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-300/5">
              <span className="font-display text-8xl font-bold text-white/90">
                M<span className="text-cyan-300">K</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
