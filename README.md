# KSHADP Storefront

Men's shapewear, underwear, and loungewear. Built on Next.js 15 + Shopify.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, PPR, Server Actions) |
| UI | React 19, Tailwind CSS v4, Framer Motion, GSAP + Lenis |
| Commerce | Shopify Storefront API |
| Design settings | Vercel Blob (prod) / `.data/` (dev) |
| Package manager | **pnpm** |

## Getting started

1. Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Where to find it |
|---|---|
| `SHOPIFY_STORE_DOMAIN` | Your Shopify store URL, e.g. `yourstore.myshopify.com` |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Shopify Admin → Apps → Develop apps → Storefront API |
| `SHOPIFY_REVALIDATION_SECRET` | Any random string — used to validate Shopify webhooks |
| `ADMIN_PASSCODE` | Any passcode you choose for the `/admin` design studio |
| `ADMIN_SESSION_SECRET` | Any long random string for signing admin session cookies |
| `ADMIN_API_TOKEN` | Optional bearer token for the `/api/admin/summary` endpoint |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token — design settings persist here in production |

2. Install dependencies and run locally:

```bash
pnpm install
pnpm dev
```

The site runs at [localhost:3000](http://localhost:3000).

If `SHOPIFY_STORE_DOMAIN` / `SHOPIFY_STOREFRONT_ACCESS_TOKEN` aren't set, the storefront falls back to mock product data from `lib/mock.ts` so you can develop without a live Shopify connection.

## Admin design studio

Go to `/admin` while the dev server is running. Log in with your `ADMIN_PASSCODE`. From there you can update brand colours, hero slides, announcement bar text, homepage section order, and per-product image overrides without touching code.

In production, design settings save to Vercel Blob. In development they save to `.data/site-design.json` (gitignored).

## Shopify setup

- Products need **Color** and **Size** variant options for swatches and size selectors to work.
- Create collections with handles matching the nav: `compression`, `underwear`, `loungewear`.
- Set up a webhook pointing to `https://yourdomain.com/api/revalidate?secret=YOUR_REVALIDATION_SECRET` for products and collections (create, update, delete) to keep pages fresh.

## Deployment

Push to a Vercel project connected to this repo. Set all environment variables in the Vercel dashboard. The `BLOB_READ_WRITE_TOKEN` is provisioned automatically if you add a Vercel Blob store to the project.

## Project structure

```
app/                  Next.js App Router pages
  admin/              Password-protected design studio
  account/            Order help & support info
  checkout/           Redirects to Shopify hosted checkout
  product/[handle]/   Product detail pages
  search/[collection] Collection / category pages
components/
  cart/               Cart context, modal, actions
  layout/             Header, footer, search
  AdminDesignStudio   Visual design editor
  ProductCard         Product grid card
  ProductDetailClient Product detail page (client)
  CollectionCatalogClient  Collection page with grid/list toggle
lib/
  shopify/            Storefront API queries, mutations, types
  mock.ts             Fallback product data for development
  site-design.ts      Design settings read/write
  admin-auth.ts       Admin session management
```
