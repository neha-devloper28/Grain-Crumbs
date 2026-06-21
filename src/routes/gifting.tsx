import { createFileRoute, Link } from "@tanstack/react-router";
import { Gift, Building2, HeartHandshake, Sparkles, Package } from "lucide-react";
import gifting from "@/assets/gifting.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Gifting — Grain Crumbs" },
      { name: "description", content: "Premium brownie gift boxes and corporate hampers. Personalised, beautifully packaged, delivered across Pune." },
      { property: "og:title", content: "Gifting — Grain Crumbs" },
      { property: "og:description", content: "Premium brownie hampers, personalised and beautifully packaged." },
    ],
  }),
  component: Page,
});

const useCases = [
  { icon: Gift, title: "Birthdays", text: "Make the day a little softer — and a lot more chocolatey." },
  { icon: Building2, title: "Office Gifting", text: "Curated hampers for colleagues, clients and partners." },
  { icon: HeartHandshake, title: "Return Gifts", text: "A keepsake your guests will actually remember." },
  { icon: Sparkles, title: "Thank You Gifts", text: "Small gestures, beautifully delivered." },
  { icon: Package, title: "Festive Hampers", text: "Seasonal collections — limited and thoughtful." },
];

function Page() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="divider-gold eyebrow">Gifting</p>
            <h1 className="mt-5 font-display text-5xl md:text-6xl">
              Thoughtful gifting,
              <span className="block italic text-[color:var(--chocolate)]"> beautifully made.</span>
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Curated brownie hampers for the people you care about — and the people
              you want to impress. Personalised notes, premium packaging, delivered
              across Pune.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/order" className="btn-primary">Request a Quote</Link>
              <a href="https://wa.me/918208257574" className="btn-outline">WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={gifting} alt="Premium brownie gift box" width={1400} height={1400} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Perfect for</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Every kind of occasion.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="card-warm h-full p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream-dark)] text-[color:var(--chocolate)] ring-1 ring-[color:var(--gold)]/40">
                    <u.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--chocolate-dark)] text-[color:var(--cream)]">
        <div className="container-prose grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Corporate gifting</p>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--cream)] md:text-5xl">
              For 10 boxes — or 500.
            </h2>
            <p className="mt-5 max-w-md text-[color:var(--cream)]/80">
              Branded sleeves, custom flavours, scheduled deliveries. Tell us your
              brief and we'll put together a sample plus a quote within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/order" search={{ type: "Bulk / Corporate Order" } as never} className="btn-gold">
                Request a Quote
              </Link>
              <a href="mailto:hello@graincrumbs.in" className="btn-outline border-[color:var(--cream)]/40 text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--chocolate-dark)]">
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
