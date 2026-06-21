import walnut from "@/assets/brownie-chocolate-walnut.jpg";
import cappuccino from "@/assets/brownie-cappuccino.jpg";
import cream from "@/assets/brownie-cream-cheese.jpg";
import hazelnut from "@/assets/brownie-hazelnut.jpg";
import coconut from "@/assets/brownie-coconut.jpg";
import berry from "@/assets/brownie-berry.jpg";

export type Flavour = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  notes: string[];
};

export const flavours: Flavour[] = [
  {
    slug: "chocolate-walnut",
    name: "Chocolate Walnut",
    tagline: "The signature classic.",
    description:
      "Deeply fudgy with toasted walnuts folded through a couverture chocolate base.",
    image: walnut,
    notes: ["Couverture chocolate", "California walnuts", "Slow-baked"],
  },
  {
    slug: "cappuccino-walnut",
    name: "Cappuccino Walnut",
    tagline: "Espresso meets indulgence.",
    description:
      "Single-origin coffee swirled into rich chocolate, finished with crunchy walnut.",
    image: cappuccino,
    notes: ["Arabica espresso", "Walnut", "Soft centre"],
  },
  {
    slug: "cream-cheese-filling",
    name: "Cream Cheese Filling",
    tagline: "Molten heart, gentle tang.",
    description:
      "Cream cheese ribboned through the centre — a melt of tang against deep chocolate.",
    image: cream,
    notes: ["Cream cheese core", "Slow-baked", "Soft middle"],
  },
  {
    slug: "hazelnut-spread-filling",
    name: "Hazelnut Spread Filling",
    tagline: "Roasted, nutty, luxurious.",
    description:
      "Roasted hazelnut praline spread, folded into a millet brownie that crackles on top.",
    image: hazelnut,
    notes: ["Praline core", "Roasted hazelnut", "Crackle top"],
  },
  {
    slug: "coconut-bounty",
    name: "Coconut Bounty",
    tagline: "Tropical, glossy, generous.",
    description:
      "Toasted coconut layered with chocolate ganache — a tribute to the bounty bar, grown up.",
    image: coconut,
    notes: ["Toasted coconut", "Ganache drizzle", "Layered"],
  },
  {
    slug: "mixed-berry-jam",
    name: "Mixed Berry Jam",
    tagline: "Bright, tart, beautiful.",
    description:
      "Slow-cooked seasonal berries spooned over a fudgy millet brownie. The brightest finish.",
    image: berry,
    notes: ["Slow-cooked berries", "No artificial colour", "Limited batches"],
  },
];
