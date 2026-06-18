import type { Metadata } from "next";

import Prose from "components/prose";
import { findPageCreative } from "lib/creative-overrides";
import { getPage } from "lib/shopify";
import { getSiteDesignSettings } from "lib/site-design";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = await getPage(params.page);
  const design = await getSiteDesignSettings();
  const creative = findPageCreative(design, params.page);

  if (!page) return notFound();

  return (
    <>
      <section className="relative mb-12 overflow-hidden border border-white/10 bg-black">
        {creative?.heroImage ? (
          <img
            src={creative.heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="relative px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-[8px] uppercase tracking-[0.32em] text-skims-accent">
            {creative?.eyebrow || "Editorial page"}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
            {creative?.title || page.title}
          </h1>
          {creative?.intro ? (
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60">
              {creative.intro}
            </p>
          ) : null}
          {creative?.ctaHref ? (
            <Link
              href={creative.ctaHref}
              className="mt-8 inline-flex bg-skims-accent px-7 py-3 text-[9px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white"
            >
              {creative.ctaText || "Explore"}
            </Link>
          ) : null}
        </div>
      </section>
      <Prose className="mb-8" html={page.body} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        ).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
