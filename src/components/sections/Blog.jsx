import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { blogPosts } from "../../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="section-shell scroll-mt-20">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="13 / Blog"
          title="Notes from the build process."
        />
        <Button to="/blog" variant="secondary">
          View all posts <ArrowUpRight className="ml-2" size={17} />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass-card p-6">
            <p className="text-xs uppercase tracking-widest text-cyan-300">
              {post.readTime}
            </p>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              {post.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-400">{post.excerpt}</p>
            <a
              href={`/blog#${post.slug}`}
              className="focus-ring mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Read article <ArrowUpRight className="ml-1" size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
