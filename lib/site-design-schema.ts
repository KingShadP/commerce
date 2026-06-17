export type HeroSlideSettings = {
  imgSrc: string;
  subtitle: string;
  title: string;
  primaryBtnText: string;
  primaryBtnHref: string;
};

export type HomepageSectionKey =
  | "ticker"
  | "features"
  | "lookbook"
  | "featured"
  | "newsletter"
  | "ethos";

export type SiteDesignSettings = {
  brandName: string;
  brandDescriptor: string;
  logoUrl: string;
  showHeaderLogo: boolean;
  announcement: string;
  accentColor: string;
  backgroundColor: string;
  foregroundColor: string;
  heroImageOpacity: number;
  overlayStrength: number;
  motionIntensity: number;
  fogEnabled: boolean;
  lightSweepEnabled: boolean;
  floorReflectionEnabled: boolean;
  grainEnabled: boolean;
  roomImages: [string, string, string];
  heroSlides: HeroSlideSettings[];
  homepageSectionOrder: HomepageSectionKey[];
  updatedAt: string;
};

export const homepageSectionLabels: Record<HomepageSectionKey, string> = {
  ticker: "Material ticker",
  features: "System specifications",
  lookbook: "Lookbook study",
  featured: "Featured collection",
  newsletter: "Newsletter intake",
  ethos: "Brand ethos",
};

export const defaultHomepageSectionOrder: HomepageSectionKey[] = [
  "ticker",
  "features",
  "lookbook",
  "featured",
  "newsletter",
  "ethos",
];

export const defaultHeroSlides: HeroSlideSettings[] = [
  {
    imgSrc: "/slide-dragon-1.jpg",
    subtitle: "The Dragon Series | Limited Edition",
    title: "MEDITERRANEAN ORANGE COTTON FLEECE.",
    primaryBtnText: "Shop Orange",
    primaryBtnHref: "/search?q=orange",
  },
  {
    imgSrc: "/slide-dragon-2.jpg",
    subtitle: "The Dragon Series | Limited Edition",
    title: "OBSIDIAN BLACK POST-ACTIVE KNIT.",
    primaryBtnText: "Shop Obsidian",
    primaryBtnHref: "/search?q=black",
  },
  {
    imgSrc: "/slide-dragon-3.jpg",
    subtitle: "The Dragon Series | Limited Edition",
    title: "CREAM ALABASTER HEAVYWEIGHT SWEATER.",
    primaryBtnText: "Shop Alabaster",
    primaryBtnHref: "/search?q=cream",
  },
  {
    imgSrc: "/slide-dragon-4.jpg",
    subtitle: "The Dragon Series | Limited Edition",
    title: "CORAL PINK CONTUSION SWEATSHIRT.",
    primaryBtnText: "Shop Coral",
    primaryBtnHref: "/search?q=coral",
  },
  {
    imgSrc: "/slide-dragon-5.jpg",
    subtitle: "The Dragon Series | Limited Edition",
    title: "PASTEL SUNLIGHT HEAVY COTTON CREW.",
    primaryBtnText: "Shop Sunlight",
    primaryBtnHref: "/search?q=yellow",
  },
];

export function normalizeHomepageSectionOrder(
  input?: string[] | HomepageSectionKey[],
): HomepageSectionKey[] {
  const allowed = new Set(defaultHomepageSectionOrder);
  const ordered = (input || []).filter(
    (key): key is HomepageSectionKey =>
      typeof key === "string" && allowed.has(key as HomepageSectionKey),
  );
  return [
    ...ordered,
    ...defaultHomepageSectionOrder.filter((key) => !ordered.includes(key)),
  ];
}
