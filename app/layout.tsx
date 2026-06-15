import { CartProvider } from "components/cart/cart-context";
import CinematicEnvironment from "components/CinematicEnvironment";
import Header from "components/Header";
import { WelcomeToast } from "components/welcome-toast";
import { Outfit, Playfair_Display } from "next/font/google";
import { getCart } from "lib/shopify";
import { getSiteDesignSettings } from "lib/site-design";
import { CSSProperties, ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";
import SmoothScrollProvider from "components/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "KSHADP | Men's Shapewear, Underwear & Loungewear",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Explore the Giragon Collection. Premium support contours, ribbed underwear, and plush heavyweight loungewear sets engineered for men. Designed by KingShadP.",
  keywords:
    "shapewear for men, compression underwear, ribbed boxers, modal loungewear, sleepwear, kshadp, giragon collection",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: "KSHADP | Men's Shapewear, Underwear & Loungewear",
    description:
      "Explore the Giragon Collection. Premium support contours, ribbed underwear, and plush heavyweight loungewear sets engineered for men.",
    images: [{ url: "/logo_5.png" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();
  const design = await getSiteDesignSettings();
  const designVariables = {
    "--background": design.backgroundColor,
    "--foreground": design.foregroundColor,
    "--skims-accent": design.accentColor,
    "--hero-image-opacity": design.heroImageOpacity,
    "--overlay-strength": design.overlayStrength,
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        style={designVariables}
        className="min-h-full flex flex-col bg-background text-foreground relative selection:bg-skims-accent/30 selection:text-white overflow-x-hidden"
      >
        <SmoothScrollProvider>
          <CartProvider cartPromise={cart}>
            <CinematicEnvironment settings={design} />

            {/* Bottom Navigation Dock Header */}
            <Header settings={design} />

            {/* Page Contents */}
            <main className="flex-grow pt-7 relative z-20">
              {children}
              <Toaster closeButton />
              <WelcomeToast />
            </main>
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
