import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wheat,
  Sparkles,
  Cookie,
  Ban,
  Leaf,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";
import hero from "@/assets/hero-brownie.jpg";
import cakeImg from "@/assets/brownie-cake.jpg";
import founderImg from "@/assets/founder.jpg";
import giftingImg from "@/assets/gifting.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { Reveal } from "@/components/Reveal";
import { flavours } from "@/lib/flavours";
import { WHATSAPP_ORDER_URL, WHATSAPP_PLAIN_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grain Crumbs — Millet Brownies. Crafted Differently." },
      {
        name: "description",
        content:
          "Premium millet brownies from Pune. Made with ragi, foxtail millet, oats & buckwheat — sweetened with jaggery, finished with couverture chocolate.",
      },
      { property: "og:title", content: "Grain Crumbs — Millet Brownies" },
      {
        property: "og:description",
        content: "Better ingredients. Real indulgence. Brownies made differently.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Collections />
      <Flavours />
      <BrownieCakes />
      <ComparisonTable />
      <Story />
      <Reviews />
      <Gifting />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grain absolute inset-0 opacity-60" aria-hidden />
      <div className="container-prose relative grid items-center gap-10 pt-12 pb-16 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
        <div>
          <Reveal>
            <p className="divider-gold eyebrow">Pune · Made fresh</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-[clamp(2.1rem,8vw,4.75rem)] leading-[1.05] tracking-tight md:mt-6">
              Brownies made
              <span className="italic text-[color:var(--chocolate)]"> differently</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
              Made with <em className="not-italic font-medium text-foreground">Ragi, Foxtail Millet,
              Oats & Buckwheat.</em> Sweetened with jaggery. Crafted with premium couverture chocolate.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap md:mt-9">
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
                Order Now <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/brownies" className="btn-outline w-full sm:w-auto">View Menu</Link>
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Request a Quote</a>
              <Link to="/brownie-cakes" className="btn-outline w-full sm:w-auto">Customise Your Cake</Link>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-8 text-sm">
              <div>
                <dt className="text-muted-foreground">Ingredients</dt>
                <dd className="mt-1 font-display text-xl">100% Millet</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Sweetener</dt>
                <dd className="mt-1 font-display text-xl">Jaggery</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Chocolate</dt>
                <dd className="mt-1 font-display text-xl">Couverture</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[color:var(--cream-dark)] shadow-[var(--shadow-warm)]">
            <img
              src={hero}
              alt="Grain Crumbs signature chocolate walnut brownie"
              width={1600}
              height={2000}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/30" />
          </div>
          <div className="absolute -left-6 -bottom-6 hidden w-56 rotate-[-4deg] rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--gold)]/30 md:block">
            <p className="eyebrow">A mother's recipe</p>
            <p className="mt-2 font-display text-lg leading-snug">
              "Started for my toddler. Loved by everyone."
            </p>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-full bg-[color:var(--gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--chocolate-dark)] shadow-md md:block">
            No Maida · No Refined Sugar
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const why = [
  { icon: Wheat, title: "Millet Flour Only", text: "Ragi, foxtail, oats, buckwheat." },
  { icon: Leaf, title: "Sweetened with Jaggery", text: "Naturally, never refined." },
  { icon: Cookie, title: "Couverture Chocolate", text: "Premium, real, glossy." },
  { icon: Ban, title: "No Maida", text: "Ever. We don't compromise." },
  { icon: Ban, title: "No Refined Sugar", text: "Sweet, gentle, honest." },
  { icon: Sparkles, title: "No Preservatives", text: "Made fresh to order." },
];

function WhyUs() {
  return (
    <section className="section bg-[color:var(--cream-dark)]/40">
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Grain Crumbs</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Everything you love about brownies.
            <span className="block italic text-[color:var(--chocolate)]">Nothing you don't.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="card-warm h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--chocolate)] ring-1 ring-[color:var(--gold)]/40">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={ingredientsImg}
              alt="Millet grains, jaggery and couverture chocolate"
              width={1600}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--chocolate-dark)]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[color:var(--cream)] md:bottom-10 md:left-10">
              <p className="eyebrow text-[color:var(--gold-soft)]">Ingredient-first</p>
              <p className="mt-2 max-w-xl font-display text-2xl md:text-3xl">
                Millets you'd cook with at home. Chocolate you'd never compromise on.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const collections = [
  {
    name: "Grain Crumbs Classic",
    status: "Available now",
    available: true,
    points: [
      "Millet flour based",
      "Sweetened with jaggery",
      "No refined sugar",
      "Premium couverture chocolate",
      "Freshly made to order",
    ],
  },
  {
    name: "Grain Crumbs Lite",
    status: "In development",
    available: false,
    points: [
      "Jaggery + monk fruit",
      "Reduced added sugar",
      "Lower-GI focus",
    ],
  },
  {
    name: "Grain Crumbs Pro",
    status: "In development",
    available: false,
    points: [
      "High protein",
      "Millet based",
      "Fitness focused",
    ],
  },
];

function Collections() {
  return (
    <section className="section">
      <div className="container-prose">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our Collections</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A brownie for every you.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Three thoughtfully designed ranges — from the indulgent classic to lighter and
            higher-protein companions on the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <article className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${c.available ? "border-[color:var(--chocolate-dark)] bg-[color:var(--chocolate-dark)] text-[color:var(--cream)]" : "border-border bg-card"}`}>
                <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] ${c.available ? "bg-[color:var(--gold)] text-[color:var(--chocolate-dark)]" : "border border-border text-muted-foreground"}`}>
                  {c.status}
                </span>
                <h3 className={`mt-5 font-display text-3xl ${c.available ? "text-[color:var(--cream)]" : ""}`}>{c.name}</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className={`mt-2 inline-block h-1 w-3 ${c.available ? "bg-[color:var(--gold)]" : "bg-[color:var(--chocolate)]"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  {c.available ? (
                    <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[color:var(--gold-soft)] hover:text-[color:var(--gold)]">
                      Order the classic <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Coming soon</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flavours() {
  return (
    <section className="section bg-[color:var(--cream-dark)]/40">
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Signature Flavours</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Six ways to fall in love.</h2>
          <p className="mt-4 text-muted-foreground">
            Each flavour begins with the same millet-and-jaggery base — then takes a quiet
            detour into something memorable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flavours.map((f, i) => (
            <Reveal key={f.slug} delay={i * 80}>
              <article className="group card-warm overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                  <p className="mt-1 text-sm italic text-[color:var(--gold)]">{f.tagline}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{f.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/brownies" className="btn-outline">Explore Flavours</Link>
        </Reveal>
      </div>
    </section>
  );
}

function BrownieCakes() {
  return (
    <section className="section">
      <div className="container-prose grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={cakeImg}
              alt="Premium chocolate brownie celebration cake"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Brownie Cakes</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            For every celebration.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Birthdays. Anniversaries. Promotions. Baby showers. Father's Day. Mother's Day.
            Celebrate with a brownie cake that's rich, indulgent and thoughtfully made.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-3 text-sm">
            {["Custom messages", "Theme requests", "Reference images", "Made to order"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-[color:var(--gold)]" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/brownie-cakes" className="btn-primary w-full sm:w-auto">See Cakes</Link>
            <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Customise Yours</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const rows = [
  ["Flour", "Millet Flour", "Maida"],
  ["Sweetener", "Jaggery", "Refined Sugar"],
  ["Chocolate", "Premium Couverture", "Compound Chocolate"],
  ["Production", "Made Fresh to Order", "Mass Produced"],
  ["Preservatives", "None", "Used"],
];

function ComparisonTable() {
  return (
    <section className="section bg-[color:var(--chocolate-dark)] text-[color:var(--cream)]">
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[color:var(--gold)]">What makes us different</p>
          <h2 className="mt-3 font-display text-4xl text-[color:var(--cream)] md:text-5xl">
            Better in every line.
          </h2>
        </Reveal>

        <Reveal delay={200} className="mt-12 overflow-hidden rounded-2xl border border-[color:var(--gold)]/30">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[color:var(--chocolate)]/70 text-xs uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                <th className="px-4 py-5 sm:px-8"> </th>
                <th className="px-4 py-5 sm:px-8">Grain Crumbs</th>
                <th className="px-4 py-5 sm:px-8 opacity-70">Typical Bakery</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-5 font-medium uppercase tracking-wider text-[color:var(--gold-soft)] sm:px-8">{r[0]}</td>
                  <td className="px-4 py-5 font-display text-lg text-[color:var(--cream)] sm:px-8">{r[1]}</td>
                  <td className="px-4 py-5 text-[color:var(--cream)]/60 sm:px-8 line-through decoration-[color:var(--cream)]/30">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section">
      <div className="container-prose grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <img
              src={founderImg}
              alt="Ankita Gaikwad, founder of Grain Crumbs, holding a fresh tray of millet brownies"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/30" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            Made for my daughter.
            <span className="block italic text-[color:var(--chocolate)]">Loved by everyone.</span>
          </h2>
          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[color:var(--gold)]">
            Founder · Ankita Gaikwad
          </p>
          <div className="mt-5 space-y-4 text-muted-foreground md:space-y-5">
            <p>
              Grain Crumbs started when I wanted treats made with better ingredients
              for my toddler. What began as a personal journey soon became something
              friends and family kept asking for.
            </p>
            <p>
              Today, every batch is still made with the same care.
            </p>
            <p className="font-display text-xl text-foreground md:text-2xl">
              — Ankita Gaikwad
            </p>
          </div>
          <div className="mt-7 md:mt-8">
            <Link to="/about" className="btn-outline w-full sm:w-auto">Read the full story</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const reviews = [
  { text: "Everyone loved it. The cake disappeared in 10 minutes.", who: "Priya · Birthday Order" },
  { text: "Should have ordered double. So glad I found you.", who: "Nikhil · Office Gifting" },
  { text: "Less sweet and perfect. My kids didn't realise it was millet.", who: "Anita · Repeat Customer" },
];

function Reviews() {
  return (
    <section className="section bg-[color:var(--cream-dark)]/40">
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From our customers</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Notes from the WhatsApp inbox.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.who} delay={i * 100}>
              <figure className="card-warm flex h-full flex-col p-7">
                <Quote className="h-7 w-7 text-[color:var(--gold)]" />
                <blockquote className="mt-4 font-display text-xl leading-snug">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {r.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gifting() {
  return (
    <section className="section">
      <div className="container-prose grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Gifting</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Thoughtful gifting,
            <span className="block italic text-[color:var(--chocolate)]"> made easy.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Curated brownie hampers for the people you care about — and the people you
            want to impress. Personalised notes, premium packaging, delivered across Pune.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-y-3 text-sm">
            {["Birthdays", "Office Gifting", "Return Gifts", "Thank You Gifts", "Festive Hampers", "Bulk Orders"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1 w-3 bg-[color:var(--gold)]" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/gifting" className="btn-primary w-full sm:w-auto">Explore Hampers</Link>
            <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">Request a Quote</a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={giftingImg}
              alt="Premium brownie gift box with gold ribbon"
              loading="lazy"
              width={1400}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Are your brownies eggless?", a: "Yes — all our brownies are eggless, by default. We use plant-based binders and our signature millet base." },
  { q: "Do you use maida?", a: "Never. We work only with millet flours — ragi, foxtail, oats and buckwheat." },
  { q: "How sweet are they?", a: "Gently sweet. We use jaggery only, so the flavour is rounded and never sugary." },
  { q: "How long do they stay fresh?", a: "Best within 3 days at room temperature, or up to 7 days refrigerated. We bake to order to keep them at their best." },
  { q: "Do you deliver across Pune?", a: "Yes. We deliver across Pune; pickup is also available from our Kharadi kitchen." },
  { q: "Can brownie cakes be customised?", a: "Absolutely. Share a message, theme or reference image — we'll make it yours." },
];

function FAQ() {
  return (
    <section className="section bg-[color:var(--cream-dark)]/40">
      <div className="container-prose grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Good to know.</h2>
          <p className="mt-4 text-muted-foreground">
            Anything else? Message us on{" "}
            <a href={WHATSAPP_PLAIN_URL} target="_blank" rel="noreferrer" className="underline-link text-foreground">WhatsApp</a> —
            we usually reply within an hour.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="divide-y divide-border/70">
            {faqs.map((f) => (
              <li key={f.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section">
      <div className="container-prose">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--chocolate-dark)] px-6 py-16 text-center text-[color:var(--cream)] md:px-16 md:py-24">
            <div className="grain absolute inset-0 opacity-30" aria-hidden />
            <p className="eyebrow relative text-[color:var(--gold)]">Bake an order</p>
            <h2 className="relative mt-4 font-display text-4xl text-[color:var(--cream)] md:text-6xl">
              Hungry yet?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[color:var(--cream)]/80">
              Tell us what you'd like and when. We'll handle the rest — pickup from Kharadi
              or delivered fresh across Pune.
            </p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer" className="btn-gold w-full sm:w-auto">Place an order</a>
              <a href={WHATSAPP_PLAIN_URL} target="_blank" rel="noreferrer" className="btn-outline w-full border-[color:var(--cream)]/40 text-[color:var(--cream)] hover:bg-[color:var(--cream)] hover:text-[color:var(--chocolate-dark)] sm:w-auto">
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
