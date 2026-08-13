import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import { blogPosts } from "../data/portfolio";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Moe Kyaw Aung</title>
        <meta
          name="description"
          content="Engineering notes on Android development, React, security, and performance."
        />
      </Helmet>

      <section className="section-shell pt-36">
        <SectionHeading
          eyebrow="Writing"
          title="Engineering notes."
          copy="Short, practical notes about building secure Android applications and modern web experiences."
        />

        <div className="mt-12 space-y-5">
          {blogPosts.map((post) => (
            <article id={post.slug} key={post.slug} className="glass-card p-7">
              <p className="text-sm text-cyan-300">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                {post.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
