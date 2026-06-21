import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Sparkles, MessageSquare, Image as ImageIcon } from "lucide-react";
import cake from "@/assets/brownie-cake.jpg";
import walnut from "@/assets/brownie-chocolate-walnut.jpg";
import berry from "@/assets/brownie-berry.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/brownie-cakes")({
  head: () => ({
    meta: [
      { title: "Brownie Cakes — Grain Crumbs" },
      { name: "description", content: "Custom millet brownie celebration cakes for birthdays, anniversaries and special occasions across Pune." },
      { property: "og:title", content: "Brownie Cakes — Grain Crumbs" },
      { property: "og:description", content: "Custom millet brownie cakes for every celebration." },
    ],
  }),
  component: Page,
});

const occasions = [
  "Birthdays", "Anniversaries", "Promotions", "Baby Showers",
  "Father's Day", "Mother's Day", "Engagements", "Office Celebrations",
];

const customisation = [
  { icon: MessageSquare, title: "Cake Message", text: "Personalise your cake with a hand-piped message." },
  { icon: Sparkles, title: "Theme Request", text: "Floral, minimal, gold-leaf — tell us your mood." },
  { icon: ImageIcon, title: "Reference Image", text: "Send a picture and we'll interpret it our way." },
  { icon: Cake, title: "Sizes 500g – 2kg", text: "Right-sized for an intimate moment or a full table." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <Reveal>
            <p className="divider-gold eyebrow">Brownie Cakes</p>
            <h1 className="mt-5 font-display text-5xl md:text-6xl">
              Cakes that taste like
              <span className="italic text-[color:var(--chocolate)]"> brownies.</span>
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Birthdays. Anniversaries. Promotions. Baby showers. Celebrate with a brownie
              cake that's rich, indulgent and thoughtfully made — without a grain of maida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">Customise Your Cake</a>
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Chat on WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={cake} alt="Premium brownie cake" width={1200} height={1600} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Customise yours</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Made the way you want it.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customisation.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card-warm h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--cream-dark)] text-[color:var(--chocolate)] ring-1 ring-[color:var(--gold)]/40">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--cream-dark)]/40">
        <div className="container-prose">
          <Reveal className="grid items-end gap-4 md:flex md:justify-between">
            <div>
              <p className="eyebrow">For every occasion</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Reasons to celebrate.</h2>
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-10 flex flex-wrap gap-3">
            {occasions.map((o) => (
              <span key={o} className="rounded-full border border-[color:var(--gold)]/40 bg-card px-5 py-2.5 text-sm">
                {o}
              </span>
            ))}
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={walnut} alt="Brownie cake stack" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={berry} alt="Mixed berry brownie" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
