import { Mail, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { profile } from "../../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <div className="glass-card grid gap-10 p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="12 / Contact"
            title="Have a thoughtful project in mind?"
            copy="Tell me what you are building, where you are stuck, and what a successful outcome looks like."
          />
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring mt-8 inline-flex items-center gap-3 text-cyan-300 hover:text-cyan-200"
          >
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <form
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
          className="grid gap-5"
        >
          <label className="grid gap-2 text-sm text-slate-300">
            Name
            <input
              required
              name="name"
              className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-300">
            Email
            <input
              required
              type="email"
              name="email"
              className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-300">
            Message
            <textarea
              required
              name="message"
              rows="5"
              className="focus-ring resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-600"
              placeholder="Tell me about your project"
            />
          </label>

          <Button type="submit">
            Send message <Send className="ml-2" size={17} aria-hidden="true" />
          </Button>
        </form>
      </div>
    </section>
  );
}
