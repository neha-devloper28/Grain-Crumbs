import { createFileRoute, Link } from "@tanstack/react-router";
import story from "@/assets/story.jpg";
import ingredients from "@/assets/ingredients.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Grain Crumbs" },
      { name: "description", content: "Grain Crumbs began with a mother looking for better treats for her toddler. Today, every batch is still made with the same care." },
      { property: "og:title", content: "Our Story — Grain Crumbs" },
      { property: "og:description", content: "Made for my daughter. Loved by everyone." },
    ],
  }),
  component: Page,
});

const values = [
  { title: "Ingredient-first", text: "We start with grains and chocolate worth the recipe — millets, jaggery, couverture." },
  { title: "Small batches", text: "Hand-finished, baked to order. The opposite of mass production." },
  { title: "Honest sweetness", text: "Jaggery only — never refined sugar. You'll taste the difference." },
  { title: "Quiet luxury", text: "Premium without the gloss. Beautiful without the noise." },
];

function Page() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose py-20 text-center md:py-28">
          <p className="divider-gold eyebrow">Our Story</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl leading-tight md:text-6xl">
            Made for my daughter.
            <span className="block italic text-[color:var(--chocolate)]">Loved by everyone.</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-prose grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={story} alt="A mother arranging fresh-baked brownies" width={1200} height={1500} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base text-muted-foreground md:text-lg">
              <p>
                Grain Crumbs started in a small kitchen in Kharadi. I wanted a brownie
                I could happily share with my toddler — without the maida, the refined sugar,
                the long shelf-life ingredients.
              </p>
              <p>
                So I started baking with millets — ragi, foxtail, oats, buckwheat — and
                sweetening with jaggery. The chocolate had to be real. The texture had to
                be unmistakably brownie.
              </p>
              <p>
                Friends asked first. Then their friends. Then strangers. Today, every batch
                still leaves our kitchen the way the very first one did: small, hand-finished,
                and made with the same care.
              </p>
              <p className="font-display text-2xl text-foreground">
                — Founder, Grain Crumbs
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[color:var(--cream-dark)]/40">
        <div className="container-prose">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Four quiet principles.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-warm h-full p-8">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">The pantry</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Millets, jaggery, chocolate.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Our pantry is short and uncompromising. Ragi for depth. Foxtail for softness.
              Oats and buckwheat for structure. Jaggery for warmth. And the best couverture
              chocolate we can source.
            </p>
            <div className="mt-8">
              <Link to="/brownies" className="btn-primary">See the menu</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={ingredients} alt="Millet grains and jaggery" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
