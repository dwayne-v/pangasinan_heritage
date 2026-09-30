export interface HeritageSite {
  slug: string;
  name: string;
  municipality: string;
  category: "Natural Wonder" | "Historical Landmark" | "Hot Spring";
  image: string;
  blurb: string;
  visitDuration: string;
}

// Content is decoupled from presentation: this array (in production,
// swapped for a headless CMS / markdown collection) is the only place
// that changes when the Tourism Office adds a new site -- no component
// code needs to be touched, satisfying the "maintainable" requirement.
export const heritageSites: HeritageSite[] = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands National Park",
    municipality: "Alaminos",
    category: "Natural Wonder",
    image: "/images/hundred_islands.png",
    blurb:
      "124 limestone islands scattered across the Lingayen Gulf, the Philippines' first National Park and a paddling, snorkeling, and island-hopping icon.",
    visitDuration: "Half-day to full-day",
  },
  {
    slug: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    municipality: "Bolinao",
    category: "Historical Landmark",
    image: "/images/bolinao_lighthouse.png",
    blurb:
      "One of the tallest lighthouses in the country, standing watch over the West Philippine Sea since the Spanish colonial era.",
    visitDuration: "1-2 hours",
  },
  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot Spring & Nature Park",
    municipality: "Balungao",
    category: "Hot Spring",
    image: "/images/balungao_hotspring.png",
    blurb:
      "Mineral hot springs at the foot of the Balungao hills, ringed by a butterfly sanctuary and eco-trails.",
    visitDuration: "Half-day",
  },
  {
    slug: "patar-beach",
    name: "Patar White Beach",
    municipality: "Bolinao",
    category: "Natural Wonder",
    image: "/images/patar-beach.png",
    blurb: "A wide, powder-white sandbar facing the South China Sea, best known for its dramatic sunsets.",
    visitDuration: "Half-day to overnight",
  },
];
