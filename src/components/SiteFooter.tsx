import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { WHATSAPP_ORDER_URL } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-[color:var(--cream-dark)] text-foreground">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
            <div>
              <p className="font-display text-2xl">Grain Crumbs</p>
              <p className="text-[11px] tracking-[0.3em] text-muted-foreground">
                BROWNIE · SPONGE CAKE · CUPCAKE
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Premium millet brownies, baked fresh in Pune. Made with ragi, foxtail millet,
            oats & buckwheat. Sweetened with jaggery. Crafted with premium couverture chocolate.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/brownies" className="underline-link">Brownies</Link></li>
            <li><Link to="/brownie-cakes" className="underline-link">Brownie Cakes</Link></li>
            <li><Link to="/gifting" className="underline-link">Gifting</Link></li>
            <li><Link to="/about" className="underline-link">Our Story</Link></li>
            <li><a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="underline-link">Order Now</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Visit · Connect</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              Kharadi, Pune
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href="tel:+918208257574" className="underline-link">+91 82082 57574</a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href="https://instagram.com/graincrumbs" target="_blank" rel="noreferrer" className="underline-link">
                @graincrumbs
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href="mailto:hello@graincrumbs.in" className="underline-link">hello@graincrumbs.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Grain Crumbs. Handcrafted in Pune.</p>
          <div className="flex items-center gap-4">
            <Link to="/admin/login" className="tracking-[0.25em] uppercase hover:text-foreground">Admin</Link>
            <p className="tracking-[0.25em] uppercase">Made differently · loved deeply</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
