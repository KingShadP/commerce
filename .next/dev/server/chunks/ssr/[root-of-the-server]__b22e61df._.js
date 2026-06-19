module.exports = [
"[project]/OneDrive/Desktop/the-sanctum/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Desktop/the-sanctum/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Desktop/the-sanctum/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/app/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/the-sanctum/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/app/search/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/search/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/app/search/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/search/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/mock.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_RAW_COLLECTIONS",
    ()=>MOCK_RAW_COLLECTIONS,
    "MOCK_RAW_PRODUCTS",
    ()=>MOCK_RAW_PRODUCTS,
    "adaptMockProduct",
    ()=>adaptMockProduct,
    "getMockCollections",
    ()=>getMockCollections,
    "getMockProducts",
    ()=>getMockProducts
]);
const MOCK_RAW_PRODUCTS = [
    {
        id: "SKM-M-01",
        handle: "onyx-ribbed-boxer-brief",
        title: "Ribbed Boxer Brief",
        description: "Engineered with a supportive ribbed texture and moisture-wicking premium stretch modal. Fits close to the body, keeping shape and support all day. Part of the SKIMS Mens Core Foundations collection.",
        price: "28.00",
        imgUrl: "https://images.unsplash.com/photo-1582830359871-d915b3997841?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1582830359871-d915b3997841?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "95% Modal / 5% Elastane",
            "Breathable Ribbed knit",
            "Supportive contoured pouch",
            "No-roll elastic waistband"
        ],
        colors: [
            {
                name: "Onyx",
                hex: "#12100E"
            },
            {
                name: "Concrete",
                hex: "#A8A39D"
            },
            {
                name: "Cocoa",
                hex: "#5C4F44"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        variants: [
            {
                id: "v-box-1",
                title: "Onyx / S",
                price: "28.00"
            },
            {
                id: "v-box-2",
                title: "Onyx / M",
                price: "28.00"
            },
            {
                id: "v-box-3",
                title: "Onyx / L",
                price: "28.00"
            },
            {
                id: "v-box-4",
                title: "Concrete / M",
                price: "28.00"
            },
            {
                id: "v-box-5",
                title: "Cocoa / L",
                price: "28.00"
            }
        ]
    },
    {
        id: "SKM-M-02",
        handle: "sands-stretch-muscle-tank",
        title: "Stretch Muscle Tank",
        description: "Designed to contour and definition. Made with a heavy-weight compressive cotton blend that smooths and shapes the torso. Perfect as a base layer or worn solo as premium casual wear.",
        price: "36.00",
        imgUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "88% Cotton / 12% Spandex",
            "Torso contour compression",
            "Low profile flatlock seams",
            "Extended hem length"
        ],
        colors: [
            {
                name: "Sand",
                hex: "#E6DEC9"
            },
            {
                name: "Onyx",
                hex: "#12100E"
            },
            {
                name: "Clay",
                hex: "#AC9E8F"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        variants: [
            {
                id: "v-tank-1",
                title: "Sand / M",
                price: "36.00"
            },
            {
                id: "v-tank-2",
                title: "Onyx / L",
                price: "36.00"
            },
            {
                id: "v-tank-3",
                title: "Clay / M",
                price: "36.00"
            }
        ]
    },
    {
        id: "SKM-M-03",
        handle: "cocoa-fleece-lounge-hoodie",
        title: "Fleece Lounge Hoodie",
        description: "An ultra-plush oversized pullover crafted from brushed back heavyweight fleece. Tailored with dropped shoulders and a double-lined hood, creating a structured aesthetic with ultimate comfort.",
        price: "88.00",
        imgUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "80% Cotton / 20% Polyester",
            "420 GSM heavy fleece",
            "Oversized silhouette",
            "Kangaroo pocket with hidden pouch"
        ],
        colors: [
            {
                name: "Cocoa",
                hex: "#5C4F44"
            },
            {
                name: "Concrete",
                hex: "#A8A39D"
            },
            {
                name: "Onyx",
                hex: "#12100E"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        variants: [
            {
                id: "v-hood-1",
                title: "Cocoa / M",
                price: "88.00"
            },
            {
                id: "v-hood-2",
                title: "Concrete / L",
                price: "88.00"
            },
            {
                id: "v-hood-3",
                title: "Onyx / XL",
                price: "88.00"
            }
        ]
    },
    {
        id: "SKM-M-04",
        handle: "concrete-knit-sleep-pants",
        title: "Knit Sleep Pants",
        description: "Crafted from fluid knit modal with a silk-like finish. Designed for absolute comfort with a loose fit, straight leg, and pockets. Ideal for sleep or elite loungewear.",
        price: "56.00",
        imgUrl: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "93% Modal / 7% Spandex",
            "Fluid straight leg cut",
            "Side-seam pockets",
            "Tonal drawcord waist"
        ],
        colors: [
            {
                name: "Concrete",
                hex: "#A8A39D"
            },
            {
                name: "Sand",
                hex: "#E6DEC9"
            },
            {
                name: "Onyx",
                hex: "#12100E"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        variants: [
            {
                id: "v-pant-1",
                title: "Concrete / M",
                price: "56.00"
            },
            {
                id: "v-pant-2",
                title: "Sand / M",
                price: "56.00"
            },
            {
                id: "v-pant-3",
                title: "Onyx / L",
                price: "56.00"
            }
        ]
    },
    {
        id: "SKM-M-05",
        handle: "clay-lounge-tee",
        title: "Lounge Crewneck Tee",
        description: "The ultimate luxury base tee. Cut in a classic crewneck profile with high-recovery ribbing at the neck. Woven from breathable cotton-modal fibers that feel cool against the skin.",
        price: "34.00",
        imgUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "50% Pima Cotton / 50% Modal",
            "Midweight breathability",
            "Double needle stitched hems",
            "Preshrunk luxury finish"
        ],
        colors: [
            {
                name: "Clay",
                hex: "#AC9E8F"
            },
            {
                name: "Sand",
                hex: "#E6DEC9"
            },
            {
                name: "Onyx",
                hex: "#12100E"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        variants: [
            {
                id: "v-tee-1",
                title: "Clay / M",
                price: "34.00"
            },
            {
                id: "v-tee-2",
                title: "Sand / L",
                price: "34.00"
            },
            {
                id: "v-tee-3",
                title: "Onyx / L",
                price: "34.00"
            }
        ]
    },
    {
        id: "SKM-M-06",
        handle: "compression-muscle-ls",
        title: "Compression Sleeve Longsleeve",
        description: "High-performance compression longsleeve engineered to lock down body core heat and outline chest definitions. Built with dual-vent underarm meshes and seamless shoulder joints.",
        price: "48.00",
        imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=800&auto=format&fit=crop"
        ],
        specs: [
            "82% Nylon / 18% Elastane",
            "High-recovery stretch matrix",
            "Seamless shoulder geometry",
            "Breathable mesh joints"
        ],
        colors: [
            {
                name: "Onyx",
                hex: "#12100E"
            },
            {
                name: "Concrete",
                hex: "#A8A39D"
            }
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        variants: [
            {
                id: "v-ls-1",
                title: "Onyx / M",
                price: "48.00"
            },
            {
                id: "v-ls-2",
                title: "Onyx / L",
                price: "48.00"
            },
            {
                id: "v-ls-3",
                title: "Concrete / M",
                price: "48.00"
            }
        ]
    }
];
const MOCK_RAW_COLLECTIONS = [
    {
        handle: "new-arrivals",
        title: "New Arrivals",
        description: "The latest high-compression support shapes and premium loungewear sets for the active male.",
        imgUrl: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
    },
    {
        handle: "compression",
        title: "Supportive Compression",
        description: "Advanced shaping garments designed to smooth, define, and compress with comfort.",
        imgUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop"
    },
    {
        handle: "loungewear",
        title: "Premium Loungewear",
        description: "Heavyweight hoodies, modal tees, and relaxed sleep pants in tonal nude and dark colorways.",
        imgUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
    },
    {
        handle: "underwear",
        title: "Foundation Underwear",
        description: "Ergonomic modal ribbed boxers, trunks, and briefs engineered for everyday support.",
        imgUrl: "https://images.unsplash.com/photo-1582830359871-d915b3997841?q=80&w=800&auto=format&fit=crop"
    }
];
function adaptMockProduct(p) {
    const options = [
        {
            id: `opt-${p.id}-color`,
            name: "Color",
            values: p.colors.map((c)=>c.name)
        },
        {
            id: `opt-${p.id}-size`,
            name: "Size",
            values: p.sizes
        }
    ];
    const reshapedVariants = p.variants.map((v)=>{
        const parts = v.title.split("/");
        const colorVal = parts[0]?.trim() || "Onyx";
        const sizeVal = parts[1]?.trim() || "M";
        return {
            id: v.id,
            title: v.title,
            availableForSale: true,
            selectedOptions: [
                {
                    name: "Color",
                    value: colorVal
                },
                {
                    name: "Size",
                    value: sizeVal
                }
            ],
            price: {
                amount: v.price,
                currencyCode: "USD"
            }
        };
    });
    return {
        id: p.id,
        handle: p.handle,
        availableForSale: true,
        title: p.title,
        description: p.description,
        descriptionHtml: `<p>${p.description}</p>`,
        options,
        priceRange: {
            minVariantPrice: {
                amount: p.price,
                currencyCode: "USD"
            },
            maxVariantPrice: {
                amount: p.price,
                currencyCode: "USD"
            }
        },
        variants: reshapedVariants,
        featuredImage: {
            url: p.imgUrl,
            altText: p.title,
            width: 600,
            height: 800
        },
        images: p.gallery.map((url)=>({
                url,
                altText: p.title,
                width: 600,
                height: 800
            })),
        seo: {
            title: p.title,
            description: p.description
        },
        tags: [
            "mock",
            ...p.colors.map((c)=>c.name.toLowerCase())
        ],
        updatedAt: new Date().toISOString()
    };
}
function getMockProducts() {
    return MOCK_RAW_PRODUCTS.map(adaptMockProduct);
}
function getMockCollections() {
    return MOCK_RAW_COLLECTIONS.map((c)=>({
            handle: c.handle,
            title: c.title,
            description: c.description,
            seo: {
                title: c.title,
                description: c.description
            },
            updatedAt: new Date().toISOString(),
            path: `/search/${c.handle}`
        }));
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx <module evaluation>", "default");
}),
"[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx", "default");
}),
"[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$CollectionCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$CollectionCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$CollectionCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/shopify/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/mock.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$CollectionCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/CollectionCatalogClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateMetadata(props) {
    const params = await props.params;
    let collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollection"])(params.collection);
    if (!collection) {
        const mockCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMockCollections"])();
        collection = mockCols.find((c)=>c.handle === params.collection);
    }
    if (!collection) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return {
        title: collection.seo?.title || collection.title,
        description: collection.seo?.description || collection.description || `${collection.title} products`
    };
}
async function CategoryPage(props) {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const { sort } = searchParams;
    const { sortKey, reverse } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sorting"].find((item)=>item.slug === sort) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultSort"];
    let products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$shopify$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionProducts"])({
        collection: params.collection,
        sortKey,
        reverse
    });
    if (products.length === 0) {
        const mockProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMockProducts"])();
        const handle = params.collection.toLowerCase();
        if (handle === "compression") {
            products = mockProducts.filter((p)=>p.handle.includes("tank") || p.handle.includes("ls") || p.handle.includes("compression"));
        } else if (handle === "loungewear") {
            products = mockProducts.filter((p)=>p.handle.includes("hoodie") || p.handle.includes("pants") || p.handle.includes("tee"));
        } else if (handle === "underwear") {
            products = mockProducts.filter((p)=>p.handle.includes("boxer") || p.handle.includes("underwear"));
        } else {
            products = mockProducts;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-mono text-[10px] text-skims-sand/40 uppercase",
                children: "// LOADING CLASSIFIED NODES..."
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx",
                lineNumber: 63,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$CollectionCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                products: products
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/search/[collection]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b22e61df._.js.map