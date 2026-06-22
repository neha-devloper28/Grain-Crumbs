import walnutAsset from "@/assets/brownie-chocolate-walnut.png.asset.json";
import cappuccinoAsset from "@/assets/brownie-cappuccino.png.asset.json";
import creamAsset from "@/assets/brownie-cream-cheese.png.asset.json";
import hazelnutAsset from "@/assets/brownie-hazelnut.png.asset.json";
import coconutAsset from "@/assets/brownie-coconut.png.asset.json";
import berryAsset from "@/assets/brownie-berry.png.asset.json";

export type Flavour = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  notes: string[];
  price: number;
};

export const flavours: Flavour[] = [
  {
    slug: "mixed-berry-jam",
    name: "Mixed Berry Jam",
    tagline: "Bright, tart, beautiful.",
    description:
      "Slow-cooked seasonal berries spooned over a fudgy millet brownie. The brightest finish.",
    image: berryAsset.url,
    notes: ["Slow-cooked berries", "No artificial colour", "Limited batches"],
    price: 109,
  },
  {
    slug: "coconut-bounty",
    name: "Coconut Bounty",
    tagline: "Tropical, glossy, generous.",
    description:
      "Toasted coconut layered with chocolate ganache — a tribute to the bounty bar, grown up.",
    image: coconutAsset.url,
    notes: ["Toasted coconut", "Ganache drizzle", "Layered"],
    price: 119,
  },
  {
    slug: "chocolate-walnut",
    name: "Chocolate Walnut",
    tagline: "The signature classic.",
    description:
      "Deeply fudgy with toasted walnuts folded through a couverture chocolate base.",
    image: walnutAsset.url,
    notes: ["Couverture chocolate", "California walnuts", "Slow-baked"],
    price: 129,
  },
  {
    slug: "cappuccino-walnut",
    name: "Cappuccino Walnut",
    tagline: "Espresso meets indulgence.",
    description:
      "Single-origin coffee swirled into rich chocolate, finished with crunchy walnut.",
    image: cappuccinoAsset.url,
    notes: ["Arabica espresso", "Walnut", "Soft centre"],
    price: 129,
  },
  {
    slug: "cream-cheese-filling",
    name: "Cream Cheese Filling",
    tagline: "Molten heart, gentle tang.",
    description:
      "Cream cheese ribboned through the centre — a melt of tang against deep chocolate.",
    image: creamAsset.url,
    notes: ["Cream cheese core", "Slow-baked", "Soft middle"],
    price: 149,
  },
  {
    slug: "hazelnut-spread-filling",
    name: "Hazelnut Spread Filling",
    tagline: "Roasted, nutty, luxurious.",
    description:
      "Roasted hazelnut praline spread, folded into a millet brownie that crackles on top.",
    image: hazelnutAsset.url,
    notes: ["Praline core", "Roasted hazelnut", "Crackle top"],
    price: 159,
  },
];
