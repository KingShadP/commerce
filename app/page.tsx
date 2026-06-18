import React from "react";
import { getProducts } from "lib/shopify";
import { getMockProducts } from "lib/mock";
import { getSiteDesignSettings } from "lib/site-design";
import { applyProductCreatives } from "lib/creative-overrides";
import FeaturedCarousel from "components/FeaturedCarousel";
import HeroSlideshow from "components/HeroSlideshow";
import { ArrowRight, Sliders, Layers, Cpu, Activity } from "lucide-react";

export const revalidate = 60;

export const metadata = {
  description:
    "Explore the Giragon Collection. Premium support contours, ribbed underwear, and plush heavyweight loungewear sets engineered for men. Designed by KingShadP.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const settings = await getSiteDesignSettings();
  let products = await getProducts({});

  if (products.length === 0) {
    products = getMockProducts();
  }

  products = applyProductCreatives(products, settings);
  const featuredProducts = products.slice(0, 8);

  const sections = {
    ticker: (
      <section className="w-full overflow-hidden bg-white/[0.01] border-y border-white/5 py-4 select-none pointer-events-none">
        <div className="flex whitespace-nowrap gap-16 animate-marquee font-sans text-[7.5px] text-skims-accent/60 tracking-[4px] uppercase">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>95% Cotton Modal Blend</span>
              <span>420 GSM Compressive Double-Fleece</span>
              <span>12% Shaping Pressure Matrix</span>
              <span>3D Seamless Anatomical Pouch</span>
              <span>Shape Retention Factor: 99.8%</span>
              <span>Flatlock Frictionless Joints</span>
            </span>
          ))}
        </div>
      </section>
    ),
    features: (
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/10 p-[1px]">
          {[
            {
              icon: Sliders,
              title: "PRESSURE CONTROLS",
              desc: "Abdominal alignment fibers woven at 300g pressure grids to support and contour muscle postures.",
            },
            {
              icon: Activity,
              title: "ELASTICITY MEMORY",
              desc: "Double-spun modal yarns engineered to match physical dimensions and retain memory shape for 16+ hours.",
            },
            {
              icon: Layers,
              title: "THERM-FLOW WEAVE",
              desc: "Open-cell micro ventilation channels within the modal matrix that regulate heat dissipation.",
            },
            {
              icon: Cpu,
              title: "SEAMLESS GEOMETRY",
              desc: "Laser-cut panels bonded with cooling flatlock adhesives to eliminate friction along movement paths.",
            },
          ].map((feat, idx) => (
            <div
              key={feat.title}
              className="bg-[#0D0C0B]/85 backdrop-blur-md p-6 md:p-8 flex flex-col items-start text-left gap-5 hover:bg-white/[0.01] transition-all duration-300"
            >
              <feat.icon className="w-4 h-4 text-skims-accent" />
              <div className="space-y-2">
                <h3 className="font-sans text-[9px] tracking-[3px] uppercase text-white font-bold">
                  0{idx + 1} | {feat.title}
                </h3>
                <p className="font-sans text-[11px] text-skims-sand/50 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    ),
    lookbook: (
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 relative group aspect-[4/3] sm:aspect-[16/10] border border-white/10 bg-black overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1600&auto=format&fit=crop"
              alt="Anatomical Fit Study"
              className="w-full h-full object-cover opacity-30 filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 border border-skims-accent/10 m-3 pointer-events-none group-hover:border-skims-accent/30 transition-colors" />
            <div className="absolute bottom-6 left-6 font-sans text-[8px] text-skims-accent tracking-[3px] uppercase">
              Pressure Map System
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center text-left bg-white/[0.01] border border-white/5 p-8 sm:p-12 space-y-6">
            <span className="font-sans text-[8px] text-skims-accent tracking-[4px] uppercase block">
              Technical Dossier
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide uppercase font-light leading-tight">
              The Accord of Shape and Utility
            </h2>
            <p className="font-sans text-[11.5px] sm:text-xs text-skims-sand/60 leading-relaxed font-light">
              ATELIER SPEC 08 is woven from 420 GSM long-staple cotton fibers
              blended with modal to regulate thermal transfer. Custom circular
              looms lay down varying tension densities, generating zones of high
              compression that contour muscle silhouettes while remaining fluid
              to movement.
            </p>
            <div className="pt-2 font-sans text-[8.5px] tracking-[2px] text-skims-accent/80 space-y-1">
              <div>Fit: True to Size</div>
              <div>Stretch Ratio: 2.5x Axis Retention</div>
            </div>
            <div className="pt-2">
              <a
                href="#featured-selections"
                className="inline-flex items-center gap-3 border border-skims-accent/30 hover:border-skims-accent px-6 py-3 font-sans text-[9px] tracking-[3px] uppercase text-skims-accent hover:text-white transition-all duration-300 bg-black/40"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    ),
    featured: (
      <section
        id="featured-selections"
        className="w-full space-y-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end border-b border-white/5 pb-6">
          <div className="space-y-2 text-left">
            <span className="font-sans text-[8px] text-skims-accent tracking-[3px] uppercase">
              01 | Featured Collection
            </span>
            <h2 className="font-serif text-3xl md:text-4.5xl text-white tracking-wide uppercase font-light">
              Featured Selections
            </h2>
          </div>
          <div className="font-sans text-[7px] text-skims-sand/30 tracking-[2px] uppercase hidden sm:block">
            Drag or swipe to explore
          </div>
        </div>
        <FeaturedCarousel products={featuredProducts} />
      </section>
    ),
    newsletter: (
      <section className="max-w-3xl mx-auto px-6 w-full pt-12">
        <div className="glass-panel border border-white/10 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden rounded-3xl shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-[1px] bg-skims-accent/20" />
          <div className="absolute top-0 right-0 w-[1px] h-24 bg-skims-accent/20" />
          <div className="space-y-3">
            <span className="font-sans text-[8px] text-skims-accent tracking-[4px] uppercase block">
              Newsletter Registry
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white uppercase tracking-wide font-light">
              Secure Early Access
            </h3>
            <p className="font-sans text-[11px] text-skims-sand/45 max-w-md mx-auto leading-relaxed font-light">
              Subscribe to receive early access updates, restock notifications,
              and exclusive design briefings.
            </p>
          </div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
            <div className="flex-grow flex items-center bg-black/40 border border-white/10 rounded-full px-4 py-3 hover:border-skims-accent/40 transition-colors">
              <span className="text-[9px] font-sans text-skims-accent mr-2 font-bold">
                &gt;
              </span>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="bg-transparent border-none text-[10px] font-sans text-white placeholder:text-white/20 focus:outline-none w-full uppercase tracking-wider"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-skims-accent hover:bg-white text-black font-sans font-bold text-[9px] tracking-[3px] uppercase transition-all duration-300 rounded-full cursor-pointer hover:scale-[1.02]"
            >
              Register
            </button>
          </div>
          <div className="text-[6.5px] font-sans text-white/15 tracking-[2px] pt-4 uppercase">
            Secure Connection Enabled
          </div>
        </div>
      </section>
    ),
    ethos: (
      <section className="max-w-3xl mx-auto px-6 text-center space-y-6 pt-12 select-text">
        <span className="font-sans text-[8px] text-skims-accent tracking-[4px] uppercase block">
          Our Ethos
        </span>
        <p className="font-serif text-base sm:text-lg text-white/80 leading-relaxed italic font-light">
          "Support contouring is the physical armor of the form. We configure
          knitwear structures that stabilize and map body shapes, enabling
          motion with complete anatomical trust."
        </p>
        <div className="h-[1px] w-12 bg-skims-accent/20 mx-auto" />
        <p className="font-sans text-[7px] text-skims-sand/20 tracking-[2px] uppercase">
          KSHADP Atelier System // All Rights Reserved 2026
        </p>
      </section>
    ),
  };

  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-32 select-none overflow-x-hidden">
      <HeroSlideshow slides={settings.heroSlides} />
      {settings.homepageSectionOrder.map((key) => (
        <React.Fragment key={key}>{sections[key]}</React.Fragment>
      ))}
    </div>
  );
}
