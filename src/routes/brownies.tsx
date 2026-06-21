import { createFileRoute } from "@tanstack/react-router";
import { flavours } from "@/lib/flavours";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_ORDER_URL, WHATSAPP_PLAIN_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/brownies")({
  head: () => ({
    meta: [
      { title: "Brownies — Grain Crumbs" },
      { name: "description", content: "Six signature millet brownie flavours, baked fresh in Pune. Made with jaggery and couverture chocolate." },
      { property: "og:title", content: "Brownies — Grain Crumbs" },
      { property: "og:description", content: "Explore our six signature millet brownie flavours." },
    ],
  }),
  component: BrowniesPage,
});

function BrowniesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-[color:var(--cream-dark)]/40">
        <div className="container-prose py-20 text-center md:py-28">
          <p className="divider-gold eyebrow">The Menu</p>
          <h1 className="mt-5 font-display text-5xl md:text-6xl">Signature Brownies</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Each flavour starts with our millet-and-jaggery base, then takes a quiet detour.
            Baked fresh to order, never mass produced.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-prose grid gap-10">
          {flavours.map((f, i) => (
            <Reveal key={f.slug} delay={i * 60}>
              <article className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">{`0${i + 1}`}</p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl">{f.name}</h2>
                  <p className="mt-3 italic text-[color:var(--gold)]">{f.tagline}</p>
                  <p className="mt-5 max-w-md text-muted-foreground">{f.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {f.notes.map((n) => (
                      <li key={n} className="rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {n}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">Order this flavour</a>
                    <a href={WHATSAPP_PLAIN_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Ask on WhatsApp</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
