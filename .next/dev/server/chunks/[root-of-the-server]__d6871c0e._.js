module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo-experimental.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo-experimental.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo-experimental.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo-experimental.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/admin-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminSession",
    ()=>createAdminSession,
    "destroyAdminSession",
    ()=>destroyAdminSession,
    "isAdminAuthenticated",
    ()=>isAdminAuthenticated,
    "verifyAdminApiToken",
    ()=>verifyAdminApiToken,
    "verifyAdminPasscode",
    ()=>verifyAdminPasscode
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const cookieName = "sanctum-admin";
const sessionDurationSeconds = 60 * 60 * 12;
function getSecret() {
    return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSCODE || "";
}
function sign(value) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", getSecret()).update(value).digest("hex");
}
function safeEqual(left, right) {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);
    return leftBuffer.length === rightBuffer.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(leftBuffer, rightBuffer);
}
function verifyAdminPasscode(passcode) {
    const expected = process.env.ADMIN_PASSCODE || "";
    return Boolean(expected && safeEqual(passcode, expected));
}
function verifyAdminApiToken(authorization) {
    const expected = process.env.ADMIN_API_TOKEN || "";
    const token = authorization?.match(/^Bearer\s+(.+)$/i)?.[1]?.trim() || "";
    return Boolean(expected && token && safeEqual(token, expected));
}
async function createAdminSession() {
    const expires = Math.floor(Date.now() / 1000) + sessionDurationSeconds;
    const payload = `admin.${expires}`;
    const value = `${payload}.${sign(payload)}`;
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(cookieName, value, {
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        maxAge: sessionDurationSeconds,
        path: "/"
    });
}
async function destroyAdminSession() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).delete(cookieName);
}
async function isAdminAuthenticated() {
    const value = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(cookieName)?.value;
    if (!value || !getSecret()) return false;
    const parts = value.split(".");
    if (parts.length !== 3) return false;
    const [role, expiresValue, signature] = parts;
    const payload = `${role}.${expiresValue}`;
    const expires = Number(expiresValue);
    return role === "admin" && Number.isFinite(expires) && expires > Math.floor(Date.now() / 1000) && safeEqual(signature || "", sign(payload));
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/cache-handlers/default.external.js [external] (next/dist/server/lib/cache-handlers/default.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/cache-handlers/default.external.js", () => require("next/dist/server/lib/cache-handlers/default.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_OPTION",
    ()=>DEFAULT_OPTION,
    "HIDDEN_PRODUCT_TAG",
    ()=>HIDDEN_PRODUCT_TAG,
    "SHOPIFY_GRAPHQL_API_ENDPOINT",
    ()=>SHOPIFY_GRAPHQL_API_ENDPOINT,
    "TAGS",
    ()=>TAGS,
    "defaultSort",
    ()=>defaultSort,
    "sorting",
    ()=>sorting
]);
const defaultSort = {
    title: "Relevance",
    slug: null,
    sortKey: "RELEVANCE",
    reverse: false
};
const sorting = [
    defaultSort,
    {
        title: "Trending",
        slug: "trending-desc",
        sortKey: "BEST_SELLING",
        reverse: false
    },
    {
        title: "Latest arrivals",
        slug: "latest-desc",
        sortKey: "CREATED_AT",
        reverse: true
    },
    {
        title: "Price: Low to high",
        slug: "price-asc",
        sortKey: "PRICE",
        reverse: false
    },
    {
        title: "Price: High to low",
        slug: "price-desc",
        sortKey: "PRICE",
        reverse: true
    }
];
const TAGS = {
    collections: "collections",
    products: "products",
    cart: "cart"
};
const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
const DEFAULT_OPTION = "Default Title";
const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/type-guards.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject,
    "isShopifyError",
    ()=>isShopifyError
]);
const isObject = (object)=>{
    return typeof object === "object" && object !== null && !Array.isArray(object);
};
const isShopifyError = (error)=>{
    if (!isObject(error)) return false;
    if (error instanceof Error) return true;
    return findError(error);
};
function findError(error) {
    if (Object.prototype.toString.call(error) === "[object Error]") {
        return true;
    }
    const prototype = Object.getPrototypeOf(error);
    return prototype === null ? false : findError(prototype);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseUrl",
    ()=>baseUrl,
    "createUrl",
    ()=>createUrl,
    "ensureStartsWith",
    ()=>ensureStartsWith,
    "validateEnvironmentVariables",
    ()=>validateEnvironmentVariables
]);
const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";
const createUrl = (pathname, params)=>{
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    return `${pathname}${queryString}`;
};
const ensureStartsWith = (stringToCheck, startsWith)=>stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
const validateEnvironmentVariables = ()=>{
    const requiredEnvironmentVariables = [
        "SHOPIFY_STORE_DOMAIN",
        "SHOPIFY_STOREFRONT_ACCESS_TOKEN"
    ];
    const missingEnvironmentVariables = [];
    requiredEnvironmentVariables.forEach((envVar)=>{
        if (!process.env[envVar]) {
            missingEnvironmentVariables.push(envVar);
        }
    });
    if (missingEnvironmentVariables.length) {
        throw new Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join("\n")}\n`);
    }
    if (process.env.SHOPIFY_STORE_DOMAIN?.includes("[") || process.env.SHOPIFY_STORE_DOMAIN?.includes("]")) {
        throw new Error("Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.");
    }
};
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/image.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const imageFragment = /* GraphQL */ `
  fragment image on Image {
    url
    altText
    width
    height
  }
`;
const __TURBOPACK__default__export__ = imageFragment;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/seo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const seoFragment = /* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`;
const __TURBOPACK__default__export__ = seoFragment;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/product.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$image$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/image.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/seo.ts [app-route] (ecmascript)");
;
;
const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$image$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const __TURBOPACK__default__export__ = productFragment;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/cart.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/product.ts [app-route] (ecmascript)");
;
const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const __TURBOPACK__default__export__ = cartFragment;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/mutations/cart.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCartMutation",
    ()=>addToCartMutation,
    "createCartMutation",
    ()=>createCartMutation,
    "editCartItemsMutation",
    ()=>editCartItemsMutation,
    "removeFromCartMutation",
    ()=>removeFromCartMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/cart.ts [app-route] (ecmascript)");
;
const addToCartMutation = /* GraphQL */ `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const createCartMutation = /* GraphQL */ `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const editCartItemsMutation = /* GraphQL */ `
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const removeFromCartMutation = /* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/cart.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCartQuery",
    ()=>getCartQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/cart.ts [app-route] (ecmascript)");
;
const getCartQuery = /* GraphQL */ `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/collection.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCollectionProductsQuery",
    ()=>getCollectionProductsQuery,
    "getCollectionQuery",
    ()=>getCollectionQuery,
    "getCollectionsQuery",
    ()=>getCollectionsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/product.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/seo.ts [app-route] (ecmascript)");
;
;
const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;
const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;
const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/menu.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMenuQuery",
    ()=>getMenuQuery
]);
const getMenuQuery = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/page.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPageQuery",
    ()=>getPageQuery,
    "getPagesQuery",
    ()=>getPagesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/seo.ts [app-route] (ecmascript)");
