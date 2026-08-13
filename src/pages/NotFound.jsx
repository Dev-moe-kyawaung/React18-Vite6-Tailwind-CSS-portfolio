import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-20 text-center">
      <div>
        <p className="eyebrow">404 / Not found</p>
        <h1 className="font-display text-5xl font-bold text-white">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-slate-400">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="focus-ring mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
