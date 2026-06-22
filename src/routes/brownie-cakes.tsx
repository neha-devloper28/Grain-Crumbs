import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Sparkles, MessageSquare, Image as ImageIcon } from "lucide-react";
import birthdayGoldAsset from "@/assets/cake-birthday-gold.png.asset.json";
import butterflyAsset from "@/assets/cake-butterfly.png.asset.json";
import walnutBirthdayAsset from "@/assets/cake-walnut-birthday.png.asset.json";
import heartsMomAsset from "@/assets/cake-hearts-mom.png.asset.json";
import congratsAsset from "@/assets/cake-congratulations.png.asset.json";
import fathersDayAsset from "@/assets/cake-fathers-day.png.asset.json";
import fathersOreoAsset from "@/assets/cake-fathers-oreo.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_ORDER_URL } from "@/lib/whatsapp";

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
  { img: walnutBirthdayAsset.url, title: "Birthdays", caption: "Walnut & chocolate, hand-piped." },
  { img: heartsMomAsset.url, title: "For Mom", caption: "Personalised, heart-detailed." },
  { img: fathersDayAsset.url, title: "Father's Day", caption: "Coconut snow, gold hearts." },
  { img: congratsAsset.url, title: "Congratulations", caption: "For the big wins." },
  { img: fathersOreoAsset.url, title: "Anniversaries", caption: "Oreo crowned, gold-leafed." },
  { img: butterflyAsset.url, title: "Celebrations", caption: "Butterfly-detailed, signature." },
];

const customisation = [
  { icon: MessageSquare, title: "Cake Message", text: "Personalise your cake with a hand-piped message." },
  { icon: Sparkles, title: "Theme Request", text: "Floral, minimal, gold-leaf — tell us your mood." },
  { icon: ImageIcon, title: "Reference Image", text: "Send a picture and we'll interpret it our way." },
  { icon: Cake, title: "Sizes 500g – 2kg", text: "Right-sized for an intimate moment or a full table." },
];

// Coherent treatment applied to every uploaded photo
const photoTreatment = "h-full w-full object-cover saturate-[0.92] contrast-[1.05] brightness-[0.98]";

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
              <Link to="/order" className="btn-primary w-full sm:w-auto">Customise Your Cake</Link>
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Chat on WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--gold)]/30 shadow-[0_30px_80px_-30px_rgba(60,30,10,0.45)]">
              <img src={birthdayGoldAsset.url} alt="Grain Crumbs gold-leaf birthday brownie cake" width={1200} height={1500} className={photoTreatment} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--chocolate-dark)]/20 via-transparent to-transparent" />
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
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">For every occasion</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Reasons to celebrate.</h2>
            <p className="mt-4 text-muted-foreground">A glimpse of cakes we've baked for our community.</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={i * 70}>
                <figure className="group relative overflow-hidden rounded-[1.75rem] ring-1 ring-[color:var(--gold)]/25 shadow-[0_20px_50px_-25px_rgba(60,30,10,0.4)]">
                  <div className="aspect-[4/5] overflow-hidden bg-[color:var(--chocolate-dark)]">
                    <img
                      src={o.img}
                      alt={`${o.title} — Grain Crumbs brownie cake`}
                      loading="lazy"
                      width={900}
                      height={1125}
                      className={`${photoTreatment} transition duration-700 group-hover:scale-[1.03]`}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--chocolate-dark)]/85 via-[color:var(--chocolate-dark)]/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[color:var(--cream)]">
                    <p className="font-display text-2xl">{o.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--cream)]/80">{o.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