;
const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$seo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;
const getPagesQuery = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/product.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductQuery",
    ()=>getProductQuery,
    "getProductRecommendationsQuery",
    ()=>getProductRecommendationsQuery,
    "getProductsQuery",
    ()=>getProductsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/fragments/product.ts [app-route] (ecmascript)");
;
const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$fragments$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]}
`;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/shopify/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"801b3c7c688bfe10ac7a01675bdc2788ff007cbb15":"$$RSC_SERVER_CACHE_3","80c760ec2152dc999f5a0cab3ceecaf9ee3c264ebd":"$$RSC_SERVER_CACHE_0","c02658d8eb81b32bf3a13cef769e5b4d1dd8ba2c9d":"$$RSC_SERVER_CACHE_7","c027ce89c51c55ebf9e6374b7cc70fa79f308e38ba":"$$RSC_SERVER_CACHE_2","c02b012281fdc9e9070371e4ebf9762f9215e65a62":"$$RSC_SERVER_CACHE_5","c0a1ff8140b9e7df858765d8ecb3f5d5b7f4abc4bd":"$$RSC_SERVER_CACHE_4","c0c2a5dc97088bf78d270a0fb65287f7582e4428f1":"$$RSC_SERVER_CACHE_6","c0e7b52c6c217356c17dfd21cebde9c5d21046d265":"$$RSC_SERVER_CACHE_1"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_CACHE_0",
    ()=>$$RSC_SERVER_CACHE_0,
    "$$RSC_SERVER_CACHE_1",
    ()=>$$RSC_SERVER_CACHE_1,
    "$$RSC_SERVER_CACHE_2",
    ()=>$$RSC_SERVER_CACHE_2,
    "$$RSC_SERVER_CACHE_3",
    ()=>$$RSC_SERVER_CACHE_3,
    "$$RSC_SERVER_CACHE_4",
    ()=>$$RSC_SERVER_CACHE_4,
    "$$RSC_SERVER_CACHE_5",
    ()=>$$RSC_SERVER_CACHE_5,
    "$$RSC_SERVER_CACHE_6",
    ()=>$$RSC_SERVER_CACHE_6,
    "$$RSC_SERVER_CACHE_7",
    ()=>$$RSC_SERVER_CACHE_7,
    "addToCart",
    ()=>addToCart,
    "createCart",
    ()=>createCart,
    "getCart",
    ()=>getCart,
    "getCollection",
    ()=>getCollection,
    "getCollectionProducts",
    ()=>getCollectionProducts,
    "getCollections",
    ()=>getCollections,
    "getMenu",
    ()=>getMenu,
    "getPage",
    ()=>getPage,
    "getPages",
    ()=>getPages,
    "getProduct",
    ()=>getProduct,
    "getProductRecommendations",
    ()=>getProductRecommendations,
    "getProducts",
    ()=>getProducts,
    "removeFromCart",
    ()=>removeFromCart,
    "revalidate",
    ()=>revalidate,
    "shopifyFetch",
    ()=>shopifyFetch,
    "updateCart",
    ()=>updateCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$type$2d$guards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/type-guards.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$mutations$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/mutations/cart.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/cart.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$collection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/collection.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$menu$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/menu.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$page$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/page.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/queries/product.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const domain = process.env.SHOPIFY_STORE_DOMAIN ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureStartsWith"])(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";
const endpoint = domain ? `${domain}${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHOPIFY_GRAPHQL_API_ENDPOINT"]}` : "";
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
async function shopifyFetch({ headers, query, variables }) {
    try {
        if (!endpoint) {
            throw new Error("SHOPIFY_STORE_DOMAIN environment variable is not set");
        }
        const result = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": key,
                ...headers
            },
            body: JSON.stringify({
                ...query && {
                    query
                },
                ...variables && {
                    variables
                }
            })
        });
        const body = await result.json();
        if (body.errors) {
            throw body.errors[0];
        }
        return {
            status: result.status,
            body
        };
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$type$2d$guards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isShopifyError"])(e)) {
            throw {
                cause: e.cause?.toString() || "unknown",
                status: e.status || 500,
                message: e.message,
                query
            };
        }
        throw {
            error: e,
            query
        };
    }
}
const removeEdgesAndNodes = (array)=>{
    return array.edges.map((edge)=>edge?.node);
};
const reshapeCart = (cart)=>{
    if (!cart.cost?.totalTaxAmount) {
        cart.cost.totalTaxAmount = {
            amount: "0.0",
            currencyCode: cart.cost.totalAmount.currencyCode
        };
    }
    return {
        ...cart,
        lines: removeEdgesAndNodes(cart.lines)
    };
};
const reshapeCollection = (collection)=>{
    if (!collection) {
        return undefined;
    }
    return {
        ...collection,
        path: `/search/${collection.handle}`
    };
};
const reshapeCollections = (collections)=>{
    const reshapedCollections = [];
    for (const collection of collections){
        if (collection) {
            const reshapedCollection = reshapeCollection(collection);
            if (reshapedCollection) {
                reshapedCollections.push(reshapedCollection);
            }
        }
    }
    return reshapedCollections;
};
const reshapeImages = (images, productTitle)=>{
    const flattened = removeEdgesAndNodes(images);
    return flattened.map((image)=>{
        const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
        return {
            ...image,
            altText: image.altText || `${productTitle} - ${filename}`
        };
    });
};
const reshapeProduct = (product, filterHiddenProducts = true)=>{
    if (!product || filterHiddenProducts && product.tags.includes(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HIDDEN_PRODUCT_TAG"])) {
        return undefined;
    }
    const { images, variants, ...rest } = product;
    return {
        ...rest,
        images: reshapeImages(images, product.title),
        variants: removeEdgesAndNodes(variants)
    };
};
const reshapeProducts = (products)=>{
    const reshapedProducts = [];
    for (const product of products){
        if (product) {
            const reshapedProduct = reshapeProduct(product);
            if (reshapedProduct) {
                reshapedProducts.push(reshapedProduct);
            }
        }
    }
    return reshapedProducts;
};
async function createCart() {
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$mutations$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCartMutation"]
    });
    return reshapeCart(res.body.data.cartCreate.cart);
}
async function addToCart(lines) {
    const cartId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get("cartId")?.value;
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$mutations$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addToCartMutation"],
        variables: {
            cartId,
            lines
        }
    });
    return reshapeCart(res.body.data.cartLinesAdd.cart);
}
async function removeFromCart(lineIds) {
    const cartId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get("cartId")?.value;
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$mutations$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeFromCartMutation"],
        variables: {
            cartId,
            lineIds
        }
    });
    return reshapeCart(res.body.data.cartLinesRemove.cart);
}
async function updateCart(lines) {
    const cartId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get("cartId")?.value;
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$mutations$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["editCartItemsMutation"],
        variables: {
            cartId,
            lines
        }
    });
    return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("private", "80c760ec2152dc999f5a0cab3ceecaf9ee3c264ebd", 0, async function getCart() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].cart);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("seconds");
    const cartId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get("cartId")?.value;
    if (!cartId) {
        return undefined;
    }
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$cart$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCartQuery"],
        variables: {
            cartId
        }
    });
    // Old carts becomes `null` when you checkout.
    if (!res.body.data.cart) {
        return undefined;
    }
    return reshapeCart(res.body.data.cart);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "80c760ec2152dc999f5a0cab3ceecaf9ee3c264ebd", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "getCart",
    writable: false
});
var getCart = $$RSC_SERVER_CACHE_0;
var $$RSC_SERVER_CACHE_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c0e7b52c6c217356c17dfd21cebde9c5d21046d265", 0, async function getCollection(handle) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].collections);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$collection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollectionQuery"],
        variables: {
            handle
        }
    });
    return reshapeCollection(res.body.data.collection);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_1, "c0e7b52c6c217356c17dfd21cebde9c5d21046d265", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_1, "name", {
    value: "getCollection",
    writable: false
});
var getCollection = $$RSC_SERVER_CACHE_1;
var $$RSC_SERVER_CACHE_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c027ce89c51c55ebf9e6374b7cc70fa79f308e38ba", 0, async function getCollectionProducts({ collection, reverse, sortKey }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].collections, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].products);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    if (!endpoint) {
        console.log(`Skipping getCollectionProducts for '${collection}' - Shopify not configured`);
        return [];
    }
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$collection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollectionProductsQuery"],
        variables: {
            handle: collection,
            reverse,
            sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey
        }
    });
    if (!res.body.data.collection) {
        console.log(`No collection found for \`${collection}\``);
        return [];
    }
    return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_2, "c027ce89c51c55ebf9e6374b7cc70fa79f308e38ba", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_2, "name", {
    value: "getCollectionProducts",
    writable: false
});
var getCollectionProducts = $$RSC_SERVER_CACHE_2;
var $$RSC_SERVER_CACHE_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "801b3c7c688bfe10ac7a01675bdc2788ff007cbb15", 0, async function getCollections() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].collections);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    if (!endpoint) {
        console.log("Skipping getCollections - Shopify not configured");
        return [
            {
                handle: "",
                title: "All",
                description: "All products",
                seo: {
                    title: "All",
                    description: "All products"
                },
                path: "/search",
                updatedAt: new Date().toISOString()
            }
        ];
    }
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$collection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollectionsQuery"]
    });
    const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
    const collections = [
        {
            handle: "",
            title: "All",
            description: "All products",
            seo: {
                title: "All",
                description: "All products"
            },
            path: "/search",
            updatedAt: new Date().toISOString()
        },
        // Filter out the `hidden` collections.
        // Collections that start with `hidden-*` need to be hidden on the search page.
        ...reshapeCollections(shopifyCollections).filter((collection)=>!collection.handle.startsWith("hidden"))
    ];
    return collections;
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_3, "801b3c7c688bfe10ac7a01675bdc2788ff007cbb15", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_3, "name", {
    value: "getCollections",
    writable: false
});
var getCollections = $$RSC_SERVER_CACHE_3;
var $$RSC_SERVER_CACHE_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c0a1ff8140b9e7df858765d8ecb3f5d5b7f4abc4bd", 0, async function getMenu(handle) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].collections);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    if (!endpoint) {
        console.log(`Skipping getMenu for '${handle}' - Shopify not configured`);
        return [];
    }
    try {
        const res = await shopifyFetch({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$menu$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMenuQuery"],
            variables: {
                handle
            }
        });
        return res.body?.data?.menu?.items.map((item)=>({
                title: item.title,
                path: item.url.replace(domain, "").replace("/collections", "/search").replace("/pages", "")
            })) || [];
    } catch (error) {
        console.error(`Unable to load Shopify menu '${handle}'`, error);
        return [];
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_4, "c0a1ff8140b9e7df858765d8ecb3f5d5b7f4abc4bd", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_4, "name", {
    value: "getMenu",
    writable: false
});
var getMenu = $$RSC_SERVER_CACHE_4;
async function getPage(handle) {
    try {
        const res = await shopifyFetch({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$page$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPageQuery"],
            variables: {
                handle
            }
        });
        return res.body.data.pageByHandle;
    } catch (error) {
        console.error(`Unable to load Shopify page '${handle}'`, error);
        return undefined;
    }
}
async function getPages() {
    try {
        const res = await shopifyFetch({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$page$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPagesQuery"]
        });
        return removeEdgesAndNodes(res.body.data.pages);
    } catch (error) {
        console.error("Unable to load Shopify pages", error);
        return [];
    }
}
var $$RSC_SERVER_CACHE_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c02b012281fdc9e9070371e4ebf9762f9215e65a62", 0, async function getProduct(handle) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].products);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    if (!endpoint) {
        console.log(`Skipping getProduct for '${handle}' - Shopify not configured`);
        return undefined;
    }
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProductQuery"],
        variables: {
            handle
        }
    });
    return reshapeProduct(res.body.data.product, false);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_5, "c02b012281fdc9e9070371e4ebf9762f9215e65a62", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_5, "name", {
    value: "getProduct",
    writable: false
});
var getProduct = $$RSC_SERVER_CACHE_5;
var $$RSC_SERVER_CACHE_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c0c2a5dc97088bf78d270a0fb65287f7582e4428f1", 0, async function getProductRecommendations(productId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].products);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    const res = await shopifyFetch({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProductRecommendationsQuery"],
        variables: {
            productId
        }
    });
    return reshapeProducts(res.body.data.productRecommendations);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_6, "c0c2a5dc97088bf78d270a0fb65287f7582e4428f1", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_6, "name", {
    value: "getProductRecommendations",
    writable: false
});
var getProductRecommendations = $$RSC_SERVER_CACHE_6;
var $$RSC_SERVER_CACHE_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "c02658d8eb81b32bf3a13cef769e5b4d1dd8ba2c9d", 0, async function getProducts({ query, reverse, sortKey }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].products);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_cacheLife"])("days");
    try {
        const res = await shopifyFetch({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$queries$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProductsQuery"],
            variables: {
                query,
                reverse,
                sortKey
            }
        });
        return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
    } catch (error) {
        console.error("Unable to load Shopify products", error);
        return [];
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_7, "c02658d8eb81b32bf3a13cef769e5b4d1dd8ba2c9d", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_7, "name", {
    value: "getProducts",
    writable: false
});
var getProducts = $$RSC_SERVER_CACHE_7;
async function revalidate(req) {
    // We always need to respond with a 200 status code to Shopify,
    // otherwise it will continue to retry the request.
    const collectionWebhooks = [
        "collections/create",
        "collections/delete",
        "collections/update"
    ];
    const productWebhooks = [
        "products/create",
        "products/delete",
        "products/update"
    ];
    const topic = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])()).get("x-shopify-topic") || "unknown";
    const secret = req.nextUrl.searchParams.get("secret");
    const isCollectionUpdate = collectionWebhooks.includes(topic);
    const isProductUpdate = productWebhooks.includes(topic);
    if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
        console.error("Invalid revalidation secret.");
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 401
        });
    }
    if (!isCollectionUpdate && !isProductUpdate) {
        // We don't need to revalidate anything for any other topics.
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 200
        });
    }
    if (isCollectionUpdate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].collections, "seconds");
    }
    if (isProductUpdate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAGS"].products, "seconds");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 200,
        revalidated: true,
        now: Date.now()
    });
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/node:assert [external] (node:assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:querystring [external] (node:querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:querystring", () => require("node:querystring"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}),
"[externals]/node:util/types [external] (node:util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util/types", () => require("node:util/types"));

module.exports = mod;
}),
"[externals]/node:worker_threads [external] (node:worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:worker_threads", () => require("node:worker_threads"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:http2 [external] (node:http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http2", () => require("node:http2"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/site-design-schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHeroSlides",
    ()=>defaultHeroSlides,
    "defaultHomepageSectionOrder",
    ()=>defaultHomepageSectionOrder,
    "homepageSectionLabels",
    ()=>homepageSectionLabels,
    "normalizeHomepageSectionOrder",
    ()=>normalizeHomepageSectionOrder
]);
const homepageSectionLabels = {
    ticker: "Material ticker",
    features: "System specifications",
    lookbook: "Lookbook study",
    featured: "Featured collection",
    newsletter: "Newsletter intake",
    ethos: "Brand ethos"
};
const defaultHomepageSectionOrder = [
    "ticker",
    "features",
    "lookbook",
    "featured",
    "newsletter",
    "ethos"
];
const defaultHeroSlides = [
    {
        imgSrc: "/slide-dragon-1.jpg",
        subtitle: "The Dragon Series | Limited Edition",
        title: "MEDITERRANEAN ORANGE COTTON FLEECE.",
        primaryBtnText: "Shop Orange",
        primaryBtnHref: "/search?q=orange"
    },
    {
        imgSrc: "/slide-dragon-2.jpg",
        subtitle: "The Dragon Series | Limited Edition",
        title: "OBSIDIAN BLACK POST-ACTIVE KNIT.",
        primaryBtnText: "Shop Obsidian",
        primaryBtnHref: "/search?q=black"
    },
    {
        imgSrc: "/slide-dragon-3.jpg",
        subtitle: "The Dragon Series | Limited Edition",
        title: "CREAM ALABASTER HEAVYWEIGHT SWEATER.",
        primaryBtnText: "Shop Alabaster",
        primaryBtnHref: "/search?q=cream"
    },
    {
        imgSrc: "/slide-dragon-4.jpg",
        subtitle: "The Dragon Series | Limited Edition",
        title: "CORAL PINK CONTUSION SWEATSHIRT.",
        primaryBtnText: "Shop Coral",
        primaryBtnHref: "/search?q=coral"
    },
    {
        imgSrc: "/slide-dragon-5.jpg",
        subtitle: "The Dragon Series | Limited Edition",
        title: "PASTEL SUNLIGHT HEAVY COTTON CREW.",
        primaryBtnText: "Shop Sunlight",
        primaryBtnHref: "/search?q=yellow"
    }
];
function normalizeHomepageSectionOrder(input) {
    const allowed = new Set(defaultHomepageSectionOrder);
    const ordered = (input || []).filter((key)=>typeof key === "string" && allowed.has(key));
    return [
        ...ordered,
        ...defaultHomepageSectionOrder.filter((key)=>!ordered.includes(key))
    ];
}
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/site-design.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultSiteDesign",
    ()=>defaultSiteDesign,
    "getSiteDesignSettings",
    ()=>getSiteDesignSettings,
    "saveSiteDesignSettings",
    ()=>saveSiteDesignSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$blob$40$2$2e$4$2e$0$2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/@vercel+blob@2.4.0/node_modules/@vercel/blob/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/site-design-schema.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const defaultSiteDesign = {
    brandName: "KSHADP",
    brandDescriptor: "Atelier Cores",
    logoUrl: "/logo_3.png",
    showHeaderLogo: true,
    announcement: "FREE SHIPPING ON ALL ORDERS OVER $150",
    accentColor: "#C5A880",
    backgroundColor: "#0A0908",
    foregroundColor: "#F5F3EF",
    heroImageOpacity: 0.35,
    overlayStrength: 0.68,
    motionIntensity: 1,
    fogEnabled: true,
    lightSweepEnabled: true,
    floorReflectionEnabled: true,
    grainEnabled: true,
    roomImages: [
        "/cinematic_room_1.jpg",
        "/cinematic_room_2.jpg",
        "/cinematic_room_3.jpg"
    ],
    heroSlides: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultHeroSlides"],
    homepageSectionOrder: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultHomepageSectionOrder"],
    updatedAt: new Date(0).toISOString()
};
const blobPath = "settings/site-design.json";
const localPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), ".data", "site-design.json");
function normalizeSettings(input) {
    const heroSlides = input.heroSlides?.map((slide, index)=>({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultHeroSlides"][index % __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultHeroSlides"].length],
            ...slide
        })) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultHeroSlides"];
    const homepageSectionOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeHomepageSectionOrder"])(input.homepageSectionOrder);
    return {
        ...defaultSiteDesign,
        ...input,
        roomImages: [
            input.roomImages?.[0] || defaultSiteDesign.roomImages[0],
            input.roomImages?.[1] || defaultSiteDesign.roomImages[1],
            input.roomImages?.[2] || defaultSiteDesign.roomImages[2]
        ],
        heroSlides,
        homepageSectionOrder
    };
}
async function readBlobSettings() {
    if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$blob$40$2$2e$4$2e$0$2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])({
        prefix: blobPath,
        limit: 1
    });
    const blob = result.blobs.find((item)=>item.pathname === blobPath);
    if (!blob) return null;
    const response = await fetch(blob.url, {
        cache: "no-store"
    });
    if (!response.ok) return null;
    return normalizeSettings(await response.json());
}
async function readLocalSettings() {
    try {
        const value = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(localPath, "utf8");
        return normalizeSettings(JSON.parse(value));
    } catch  {
        return null;
    }
}
async function getSiteDesignSettings() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    try {
        const persisted = process.env.BLOB_READ_WRITE_TOKEN ? await readBlobSettings() : await readLocalSettings();
        return persisted || defaultSiteDesign;
    } catch (error) {
        console.error("Unable to load site design settings", error);
        return defaultSiteDesign;
    }
}
async function saveSiteDesignSettings(settings) {
    const normalized = normalizeSettings(settings);
    if (process.env.BLOB_READ_WRITE_TOKEN) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$blob$40$2$2e$4$2e$0$2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["put"])(blobPath, JSON.stringify(normalized), {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
            cacheControlMaxAge: 0,
            contentType: "application/json"
        });
        return normalized;
    }
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(localPath), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(localPath, JSON.stringify(normalized, null, 2), "utf8");
    return normalized;
}
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/admin-dashboard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminDashboardSummary",
    ()=>getAdminDashboardSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/site-design.ts [app-route] (ecmascript) <locals>");
