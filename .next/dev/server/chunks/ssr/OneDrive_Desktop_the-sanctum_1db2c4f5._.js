module.exports = [
"[project]/OneDrive/Desktop/the-sanctum/lib/site-design-schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHeroSlides",
    ()=>defaultHeroSlides,
    "defaultHomepageSectionOrder",
    ()=>defaultHomepageSectionOrder,
    "defaultMediaLibrary",
    ()=>defaultMediaLibrary,
    "defaultPageCreatives",
    ()=>defaultPageCreatives,
    "defaultProductCreatives",
    ()=>defaultProductCreatives,
    "homepageSectionLabels",
    ()=>homepageSectionLabels,
    "normalizeHomepageSectionOrder",
    ()=>normalizeHomepageSectionOrder,
    "normalizeMediaLibrary",
    ()=>normalizeMediaLibrary,
    "normalizePageCreatives",
    ()=>normalizePageCreatives,
    "normalizeProductCreatives",
    ()=>normalizeProductCreatives
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
const defaultMediaLibrary = [
    {
        id: "campaign-dragon",
        label: "Dragon campaign still",
        url: "/slide-dragon-1.jpg",
        alt: "Dragon campaign product atmosphere",
        kind: "image"
    },
    {
        id: "atelier-room",
        label: "Atelier room",
        url: "/cinematic_room_1.jpg",
        alt: "Dark architectural atelier room",
        kind: "image"
    },
    {
        id: "product-study",
        label: "Product study",
        url: "/slide-dragon-3.jpg",
        alt: "Product campaign study",
        kind: "image"
    }
];
const defaultPageCreatives = [
    {
        handle: "about",
        eyebrow: "Brand dossier",
        title: "The Sanctum archive",
        heroImage: "/cinematic_room_2.jpg",
        intro: "Control page-level atmosphere, campaign media, and editorial direction from the admin console.",
        ctaText: "Explore collection",
        ctaHref: "/search"
    },
    {
        handle: "contact",
        eyebrow: "Client channel",
        title: "Private support desk",
        heroImage: "/cinematic_room_3.jpg",
        intro: "Shape page intros and calls to action without changing Shopify page body copy.",
        ctaText: "Shop all",
        ctaHref: "/search"
    }
];
const defaultProductCreatives = [
    {
        handle: "dragon-anatomy-t-shirt-vintage-scientific-illustration-tee",
        badge: "Dragon edit",
        heroImage: "/slide-dragon-1.jpg",
        hoverImage: "/slide-dragon-2.jpg",
        galleryImages: [
            "/slide-dragon-1.jpg",
            "/slide-dragon-2.jpg"
        ],
        detailNote: "Custom creative direction controlled from the admin console."
    },
    {
        handle: "embroidered-chest-dragon-hoodie-minimal-crest-fleece-pullover",
        badge: "Crest study",
        heroImage: "/slide-dragon-4.jpg",
        hoverImage: "/slide-dragon-5.jpg",
        galleryImages: [
            "/slide-dragon-4.jpg",
            "/slide-dragon-5.jpg"
        ],
        detailNote: "Use product handles to override PDP and catalog imagery."
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
function normalizeMediaLibrary(input) {
    const assets = input?.length ? input : defaultMediaLibrary;
    return assets.slice(0, 12).map((asset, index)=>({
            id: asset.id || `media-${index + 1}`,
            label: asset.label || `Media ${index + 1}`,
            url: asset.url || defaultMediaLibrary[index % defaultMediaLibrary.length].url,
            alt: asset.alt || asset.label || `Media ${index + 1}`,
            kind: asset.kind === "video" ? "video" : "image"
        })).filter((asset)=>asset.url);
}
function normalizePageCreatives(input) {
    const pages = input?.length ? input : defaultPageCreatives;
    return pages.slice(0, 10).map((page, index)=>({
            handle: page.handle || defaultPageCreatives[index % defaultPageCreatives.length].handle,
            eyebrow: page.eyebrow || "Page system",
            title: page.title || "Editorial page",
            heroImage: page.heroImage || defaultPageCreatives[index % defaultPageCreatives.length].heroImage,
            intro: page.intro || "",
            ctaText: page.ctaText || "Explore",
            ctaHref: page.ctaHref || "/search"
        })).filter((page)=>page.handle);
}
function normalizeProductCreatives(input) {
    const products = input?.length ? input : defaultProductCreatives;
    return products.slice(0, 16).map((product, index)=>({
            handle: product.handle || defaultProductCreatives[index % defaultProductCreatives.length].handle,
            badge: product.badge || "Core series",
            heroImage: product.heroImage || defaultProductCreatives[index % defaultProductCreatives.length].heroImage,
            hoverImage: product.hoverImage || product.heroImage || "",
            galleryImages: (product.galleryImages || []).map((url)=>url.trim()).filter(Boolean).slice(0, 6),
            detailNote: product.detailNote || ""
        })).filter((product)=>product.handle);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/app/admin/data:618ce6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a37c4e36a8e1147d7a567733181ee0a8076fb12c":"logoutAdmin"},"OneDrive/Desktop/the-sanctum/app/admin/actions.ts",""] */ __turbopack_context__.s([
    "logoutAdmin",
    ()=>logoutAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var logoutAdmin = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00a37c4e36a8e1147d7a567733181ee0a8076fb12c", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logoutAdmin"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlQWRtaW5TZXNzaW9uLFxuICBkZXN0cm95QWRtaW5TZXNzaW9uLFxuICBpc0FkbWluQXV0aGVudGljYXRlZCxcbiAgdmVyaWZ5QWRtaW5QYXNzY29kZSxcbn0gZnJvbSBcImxpYi9hZG1pbi1hdXRoXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0U2l0ZURlc2lnbixcbiAgbm9ybWFsaXplSG9tZXBhZ2VTZWN0aW9uT3JkZXIsXG4gIG5vcm1hbGl6ZU1lZGlhTGlicmFyeSxcbiAgbm9ybWFsaXplUGFnZUNyZWF0aXZlcyxcbiAgbm9ybWFsaXplUHJvZHVjdENyZWF0aXZlcyxcbiAgc2F2ZVNpdGVEZXNpZ25TZXR0aW5ncyxcbiAgdHlwZSBTaXRlRGVzaWduU2V0dGluZ3MsXG59IGZyb20gXCJsaWIvc2l0ZS1kZXNpZ25cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBjb2xvclBhdHRlcm4gPSAvXiNbMC05YS1mXXs2fSQvaTtcblxuZnVuY3Rpb24gdGV4dChmb3JtRGF0YTogRm9ybURhdGEsIGtleTogc3RyaW5nLCBmYWxsYmFjazogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KGtleSk/LnRvU3RyaW5nKCkudHJpbSgpO1xuICByZXR1cm4gdmFsdWUgfHwgZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBrZXk6IHN0cmluZyxcbiAgZmFsbGJhY2s6IG51bWJlcixcbiAgbWluOiBudW1iZXIsXG4gIG1heDogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IHZhbHVlID0gTnVtYmVyKGZvcm1EYXRhLmdldChrZXkpKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSlcbiAgICA/IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpXG4gICAgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gY29sb3IoZm9ybURhdGE6IEZvcm1EYXRhLCBrZXk6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZykge1xuICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChrZXkpPy50b1N0cmluZygpIHx8IFwiXCI7XG4gIHJldHVybiBjb2xvclBhdHRlcm4udGVzdCh2YWx1ZSkgPyB2YWx1ZS50b1VwcGVyQ2FzZSgpIDogZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGltYWdlVXJsKGZvcm1EYXRhOiBGb3JtRGF0YSwga2V5OiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpIHtcbiAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoa2V5KT8udG9TdHJpbmcoKS50cmltKCkgfHwgXCJcIjtcbiAgcmV0dXJuIHZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKVxuICAgID8gdmFsdWVcbiAgICA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBzZWN0aW9uT3JkZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHZhbHVlcyA9IGZvcm1EYXRhXG4gICAgLmdldChcImhvbWVwYWdlU2VjdGlvbk9yZGVyXCIpXG4gICAgPy50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiLFwiKVxuICAgIC5tYXAoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkpO1xuICByZXR1cm4gbm9ybWFsaXplSG9tZXBhZ2VTZWN0aW9uT3JkZXIodmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gbWVkaWFMaWJyYXJ5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICByZXR1cm4gbm9ybWFsaXplTWVkaWFMaWJyYXJ5KFxuICAgIGRlZmF1bHRTaXRlRGVzaWduLm1lZGlhTGlicmFyeS5tYXAoKGFzc2V0LCBpbmRleCkgPT4gKHtcbiAgICAgIGlkOiB0ZXh0KGZvcm1EYXRhLCBgbWVkaWEke2luZGV4fUlkYCwgYXNzZXQuaWQpLFxuICAgICAgbGFiZWw6IHRleHQoZm9ybURhdGEsIGBtZWRpYSR7aW5kZXh9TGFiZWxgLCBhc3NldC5sYWJlbCksXG4gICAgICB1cmw6IGltYWdlVXJsKGZvcm1EYXRhLCBgbWVkaWEke2luZGV4fVVybGAsIGFzc2V0LnVybCksXG4gICAgICBhbHQ6IHRleHQoZm9ybURhdGEsIGBtZWRpYSR7aW5kZXh9QWx0YCwgYXNzZXQuYWx0KSxcbiAgICAgIGtpbmQ6XG4gICAgICAgIGZvcm1EYXRhLmdldChgbWVkaWEke2luZGV4fUtpbmRgKT8udG9TdHJpbmcoKSA9PT0gXCJ2aWRlb1wiXG4gICAgICAgICAgPyBcInZpZGVvXCJcbiAgICAgICAgICA6IFwiaW1hZ2VcIixcbiAgICB9KSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhZ2VDcmVhdGl2ZXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIHJldHVybiBub3JtYWxpemVQYWdlQ3JlYXRpdmVzKFxuICAgIGRlZmF1bHRTaXRlRGVzaWduLnBhZ2VDcmVhdGl2ZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKHtcbiAgICAgIGhhbmRsZTogdGV4dChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUhhbmRsZWAsIHBhZ2UuaGFuZGxlKSxcbiAgICAgIGV5ZWJyb3c6IHRleHQoZm9ybURhdGEsIGBwYWdlJHtpbmRleH1FeWVicm93YCwgcGFnZS5leWVicm93KSxcbiAgICAgIHRpdGxlOiB0ZXh0KGZvcm1EYXRhLCBgcGFnZSR7aW5kZXh9VGl0bGVgLCBwYWdlLnRpdGxlKSxcbiAgICAgIGhlcm9JbWFnZTogaW1hZ2VVcmwoZm9ybURhdGEsIGBwYWdlJHtpbmRleH1IZXJvSW1hZ2VgLCBwYWdlLmhlcm9JbWFnZSksXG4gICAgICBpbnRybzogdGV4dChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUludHJvYCwgcGFnZS5pbnRybyksXG4gICAgICBjdGFUZXh0OiB0ZXh0KGZvcm1EYXRhLCBgcGFnZSR7aW5kZXh9Q3RhVGV4dGAsIHBhZ2UuY3RhVGV4dCksXG4gICAgICBjdGFIcmVmOiBpbWFnZVVybChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUN0YUhyZWZgLCBwYWdlLmN0YUhyZWYpLFxuICAgIH0pKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHJvZHVjdENyZWF0aXZlcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgcmV0dXJuIG5vcm1hbGl6ZVByb2R1Y3RDcmVhdGl2ZXMoXG4gICAgZGVmYXVsdFNpdGVEZXNpZ24ucHJvZHVjdENyZWF0aXZlcy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoe1xuICAgICAgaGFuZGxlOiB0ZXh0KGZvcm1EYXRhLCBgcHJvZHVjdCR7aW5kZXh9SGFuZGxlYCwgcHJvZHVjdC5oYW5kbGUpLFxuICAgICAgYmFkZ2U6IHRleHQoZm9ybURhdGEsIGBwcm9kdWN0JHtpbmRleH1CYWRnZWAsIHByb2R1Y3QuYmFkZ2UpLFxuICAgICAgaGVyb0ltYWdlOiBpbWFnZVVybChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1IZXJvSW1hZ2VgLFxuICAgICAgICBwcm9kdWN0Lmhlcm9JbWFnZSxcbiAgICAgICksXG4gICAgICBob3ZlckltYWdlOiBpbWFnZVVybChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1Ib3ZlckltYWdlYCxcbiAgICAgICAgcHJvZHVjdC5ob3ZlckltYWdlIHx8IHByb2R1Y3QuaGVyb0ltYWdlLFxuICAgICAgKSxcbiAgICAgIGdhbGxlcnlJbWFnZXM6IHRleHQoXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBgcHJvZHVjdCR7aW5kZXh9R2FsbGVyeUltYWdlc2AsXG4gICAgICAgIHByb2R1Y3QuZ2FsbGVyeUltYWdlcy5qb2luKFwiLFwiKSxcbiAgICAgIClcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKCh1cmwpID0+IHVybC50cmltKCkpLFxuICAgICAgZGV0YWlsTm90ZTogdGV4dChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1EZXRhaWxOb3RlYCxcbiAgICAgICAgcHJvZHVjdC5kZXRhaWxOb3RlLFxuICAgICAgKSxcbiAgICB9KSksXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbkFkbWluKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBwYXNzY29kZSA9IGZvcm1EYXRhLmdldChcInBhc3Njb2RlXCIpPy50b1N0cmluZygpIHx8IFwiXCI7XG5cbiAgaWYgKCF2ZXJpZnlBZG1pblBhc3Njb2RlKHBhc3Njb2RlKSkge1xuICAgIHJlZGlyZWN0KFwiL2FkbWluL2xvZ2luP2Vycm9yPWludmFsaWRcIik7XG4gIH1cblxuICBhd2FpdCBjcmVhdGVBZG1pblNlc3Npb24oKTtcbiAgcmVkaXJlY3QoXCIvYWRtaW4vZGVzaWduXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWRtaW4oKSB7XG4gIGF3YWl0IGRlc3Ryb3lBZG1pblNlc3Npb24oKTtcbiAgcmVkaXJlY3QoXCIvYWRtaW4vbG9naW5cIik7XG59XG5cbmV4cG9ydCB0eXBlIFNhdmVEZXNpZ25TdGF0ZSA9IHtcbiAgc3RhdHVzOiBcImlkbGVcIiB8IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZURlc2lnbihcbiAgX3ByZXZpb3VzU3RhdGU6IFNhdmVEZXNpZ25TdGF0ZSxcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKTogUHJvbWlzZTxTYXZlRGVzaWduU3RhdGU+IHtcbiAgaWYgKCEoYXdhaXQgaXNBZG1pbkF1dGhlbnRpY2F0ZWQoKSkpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJZb3VyIGFkbWluIHNlc3Npb24gZXhwaXJlZC5cIiB9O1xuICB9XG5cbiAgY29uc3Qgc2V0dGluZ3M6IFNpdGVEZXNpZ25TZXR0aW5ncyA9IHtcbiAgICBicmFuZE5hbWU6IHRleHQoZm9ybURhdGEsIFwiYnJhbmROYW1lXCIsIGRlZmF1bHRTaXRlRGVzaWduLmJyYW5kTmFtZSksXG4gICAgYnJhbmREZXNjcmlwdG9yOiB0ZXh0KFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImJyYW5kRGVzY3JpcHRvclwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24uYnJhbmREZXNjcmlwdG9yLFxuICAgICksXG4gICAgbG9nb1VybDogaW1hZ2VVcmwoZm9ybURhdGEsIFwibG9nb1VybFwiLCBkZWZhdWx0U2l0ZURlc2lnbi5sb2dvVXJsKSxcbiAgICBzaG93SGVhZGVyTG9nbzogZm9ybURhdGEuZ2V0KFwic2hvd0hlYWRlckxvZ29cIikgPT09IFwib25cIixcbiAgICBhbm5vdW5jZW1lbnQ6IHRleHQoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwiYW5ub3VuY2VtZW50XCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5hbm5vdW5jZW1lbnQsXG4gICAgKSxcbiAgICBhY2NlbnRDb2xvcjogY29sb3IoZm9ybURhdGEsIFwiYWNjZW50Q29sb3JcIiwgZGVmYXVsdFNpdGVEZXNpZ24uYWNjZW50Q29sb3IpLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgKSxcbiAgICBmb3JlZ3JvdW5kQ29sb3I6IGNvbG9yKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImZvcmVncm91bmRDb2xvclwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24uZm9yZWdyb3VuZENvbG9yLFxuICAgICksXG4gICAgaGVyb0ltYWdlT3BhY2l0eTogbnVtYmVyKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImhlcm9JbWFnZU9wYWNpdHlcIixcbiAgICAgIGRlZmF1bHRTaXRlRGVzaWduLmhlcm9JbWFnZU9wYWNpdHksXG4gICAgICAwLFxuICAgICAgMC44LFxuICAgICksXG4gICAgb3ZlcmxheVN0cmVuZ3RoOiBudW1iZXIoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwib3ZlcmxheVN0cmVuZ3RoXCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5vdmVybGF5U3RyZW5ndGgsXG4gICAgICAwLjI1LFxuICAgICAgMC45NSxcbiAgICApLFxuICAgIG1vdGlvbkludGVuc2l0eTogbnVtYmVyKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcIm1vdGlvbkludGVuc2l0eVwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24ubW90aW9uSW50ZW5zaXR5LFxuICAgICAgMCxcbiAgICAgIDEuNSxcbiAgICApLFxuICAgIGZvZ0VuYWJsZWQ6IGZvcm1EYXRhLmdldChcImZvZ0VuYWJsZWRcIikgPT09IFwib25cIixcbiAgICBsaWdodFN3ZWVwRW5hYmxlZDogZm9ybURhdGEuZ2V0KFwibGlnaHRTd2VlcEVuYWJsZWRcIikgPT09IFwib25cIixcbiAgICBmbG9vclJlZmxlY3Rpb25FbmFibGVkOiBmb3JtRGF0YS5nZXQoXCJmbG9vclJlZmxlY3Rpb25FbmFibGVkXCIpID09PSBcIm9uXCIsXG4gICAgZ3JhaW5FbmFibGVkOiBmb3JtRGF0YS5nZXQoXCJncmFpbkVuYWJsZWRcIikgPT09IFwib25cIixcbiAgICByb29tSW1hZ2VzOiBbXG4gICAgICBpbWFnZVVybChmb3JtRGF0YSwgXCJyb29tSW1hZ2UwXCIsIGRlZmF1bHRTaXRlRGVzaWduLnJvb21JbWFnZXNbMF0pLFxuICAgICAgaW1hZ2VVcmwoZm9ybURhdGEsIFwicm9vbUltYWdlMVwiLCBkZWZhdWx0U2l0ZURlc2lnbi5yb29tSW1hZ2VzWzFdKSxcbiAgICAgIGltYWdlVXJsKGZvcm1EYXRhLCBcInJvb21JbWFnZTJcIiwgZGVmYXVsdFNpdGVEZXNpZ24ucm9vbUltYWdlc1syXSksXG4gICAgXSxcbiAgICBoZXJvU2xpZGVzOiBkZWZhdWx0U2l0ZURlc2lnbi5oZXJvU2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoe1xuICAgICAgaW1nU3JjOiBpbWFnZVVybChmb3JtRGF0YSwgYGhlcm9TbGlkZSR7aW5kZXh9SW1hZ2VgLCBzbGlkZS5pbWdTcmMpLFxuICAgICAgc3VidGl0bGU6IHRleHQoZm9ybURhdGEsIGBoZXJvU2xpZGUke2luZGV4fVN1YnRpdGxlYCwgc2xpZGUuc3VidGl0bGUpLFxuICAgICAgdGl0bGU6IHRleHQoZm9ybURhdGEsIGBoZXJvU2xpZGUke2luZGV4fVRpdGxlYCwgc2xpZGUudGl0bGUpLFxuICAgICAgcHJpbWFyeUJ0blRleHQ6IHRleHQoXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBgaGVyb1NsaWRlJHtpbmRleH1CdXR0b25UZXh0YCxcbiAgICAgICAgc2xpZGUucHJpbWFyeUJ0blRleHQsXG4gICAgICApLFxuICAgICAgcHJpbWFyeUJ0bkhyZWY6IGltYWdlVXJsKFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgYGhlcm9TbGlkZSR7aW5kZXh9QnV0dG9uSHJlZmAsXG4gICAgICAgIHNsaWRlLnByaW1hcnlCdG5IcmVmLFxuICAgICAgKSxcbiAgICB9KSksXG4gICAgbWVkaWFMaWJyYXJ5OiBtZWRpYUxpYnJhcnkoZm9ybURhdGEpLFxuICAgIHBhZ2VDcmVhdGl2ZXM6IHBhZ2VDcmVhdGl2ZXMoZm9ybURhdGEpLFxuICAgIHByb2R1Y3RDcmVhdGl2ZXM6IHByb2R1Y3RDcmVhdGl2ZXMoZm9ybURhdGEpLFxuICAgIGhvbWVwYWdlU2VjdGlvbk9yZGVyOiBzZWN0aW9uT3JkZXIoZm9ybURhdGEpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgc2F2ZVNpdGVEZXNpZ25TZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIsIFwibGF5b3V0XCIpO1xuICAgIHJldHVybiB7IHN0YXR1czogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwiU3RvcmVmcm9udCBkZXNpZ24gcHVibGlzaGVkLlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBzYXZlIHNpdGUgZGVzaWduXCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIkRlc2lnbiBjb3VsZCBub3QgYmUgc2F2ZWQuIENoZWNrIHRoZSBjb25maWd1cmVkIHN0b3JhZ2UgY29ubmVjdGlvbi5cIixcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNUQW9Jc0IifQ==
}),
"[project]/OneDrive/Desktop/the-sanctum/app/admin/data:e49508 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60f38a43adfa638d0e9ca727f0fb72a9fb486621bf":"saveDesign"},"OneDrive/Desktop/the-sanctum/app/admin/actions.ts",""] */ __turbopack_context__.s([
    "saveDesign",
    ()=>saveDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var saveDesign = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f38a43adfa638d0e9ca727f0fb72a9fb486621bf", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveDesign"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlQWRtaW5TZXNzaW9uLFxuICBkZXN0cm95QWRtaW5TZXNzaW9uLFxuICBpc0FkbWluQXV0aGVudGljYXRlZCxcbiAgdmVyaWZ5QWRtaW5QYXNzY29kZSxcbn0gZnJvbSBcImxpYi9hZG1pbi1hdXRoXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0U2l0ZURlc2lnbixcbiAgbm9ybWFsaXplSG9tZXBhZ2VTZWN0aW9uT3JkZXIsXG4gIG5vcm1hbGl6ZU1lZGlhTGlicmFyeSxcbiAgbm9ybWFsaXplUGFnZUNyZWF0aXZlcyxcbiAgbm9ybWFsaXplUHJvZHVjdENyZWF0aXZlcyxcbiAgc2F2ZVNpdGVEZXNpZ25TZXR0aW5ncyxcbiAgdHlwZSBTaXRlRGVzaWduU2V0dGluZ3MsXG59IGZyb20gXCJsaWIvc2l0ZS1kZXNpZ25cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBjb2xvclBhdHRlcm4gPSAvXiNbMC05YS1mXXs2fSQvaTtcblxuZnVuY3Rpb24gdGV4dChmb3JtRGF0YTogRm9ybURhdGEsIGtleTogc3RyaW5nLCBmYWxsYmFjazogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KGtleSk/LnRvU3RyaW5nKCkudHJpbSgpO1xuICByZXR1cm4gdmFsdWUgfHwgZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICBrZXk6IHN0cmluZyxcbiAgZmFsbGJhY2s6IG51bWJlcixcbiAgbWluOiBudW1iZXIsXG4gIG1heDogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IHZhbHVlID0gTnVtYmVyKGZvcm1EYXRhLmdldChrZXkpKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSlcbiAgICA/IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpXG4gICAgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gY29sb3IoZm9ybURhdGE6IEZvcm1EYXRhLCBrZXk6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZykge1xuICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChrZXkpPy50b1N0cmluZygpIHx8IFwiXCI7XG4gIHJldHVybiBjb2xvclBhdHRlcm4udGVzdCh2YWx1ZSkgPyB2YWx1ZS50b1VwcGVyQ2FzZSgpIDogZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGltYWdlVXJsKGZvcm1EYXRhOiBGb3JtRGF0YSwga2V5OiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpIHtcbiAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoa2V5KT8udG9TdHJpbmcoKS50cmltKCkgfHwgXCJcIjtcbiAgcmV0dXJuIHZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKVxuICAgID8gdmFsdWVcbiAgICA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBzZWN0aW9uT3JkZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHZhbHVlcyA9IGZvcm1EYXRhXG4gICAgLmdldChcImhvbWVwYWdlU2VjdGlvbk9yZGVyXCIpXG4gICAgPy50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiLFwiKVxuICAgIC5tYXAoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkpO1xuICByZXR1cm4gbm9ybWFsaXplSG9tZXBhZ2VTZWN0aW9uT3JkZXIodmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gbWVkaWFMaWJyYXJ5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICByZXR1cm4gbm9ybWFsaXplTWVkaWFMaWJyYXJ5KFxuICAgIGRlZmF1bHRTaXRlRGVzaWduLm1lZGlhTGlicmFyeS5tYXAoKGFzc2V0LCBpbmRleCkgPT4gKHtcbiAgICAgIGlkOiB0ZXh0KGZvcm1EYXRhLCBgbWVkaWEke2luZGV4fUlkYCwgYXNzZXQuaWQpLFxuICAgICAgbGFiZWw6IHRleHQoZm9ybURhdGEsIGBtZWRpYSR7aW5kZXh9TGFiZWxgLCBhc3NldC5sYWJlbCksXG4gICAgICB1cmw6IGltYWdlVXJsKGZvcm1EYXRhLCBgbWVkaWEke2luZGV4fVVybGAsIGFzc2V0LnVybCksXG4gICAgICBhbHQ6IHRleHQoZm9ybURhdGEsIGBtZWRpYSR7aW5kZXh9QWx0YCwgYXNzZXQuYWx0KSxcbiAgICAgIGtpbmQ6XG4gICAgICAgIGZvcm1EYXRhLmdldChgbWVkaWEke2luZGV4fUtpbmRgKT8udG9TdHJpbmcoKSA9PT0gXCJ2aWRlb1wiXG4gICAgICAgICAgPyBcInZpZGVvXCJcbiAgICAgICAgICA6IFwiaW1hZ2VcIixcbiAgICB9KSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhZ2VDcmVhdGl2ZXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIHJldHVybiBub3JtYWxpemVQYWdlQ3JlYXRpdmVzKFxuICAgIGRlZmF1bHRTaXRlRGVzaWduLnBhZ2VDcmVhdGl2ZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKHtcbiAgICAgIGhhbmRsZTogdGV4dChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUhhbmRsZWAsIHBhZ2UuaGFuZGxlKSxcbiAgICAgIGV5ZWJyb3c6IHRleHQoZm9ybURhdGEsIGBwYWdlJHtpbmRleH1FeWVicm93YCwgcGFnZS5leWVicm93KSxcbiAgICAgIHRpdGxlOiB0ZXh0KGZvcm1EYXRhLCBgcGFnZSR7aW5kZXh9VGl0bGVgLCBwYWdlLnRpdGxlKSxcbiAgICAgIGhlcm9JbWFnZTogaW1hZ2VVcmwoZm9ybURhdGEsIGBwYWdlJHtpbmRleH1IZXJvSW1hZ2VgLCBwYWdlLmhlcm9JbWFnZSksXG4gICAgICBpbnRybzogdGV4dChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUludHJvYCwgcGFnZS5pbnRybyksXG4gICAgICBjdGFUZXh0OiB0ZXh0KGZvcm1EYXRhLCBgcGFnZSR7aW5kZXh9Q3RhVGV4dGAsIHBhZ2UuY3RhVGV4dCksXG4gICAgICBjdGFIcmVmOiBpbWFnZVVybChmb3JtRGF0YSwgYHBhZ2Uke2luZGV4fUN0YUhyZWZgLCBwYWdlLmN0YUhyZWYpLFxuICAgIH0pKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHJvZHVjdENyZWF0aXZlcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgcmV0dXJuIG5vcm1hbGl6ZVByb2R1Y3RDcmVhdGl2ZXMoXG4gICAgZGVmYXVsdFNpdGVEZXNpZ24ucHJvZHVjdENyZWF0aXZlcy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoe1xuICAgICAgaGFuZGxlOiB0ZXh0KGZvcm1EYXRhLCBgcHJvZHVjdCR7aW5kZXh9SGFuZGxlYCwgcHJvZHVjdC5oYW5kbGUpLFxuICAgICAgYmFkZ2U6IHRleHQoZm9ybURhdGEsIGBwcm9kdWN0JHtpbmRleH1CYWRnZWAsIHByb2R1Y3QuYmFkZ2UpLFxuICAgICAgaGVyb0ltYWdlOiBpbWFnZVVybChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1IZXJvSW1hZ2VgLFxuICAgICAgICBwcm9kdWN0Lmhlcm9JbWFnZSxcbiAgICAgICksXG4gICAgICBob3ZlckltYWdlOiBpbWFnZVVybChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1Ib3ZlckltYWdlYCxcbiAgICAgICAgcHJvZHVjdC5ob3ZlckltYWdlIHx8IHByb2R1Y3QuaGVyb0ltYWdlLFxuICAgICAgKSxcbiAgICAgIGdhbGxlcnlJbWFnZXM6IHRleHQoXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBgcHJvZHVjdCR7aW5kZXh9R2FsbGVyeUltYWdlc2AsXG4gICAgICAgIHByb2R1Y3QuZ2FsbGVyeUltYWdlcy5qb2luKFwiLFwiKSxcbiAgICAgIClcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKCh1cmwpID0+IHVybC50cmltKCkpLFxuICAgICAgZGV0YWlsTm90ZTogdGV4dChcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGBwcm9kdWN0JHtpbmRleH1EZXRhaWxOb3RlYCxcbiAgICAgICAgcHJvZHVjdC5kZXRhaWxOb3RlLFxuICAgICAgKSxcbiAgICB9KSksXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbkFkbWluKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBwYXNzY29kZSA9IGZvcm1EYXRhLmdldChcInBhc3Njb2RlXCIpPy50b1N0cmluZygpIHx8IFwiXCI7XG5cbiAgaWYgKCF2ZXJpZnlBZG1pblBhc3Njb2RlKHBhc3Njb2RlKSkge1xuICAgIHJlZGlyZWN0KFwiL2FkbWluL2xvZ2luP2Vycm9yPWludmFsaWRcIik7XG4gIH1cblxuICBhd2FpdCBjcmVhdGVBZG1pblNlc3Npb24oKTtcbiAgcmVkaXJlY3QoXCIvYWRtaW4vZGVzaWduXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWRtaW4oKSB7XG4gIGF3YWl0IGRlc3Ryb3lBZG1pblNlc3Npb24oKTtcbiAgcmVkaXJlY3QoXCIvYWRtaW4vbG9naW5cIik7XG59XG5cbmV4cG9ydCB0eXBlIFNhdmVEZXNpZ25TdGF0ZSA9IHtcbiAgc3RhdHVzOiBcImlkbGVcIiB8IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZURlc2lnbihcbiAgX3ByZXZpb3VzU3RhdGU6IFNhdmVEZXNpZ25TdGF0ZSxcbiAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKTogUHJvbWlzZTxTYXZlRGVzaWduU3RhdGU+IHtcbiAgaWYgKCEoYXdhaXQgaXNBZG1pbkF1dGhlbnRpY2F0ZWQoKSkpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJZb3VyIGFkbWluIHNlc3Npb24gZXhwaXJlZC5cIiB9O1xuICB9XG5cbiAgY29uc3Qgc2V0dGluZ3M6IFNpdGVEZXNpZ25TZXR0aW5ncyA9IHtcbiAgICBicmFuZE5hbWU6IHRleHQoZm9ybURhdGEsIFwiYnJhbmROYW1lXCIsIGRlZmF1bHRTaXRlRGVzaWduLmJyYW5kTmFtZSksXG4gICAgYnJhbmREZXNjcmlwdG9yOiB0ZXh0KFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImJyYW5kRGVzY3JpcHRvclwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24uYnJhbmREZXNjcmlwdG9yLFxuICAgICksXG4gICAgbG9nb1VybDogaW1hZ2VVcmwoZm9ybURhdGEsIFwibG9nb1VybFwiLCBkZWZhdWx0U2l0ZURlc2lnbi5sb2dvVXJsKSxcbiAgICBzaG93SGVhZGVyTG9nbzogZm9ybURhdGEuZ2V0KFwic2hvd0hlYWRlckxvZ29cIikgPT09IFwib25cIixcbiAgICBhbm5vdW5jZW1lbnQ6IHRleHQoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwiYW5ub3VuY2VtZW50XCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5hbm5vdW5jZW1lbnQsXG4gICAgKSxcbiAgICBhY2NlbnRDb2xvcjogY29sb3IoZm9ybURhdGEsIFwiYWNjZW50Q29sb3JcIiwgZGVmYXVsdFNpdGVEZXNpZ24uYWNjZW50Q29sb3IpLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgKSxcbiAgICBmb3JlZ3JvdW5kQ29sb3I6IGNvbG9yKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImZvcmVncm91bmRDb2xvclwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24uZm9yZWdyb3VuZENvbG9yLFxuICAgICksXG4gICAgaGVyb0ltYWdlT3BhY2l0eTogbnVtYmVyKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcImhlcm9JbWFnZU9wYWNpdHlcIixcbiAgICAgIGRlZmF1bHRTaXRlRGVzaWduLmhlcm9JbWFnZU9wYWNpdHksXG4gICAgICAwLFxuICAgICAgMC44LFxuICAgICksXG4gICAgb3ZlcmxheVN0cmVuZ3RoOiBudW1iZXIoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIFwib3ZlcmxheVN0cmVuZ3RoXCIsXG4gICAgICBkZWZhdWx0U2l0ZURlc2lnbi5vdmVybGF5U3RyZW5ndGgsXG4gICAgICAwLjI1LFxuICAgICAgMC45NSxcbiAgICApLFxuICAgIG1vdGlvbkludGVuc2l0eTogbnVtYmVyKFxuICAgICAgZm9ybURhdGEsXG4gICAgICBcIm1vdGlvbkludGVuc2l0eVwiLFxuICAgICAgZGVmYXVsdFNpdGVEZXNpZ24ubW90aW9uSW50ZW5zaXR5LFxuICAgICAgMCxcbiAgICAgIDEuNSxcbiAgICApLFxuICAgIGZvZ0VuYWJsZWQ6IGZvcm1EYXRhLmdldChcImZvZ0VuYWJsZWRcIikgPT09IFwib25cIixcbiAgICBsaWdodFN3ZWVwRW5hYmxlZDogZm9ybURhdGEuZ2V0KFwibGlnaHRTd2VlcEVuYWJsZWRcIikgPT09IFwib25cIixcbiAgICBmbG9vclJlZmxlY3Rpb25FbmFibGVkOiBmb3JtRGF0YS5nZXQoXCJmbG9vclJlZmxlY3Rpb25FbmFibGVkXCIpID09PSBcIm9uXCIsXG4gICAgZ3JhaW5FbmFibGVkOiBmb3JtRGF0YS5nZXQoXCJncmFpbkVuYWJsZWRcIikgPT09IFwib25cIixcbiAgICByb29tSW1hZ2VzOiBbXG4gICAgICBpbWFnZVVybChmb3JtRGF0YSwgXCJyb29tSW1hZ2UwXCIsIGRlZmF1bHRTaXRlRGVzaWduLnJvb21JbWFnZXNbMF0pLFxuICAgICAgaW1hZ2VVcmwoZm9ybURhdGEsIFwicm9vbUltYWdlMVwiLCBkZWZhdWx0U2l0ZURlc2lnbi5yb29tSW1hZ2VzWzFdKSxcbiAgICAgIGltYWdlVXJsKGZvcm1EYXRhLCBcInJvb21JbWFnZTJcIiwgZGVmYXVsdFNpdGVEZXNpZ24ucm9vbUltYWdlc1syXSksXG4gICAgXSxcbiAgICBoZXJvU2xpZGVzOiBkZWZhdWx0U2l0ZURlc2lnbi5oZXJvU2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoe1xuICAgICAgaW1nU3JjOiBpbWFnZVVybChmb3JtRGF0YSwgYGhlcm9TbGlkZSR7aW5kZXh9SW1hZ2VgLCBzbGlkZS5pbWdTcmMpLFxuICAgICAgc3VidGl0bGU6IHRleHQoZm9ybURhdGEsIGBoZXJvU2xpZGUke2luZGV4fVN1YnRpdGxlYCwgc2xpZGUuc3VidGl0bGUpLFxuICAgICAgdGl0bGU6IHRleHQoZm9ybURhdGEsIGBoZXJvU2xpZGUke2luZGV4fVRpdGxlYCwgc2xpZGUudGl0bGUpLFxuICAgICAgcHJpbWFyeUJ0blRleHQ6IHRleHQoXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBgaGVyb1NsaWRlJHtpbmRleH1CdXR0b25UZXh0YCxcbiAgICAgICAgc2xpZGUucHJpbWFyeUJ0blRleHQsXG4gICAgICApLFxuICAgICAgcHJpbWFyeUJ0bkhyZWY6IGltYWdlVXJsKFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgYGhlcm9TbGlkZSR7aW5kZXh9QnV0dG9uSHJlZmAsXG4gICAgICAgIHNsaWRlLnByaW1hcnlCdG5IcmVmLFxuICAgICAgKSxcbiAgICB9KSksXG4gICAgbWVkaWFMaWJyYXJ5OiBtZWRpYUxpYnJhcnkoZm9ybURhdGEpLFxuICAgIHBhZ2VDcmVhdGl2ZXM6IHBhZ2VDcmVhdGl2ZXMoZm9ybURhdGEpLFxuICAgIHByb2R1Y3RDcmVhdGl2ZXM6IHByb2R1Y3RDcmVhdGl2ZXMoZm9ybURhdGEpLFxuICAgIGhvbWVwYWdlU2VjdGlvbk9yZGVyOiBzZWN0aW9uT3JkZXIoZm9ybURhdGEpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgc2F2ZVNpdGVEZXNpZ25TZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIsIFwibGF5b3V0XCIpO1xuICAgIHJldHVybiB7IHN0YXR1czogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwiU3RvcmVmcm9udCBkZXNpZ24gcHVibGlzaGVkLlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBzYXZlIHNpdGUgZGVzaWduXCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIkRlc2lnbiBjb3VsZCBub3QgYmUgc2F2ZWQuIENoZWNrIHRoZSBjb25maWd1cmVkIHN0b3JhZ2UgY29ubmVjdGlvbi5cIixcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQThJc0IifQ==
}),
"[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDesignStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-ssr] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/site-design-schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/.pnpm/next@15.6.0-canary.60_react_60c2d962eb59e8fdc3ce5782532c32a4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$app$2f$admin$2f$data$3a$618ce6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/admin/data:618ce6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$app$2f$admin$2f$data$3a$e49508__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/app/admin/data:e49508 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
const initialActionState = {
    status: "idle",
    message: ""
};
const heroFieldDefinitions = [
    [
        "Image",
        "imgSrc",
        "Image"
    ],
    [
        "Subtitle",
        "subtitle",
        "Subtitle"
    ],
    [
        "Title",
        "title",
        "Title"
    ],
    [
        "Button text",
        "primaryBtnText",
        "ButtonText"
    ],
    [
        "Button href",
        "primaryBtnHref",
        "ButtonHref"
    ]
];
function Toggle({ name, label, checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-black/20 px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] uppercase tracking-[0.18em] text-white/65",
                children: label
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative h-6 w-11",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "peer sr-only",
                        type: "checkbox",
                        name: name,
                        checked: checked,
                        onChange: (event)=>onChange(event.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 rounded-full bg-white/10 transition peer-checked:bg-skims-accent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 peer-checked:bg-black"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function UploadDropzone({ label, scope, onUploaded }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const uploadFile = async (file)=>{
        setStatus("uploading");
        const formData = new FormData();
        formData.append("file", file);
        formData.append("scope", scope);
        const response = await fetch("/api/admin/upload", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            setStatus("error");
            return;
        }
        const result = await response.json();
        onUploaded(result.url);
        setStatus("idle");
    };
    const handleDrop = (event)=>{
        event.preventDefault();
        const file = event.dataTransfer.files.item(0);
        if (file) void uploadFile(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        onDragOver: (event)=>event.preventDefault(),
        onDrop: handleDrop,
        className: "block cursor-pointer rounded-xl border border-dashed border-white/15 bg-black/25 px-3 py-3 text-center transition hover:border-skims-accent/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*,video/mp4,video/webm",
                className: "sr-only",
                onChange: (event)=>{
                    const file = event.target.files?.item(0);
                    if (file) void uploadFile(file);
                    event.target.value = "";
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[8px] font-bold uppercase tracking-[0.2em] text-white/55",
                children: status === "uploading" ? "Uploading..." : label
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mt-1 block text-[10px] ${status === "error" ? "text-red-300" : "text-white/30"}`,
                children: status === "error" ? "Upload failed. Check Blob token." : "Drop media or click to choose a file."
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function AdminDesignStudio({ initialSettings, storageMode }) {
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSettings);
    const [state, action, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$app$2f$admin$2f$data$3a$e49508__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveDesign"], initialActionState);
    const update = (key, value)=>setSettings((current)=>({
                ...current,
                [key]: value
            }));
    const updateRoom = (index, value)=>{
        setSettings((current)=>{
            const roomImages = [
                ...current.roomImages
            ];
            roomImages[index] = value;
            return {
                ...current,
                roomImages
            };
        });
    };
    const updateHeroSlide = (index, key, value)=>{
        setSettings((current)=>{
            const heroSlides = [
                ...current.heroSlides
            ];
            const fallback = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHeroSlides"][index % __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHeroSlides"].length];
            const currentSlide = heroSlides[index] || fallback;
            heroSlides[index] = {
                ...fallback,
                ...currentSlide,
                [key]: value
            };
            return {
                ...current,
                heroSlides
            };
        });
    };
    const updateMedia = (index, key, value)=>{
        setSettings((current)=>{
            const mediaLibrary = [
                ...current.mediaLibrary
            ];
            mediaLibrary[index] = {
                ...current.mediaLibrary[index],
                [key]: value
            };
            return {
                ...current,
                mediaLibrary
            };
        });
    };
    const updatePageCreative = (index, key, value)=>{
        setSettings((current)=>{
            const pageCreatives = [
                ...current.pageCreatives
            ];
            pageCreatives[index] = {
                ...current.pageCreatives[index],
                [key]: value
            };
            return {
                ...current,
                pageCreatives
            };
        });
    };
    const updateProductCreative = (index, key, value)=>{
        setSettings((current)=>{
            const productCreatives = [
                ...current.productCreatives
            ];
            productCreatives[index] = {
                ...current.productCreatives[index],
                [key]: value
            };
            return {
                ...current,
                productCreatives
            };
        });
    };
    const updateSectionOrder = (value)=>{
        const allowed = new Set(Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homepageSectionLabels"]));
        const ordered = value.split(",").map((item)=>item.trim()).filter((item)=>allowed.has(item));
        update("homepageSectionOrder", ordered);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-40 min-h-screen bg-[#090807]/92 px-4 pb-28 pt-14 text-white backdrop-blur-xl sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[8px] uppercase tracking-[0.4em] text-skims-accent",
                                    children: "Authorized workspace"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-3 font-serif text-3xl uppercase tracking-[0.08em] sm:text-4xl",
                                    children: "Storefront Design Studio"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-2xl text-sm leading-6 text-white/45",
                                    children: "Edit the global visual system, review it live, and publish one consistent design document across the storefront."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/10 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-white/45",
                                    children: [
                                        "Storage: ",
                                        storageMode
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    action: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$app$2f$admin$2f$data$3a$618ce6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logoutAdmin"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-white/60 transition hover:border-white/30 hover:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            "Sign out"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    action: action,
                    className: "mt-8 grid gap-8 xl:grid-cols-[460px_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                "Brand and palette"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 grid gap-4",
                                            children: [
                                                [
                                                    [
                                                        "brandName",
                                                        "Brand name"
                                                    ],
                                                    [
                                                        "brandDescriptor",
                                                        "Brand descriptor"
                                                    ],
                                                    [
                                                        "logoUrl",
                                                        "Logo image URL"
                                                    ],
                                                    [
                                                        "announcement",
                                                        "Announcement bar"
                                                    ]
                                                ].map(([name, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-2 block text-[8px] uppercase tracking-[0.2em] text-white/45",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: name,
                                                                value: String(settings[name]),
                                                                onChange: (event)=>update(name, event.target.value),
                                                                className: "h-11 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm outline-none transition focus:border-skims-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, name, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                    name: "showHeaderLogo",
                                                    label: "Show header logo",
                                                    checked: settings.showHeaderLogo,
                                                    onChange: (value)=>update("showHeaderLogo", value)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-3",
                                                    children: [
                                                        [
                                                            "accentColor",
                                                            "Accent"
                                                        ],
                                                        [
                                                            "backgroundColor",
                                                            "Canvas"
                                                        ],
                                                        [
                                                            "foregroundColor",
                                                            "Text"
                                                        ]
                                                    ].map(([name, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mb-2 block text-[8px] uppercase tracking-[0.16em] text-white/45",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: name,
                                                                    type: "color",
                                                                    value: String(settings[name]),
                                                                    onChange: (event)=>update(name, event.target.value),
                                                                    className: "h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-black/30 p-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, name, true, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this),
                                                "Hero slides"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-5",
                                            children: settings.heroSlides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 rounded-2xl border border-white/8 bg-black/20 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[8px] uppercase tracking-[0.22em] text-skims-accent",
                                                            children: [
                                                                "Slide ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, this),
                                                        heroFieldDefinitions.map(([label, key, suffix])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        name: `heroSlide${index}${suffix}`,
                                                                        value: String(slide[key]),
                                                                        onChange: (event)=>updateHeroSlide(index, key, event.target.value),
                                                                        className: "h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this),
                                                "Media board"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs leading-5 text-white/40",
                                            children: "Store reusable image or video URLs for campaigns, product swaps, and page heroes."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: settings.mediaLibrary.map((asset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-3 rounded-2xl border border-white/8 bg-black/20 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "aspect-video overflow-hidden rounded-xl border border-white/10 bg-black",
                                                            children: asset.kind === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: asset.url,
                                                                alt: "",
                                                                className: "h-full w-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid h-full place-items-center text-[8px] uppercase tracking-[0.22em] text-white/30",
                                                                children: "Video asset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this),
                                                        [
                                                            [
                                                                "label",
                                                                "Label"
                                                            ],
                                                            [
                                                                "url",
                                                                "Media URL"
                                                            ],
                                                            [
                                                                "alt",
                                                                "Alt text"
                                                            ]
                                                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        name: `media${index}${key[0].toUpperCase()}${key.slice(1)}`,
                                                                        value: String(asset[key]),
                                                                        onChange: (event)=>updateMedia(index, key, event.target.value),
                                                                        className: "h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    key === "url" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadDropzone, {
                                                                            label: "Upload media",
                                                                            scope: `media-${asset.id}`,
                                                                            onUploaded: (url)=>updateMedia(index, "url", url)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "hidden",
                                                            name: `media${index}Id`,
                                                            value: asset.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "hidden",
                                                            name: `media${index}Kind`,
                                                            value: asset.kind
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, asset.id, true, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, this),
                                                "Page creative"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs leading-5 text-white/40",
                                            children: "Match Shopify page handles and control the hero treatment above the page body."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: settings.pageCreatives.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 rounded-2xl border border-white/8 bg-black/20 p-4",
                                                    children: [
                                                        [
                                                            "handle",
                                                            "Page handle"
                                                        ],
                                                        [
                                                            "eyebrow",
                                                            "Eyebrow"
                                                        ],
                                                        [
                                                            "title",
                                                            "Hero title"
                                                        ],
                                                        [
                                                            "heroImage",
                                                            "Hero image URL"
                                                        ],
                                                        [
                                                            "intro",
                                                            "Intro copy"
                                                        ],
                                                        [
                                                            "ctaText",
                                                            "CTA text"
                                                        ],
                                                        [
                                                            "ctaHref",
                                                            "CTA href"
                                                        ]
                                                    ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: `page${index}${key[0].toUpperCase()}${key.slice(1)}`,
                                                                    value: String(page[key]),
                                                                    onChange: (event)=>updatePageCreative(index, key, event.target.value),
                                                                    className: "h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 25
                                                                }, this),
                                                                key === "heroImage" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadDropzone, {
                                                                        label: "Upload page hero",
                                                                        scope: `page-${page.handle}`,
                                                                        onUploaded: (url)=>updatePageCreative(index, "heroImage", url)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 27
                                                                }, this) : null
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 23
                                                        }, this))
                                                }, `${page.handle}-${index}`, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                "Product imaging"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs leading-5 text-white/40",
                                            children: "Match product handles and override catalog, carousel, related, and product-detail imagery."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: settings.productCreatives.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 rounded-2xl border border-white/8 bg-black/20 p-4",
                                                    children: [
                                                        [
                                                            [
                                                                "handle",
                                                                "Product handle"
                                                            ],
                                                            [
                                                                "badge",
                                                                "Card badge"
                                                            ],
                                                            [
                                                                "heroImage",
                                                                "Hero image URL"
                                                            ],
                                                            [
                                                                "hoverImage",
                                                                "Hover image URL"
                                                            ],
                                                            [
                                                                "detailNote",
                                                                "PDP creative note"
                                                            ]
                                                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 552,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        name: `product${index}${key[0].toUpperCase()}${key.slice(1)}`,
                                                                        value: String(product[key]),
                                                                        onChange: (event)=>updateProductCreative(index, key, event.target.value),
                                                                        className: "h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    key === "heroImage" || key === "hoverImage" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadDropzone, {
                                                                            label: key === "heroImage" ? "Upload product hero" : "Upload hover image",
                                                                            scope: `product-${product.handle}-${key}`,
                                                                            onUploaded: (url)=>updateProductCreative(index, key, url)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                            lineNumber: 571,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 570,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                    children: "Gallery image URLs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: `product${index}GalleryImages`,
                                                                    value: product.galleryImages.join(","),
                                                                    onChange: (event)=>updateProductCreative(index, "galleryImages", event.target.value.split(",").map((url)=>url.trim())),
                                                                    rows: 3,
                                                                    className: "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-xs leading-5 outline-none transition focus:border-skims-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `${product.handle}-${index}`, true, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this),
                                                "Atmosphere"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-5",
                                            children: [
                                                [
                                                    [
                                                        "heroImageOpacity",
                                                        "Campaign image opacity",
                                                        0,
                                                        0.8,
                                                        0.01
                                                    ],
                                                    [
                                                        "overlayStrength",
                                                        "Text safety overlay",
                                                        0.25,
                                                        0.95,
                                                        0.01
                                                    ],
                                                    [
                                                        "motionIntensity",
                                                        "Motion intensity",
                                                        0,
                                                        1.5,
                                                        0.05
                                                    ]
                                                ].map(([name, label, min, max, step])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-2 flex justify-between text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 624,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white/70",
                                                                        children: Number(settings[name]).toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                        lineNumber: 625,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 623,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: String(name),
                                                                type: "range",
                                                                min: Number(min),
                                                                max: Number(max),
                                                                step: Number(step),
                                                                value: Number(settings[name]),
                                                                onChange: (event)=>update(name, Number(event.target.value)),
                                                                className: "w-full accent-[#C5A880]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, String(name), true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2 sm:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            name: "fogEnabled",
                                                            label: "Smoky fog",
                                                            checked: settings.fogEnabled,
                                                            onChange: (value)=>update("fogEnabled", value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            name: "lightSweepEnabled",
                                                            label: "Gold light sweep",
                                                            checked: settings.lightSweepEnabled,
                                                            onChange: (value)=>update("lightSweepEnabled", value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            name: "floorReflectionEnabled",
                                                            label: "Floor reflection",
                                                            checked: settings.floorReflectionEnabled,
                                                            onChange: (value)=>update("floorReflectionEnabled", value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            name: "grainEnabled",
                                                            label: "Film grain",
                                                            checked: settings.grainEnabled,
                                                            onChange: (value)=>update("grainEnabled", value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                "Homepage section order"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs leading-5 text-white/40",
                                            children: [
                                                "Reorder with comma-separated keys. Available:",
                                                " ",
                                                Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$site$2d$design$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homepageSectionLabels"]).map(([key, label])=>`${key} (${label})`).join(", ")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "homepageSectionOrder",
                                            value: settings.homepageSectionOrder.join(","),
                                            onChange: (event)=>updateSectionOrder(event.target.value),
                                            rows: 4,
                                            className: "mt-5 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-xs leading-5 outline-none transition focus:border-skims-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 682,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-3xl border border-white/10 bg-[#11100e]/90 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "h-4 w-4 text-skims-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 17
                                                }, this),
                                                "Architectural rooms"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 703,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: [
                                                "Entry gallery",
                                                "Circular salon",
                                                "Archive portal"
                                            ].map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: `roomImage${index}`,
                                                            value: settings.roomImages[index],
                                                            onChange: (event)=>updateRoom(index, event.target.value),
                                                            className: "h-11 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 702,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky bottom-4 flex gap-3 rounded-2xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSettings(initialSettings),
                                            className: "flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 text-[8px] uppercase tracking-[0.2em] text-white/55 transition hover:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 17
                                                }, this),
                                                "Revert"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 729,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: pending,
                                            className: "flex h-11 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-skims-accent text-[8px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 17
                                                }, this),
                                                pending ? "Publishing..." : "Publish design"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                            lineNumber: 737,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 728,
                                    columnNumber: 13
                                }, this),
                                state.message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs ${state.status === "success" ? "text-green-300" : "text-red-300"}`,
                                    children: state.message
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-white/10 px-5 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "h-4 w-4 text-skims-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Live design preview"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 759,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 764,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Unpublished"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 763,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative min-h-[620px] flex-1 overflow-hidden",
                                        style: {
                                            color: settings.foregroundColor,
                                            backgroundColor: settings.backgroundColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: settings.roomImages[0],
                                                alt: "",
                                                className: "absolute inset-0 h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black",
                                                style: {
                                                    opacity: settings.overlayStrength
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 780,
                                                columnNumber: 17
                                            }, this),
                                            settings.fogEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-x-[-15%] bottom-[5%] h-[42%] bg-[radial-gradient(ellipse_at_center,rgba(225,210,192,0.2),transparent_62%)] blur-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, this) : null,
                                            settings.lightSweepEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-[-15%] left-[12%] w-[30%] rotate-[-12deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl",
                                                style: {
                                                    color: settings.accentColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 788,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0",
                                                style: {
                                                    background: `linear-gradient(180deg, ${settings.backgroundColor}77, transparent 35%, ${settings.backgroundColor}aa)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 793,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 right-0 top-0 h-7 text-center text-[7px] font-bold uppercase tracking-[0.35em] text-black",
                                                style: {
                                                    backgroundColor: settings.accentColor
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex h-full items-center",
                                                    children: settings.announcement
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-1/2 top-12 -translate-x-1/2 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-serif text-sm tracking-[0.45em]",
                                                        children: settings.brandName
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[6px] uppercase tracking-[0.32em]",
                                                        style: {
                                                            color: settings.accentColor
                                                        },
                                                        children: settings.brandDescriptor
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex flex-col items-center justify-center px-12 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8px] uppercase tracking-[0.4em]",
                                                        style: {
                                                            color: settings.accentColor
                                                        },
                                                        children: settings.heroSlides[0]?.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-5 max-w-2xl font-serif text-3xl uppercase tracking-[0.08em] sm:text-5xl",
                                                        children: settings.heroSlides[0]?.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-8 py-4 text-[8px] font-bold uppercase tracking-[0.24em] text-black",
                                                                style: {
                                                                    backgroundColor: settings.accentColor
                                                                },
                                                                children: settings.heroSlides[0]?.primaryBtnText
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$6$2e$0$2d$canary$2e$60_react_60c2d962eb59e8fdc3ce5782532c32a4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "border border-white/20 bg-black/40 px-8 py-4 text-[8px] uppercase tracking-[0.24em]",
                                                                children: "Explore atelier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                            lineNumber: 756,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/AdminDesignStudio.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=OneDrive_Desktop_the-sanctum_1db2c4f5._.js.map