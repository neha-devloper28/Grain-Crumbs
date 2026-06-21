import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/brownies", label: "Brownies" },
  { to: "/brownie-cakes", label: "Brownie Cakes" },
  { to: "/gifting", label: "Gifting" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Grain Crumbs home">
          <img
            src={logo.url}
            alt="Grain Crumbs"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-lg leading-none tracking-wide">
              Grain Crumbs
            </span>
            <span className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground">
              MILLET BROWNIES · PUNE
            </span>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="underline-link text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918208257574"
            className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            +91 82082 57574
          </a>
          <Link to="/order" className="btn-gold hidden sm:inline-flex">
            Order Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="container-prose flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                activeProps={{ className: "bg-muted" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/order" onClick={() => setOpen(false)} className="btn-gold mt-3">
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
