import type { FishType } from "@/components/fish-store/card/card";
import { CartItemType } from "@/providers/context-provider";

export const fishes: FishType[] = [
  {
    name: "Pacific Halibut",
    image: "/images/hali.jpg",
    desc: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
    price: 1724,
    status: "available",
    id: "1",
  },

  {
    name: "Lobster",
    image: "/images/lobster.jpg",
    desc: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
    price: 3200,
    status: "available",
    id: "2",
  },

  {
    name: "Sea Scallops",
    image: "/images/scallops.jpg",
    desc: "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
    price: 1684,
    status: "unavailable",
    id: "3",
  },

  {
    name: "Mahi Mahi",
    image: "/images/mahi.jpg",
    desc: "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",
    price: 1129,
    status: "available",
    id: "4",
  },
];

export const cartItemsFishes: CartItemType[] = [
  {
    name: "Pacific Halibut",
    image: "/images/hali.jpg",
    desc: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
    price: 1724,
    status: "available",
    id: "1",
    qty: 1,
  },
];