;
;
function formatMoney(amount, currencyCode) {
    const value = Number(amount);
    if (!Number.isFinite(value)) {
        return `${amount} ${currencyCode}`;
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCode
    }).format(value);
}
function getShopifyConfigStatus() {
    const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN || "";
    const hasToken = Boolean(process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN);
    if (!shopifyDomain || !hasToken) {
        return {
            shopifyDomain: shopifyDomain || "Not configured",
            shopifyStatus: "missing",
            shopifyMessage: "Add Shopify domain and Storefront API token."
        };
    }
    return {
        shopifyDomain,
        shopifyStatus: "connected",
        shopifyMessage: "Storefront API credentials are configured."
    };
}
async function getAdminDashboardSummary() {
    const shopifyConfig = getShopifyConfigStatus();
    const design = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSiteDesignSettings"])();
    const [productsResult, collectionsResult] = await Promise.allSettled([
        shopifyConfig.shopifyStatus === "connected" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProducts"])({
            sortKey: "CREATED_AT",
            reverse: true
        }) : Promise.resolve([]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollections"])()
    ]);
    const products = productsResult.status === "fulfilled" ? productsResult.value : [];
    const collections = collectionsResult.status === "fulfilled" ? collectionsResult.value : [];
    const shopifyStatus = productsResult.status === "rejected" ? "error" : shopifyConfig.shopifyStatus;
    return {
        storefront: {
            ...shopifyConfig,
            shopifyStatus,
            shopifyMessage: productsResult.status === "rejected" ? "Shopify credentials are present, but the Storefront API request failed." : shopifyConfig.shopifyMessage,
            blobStatus: process.env.BLOB_READ_WRITE_TOKEN ? "connected" : "missing",
            blobMessage: process.env.BLOB_READ_WRITE_TOKEN ? "Design settings publish to Vercel Blob." : "Design settings publish to local .data during development."
        },
        metrics: {
            products: products.length,
            activeProducts: products.filter((product)=>product.availableForSale).length,
            collections: Math.max(collections.length - 1, 0),
            homepageSections: design.homepageSectionOrder.length
        },
        design: {
            brandName: design.brandName,
            accentColor: design.accentColor,
            updatedAt: design.updatedAt
        },
        products: products.slice(0, 5).map((product)=>({
                title: product.title,
                handle: product.handle,
                availableForSale: product.availableForSale,
                price: formatMoney(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode),
                imageUrl: product.featuredImage?.url,
                updatedAt: product.updatedAt
            }))
    };
}
}),
"[project]/OneDrive/Desktop/the-sanctum/app/api/admin/summary/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/admin-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$admin$2d$dashboard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/admin-dashboard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
async function GET(req) {
    const hasToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAdminApiToken"])(req.headers.get("authorization"));
    const hasSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdminAuthenticated"])();
    if (!hasToken && !hasSession) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$admin$2d$dashboard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAdminDashboardSummary"])());
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d6871c0e._.js.map