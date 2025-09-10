import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
    isActive
      ? "text-foreground bg-secondary"
      : "text-foreground/80 hover:text-foreground hover:bg-secondary hover:-translate-y-0.5",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-primary" />
          <span className="text-lg font-bold tracking-wide">MODERNO</span>
        </Link>

        <nav className="hidden gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Меню
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            О нас
          </NavLink>
          <NavLink to="/reserve" className={navLinkClass}>
            Резерв
          </NavLink>
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
          >
            Забронировать стол
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 transition-transform active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-6 bg-foreground mb-1" />
          <span className="block h-0.5 w-6 bg-foreground mb-1" />
          <span className="block h-0.5 w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="container grid gap-1 py-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)} end>
              Меню
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
              О нас
            </NavLink>
            <NavLink to="/reserve" className={navLinkClass} onClick={() => setOpen(false)}>
              Резерв
            </NavLink>
            <Link
              to="/reserve"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 active:scale-95"
            >
              Забронировать стол
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
