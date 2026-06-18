import { getCollection, getCollectionProducts } from "lib/shopify";
import { applyProductCreatives } from "lib/creative-overrides";
import { getMockProducts, getMockCollections } from "lib/mock";
import { getSiteDesignSettings } from "lib/site-design";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionCatalogClient from "components/CollectionCatalogClient";
import { defaultSort, sorting } from "lib/constants";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  let collection = await getCollection(params.collection);

  if (!collection) {
    const mockCols = getMockCollections();
    collection = mockCols.find((c) => c.handle === params.collection);
  }

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const design = await getSiteDesignSettings();

  let products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  if (products.length === 0) {
    const mockProducts = getMockProducts();
    const handle = params.collection.toLowerCase();
    if (handle === "compression") {
      products = mockProducts.filter(
        (p) =>
          p.handle.includes("tank") ||
          p.handle.includes("ls") ||
          p.handle.includes("compression"),
      );
    } else if (handle === "loungewear") {
      products = mockProducts.filter(
        (p) =>
          p.handle.includes("hoodie") ||
          p.handle.includes("pants") ||
          p.handle.includes("tee"),
      );
    } else if (handle === "underwear") {
      products = mockProducts.filter(
        (p) => p.handle.includes("boxer") || p.handle.includes("underwear"),
      );
    } else {
      products = mockProducts;
    }
  }
  products = applyProductCreatives(products, design);

  return (
    <section className="w-full">
      <Suspense
        fallback={
          <div className="font-mono text-[10px] text-skims-sand/40 uppercase">
            // LOADING CLASSIFIED NODES...
          </div>
        }
      >
        <CollectionCatalogClient products={products} />
      </Suspense>
    </section>
  );
}
