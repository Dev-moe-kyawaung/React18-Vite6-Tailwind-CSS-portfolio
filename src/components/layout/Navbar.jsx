import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          to="/"
          className="focus-ring font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          MKA<span className="text-cyan-300">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring text-sm transition ${
                  isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-ink px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-shell flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring text-slate-300 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
