(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/the-sanctum/components/cart/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function calculateItemCost(quantity, price) {
    return (Number(price) * quantity).toString();
}
function updateCartItem(item, updateType) {
    if (updateType === "delete") return null;
    const newQuantity = updateType === "plus" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity === 0) return null;
    const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
    const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());
    return {
        ...item,
        quantity: newQuantity,
        cost: {
            ...item.cost,
            totalAmount: {
                ...item.cost.totalAmount,
                amount: newTotalAmount
            }
        }
    };
}
function createOrUpdateCartItem(existingItem, variant, product) {
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const totalAmount = calculateItemCost(quantity, variant.price.amount);
    return {
        id: existingItem?.id,
        quantity,
        cost: {
            totalAmount: {
                amount: totalAmount,
                currencyCode: variant.price.currencyCode
            }
        },
        merchandise: {
            id: variant.id,
            title: variant.title,
            selectedOptions: variant.selectedOptions,
            product: {
                id: product.id,
                handle: product.handle,
                title: product.title,
                featuredImage: product.featuredImage
            }
        }
    };
}
function updateCartTotals(lines) {
    const totalQuantity = lines.reduce((sum, item)=>sum + item.quantity, 0);
    const totalAmount = lines.reduce((sum, item)=>sum + Number(item.cost.totalAmount.amount), 0);
    const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? "USD";
    return {
        totalQuantity,
        cost: {
            subtotalAmount: {
                amount: totalAmount.toString(),
                currencyCode
            },
            totalAmount: {
                amount: totalAmount.toString(),
                currencyCode
            },
            totalTaxAmount: {
                amount: "0",
                currencyCode
            }
        }
    };
}
function createEmptyCart() {
    return {
        id: undefined,
        checkoutUrl: "",
        totalQuantity: 0,
        lines: [],
        cost: {
            subtotalAmount: {
                amount: "0",
                currencyCode: "USD"
            },
            totalAmount: {
                amount: "0",
                currencyCode: "USD"
            },
            totalTaxAmount: {
                amount: "0",
                currencyCode: "USD"
            }
        }
    };
}
function cartReducer(state, action) {
    const currentCart = state || createEmptyCart();
    switch(action.type){
        case "UPDATE_ITEM":
            {
                const { merchandiseId, updateType } = action.payload;
                const updatedLines = currentCart.lines.map((item)=>item.merchandise.id === merchandiseId ? updateCartItem(item, updateType) : item).filter(Boolean);
                if (updatedLines.length === 0) {
                    return {
                        ...currentCart,
                        lines: [],
                        totalQuantity: 0,
                        cost: {
                            ...currentCart.cost,
                            totalAmount: {
                                ...currentCart.cost.totalAmount,
                                amount: "0"
                            }
                        }
                    };
                }
                return {
                    ...currentCart,
                    ...updateCartTotals(updatedLines),
                    lines: updatedLines
                };
            }
        case "ADD_ITEM":
            {
                const { variant, product } = action.payload;
                const existingItem = currentCart.lines.find((item)=>item.merchandise.id === variant.id);
                const updatedItem = createOrUpdateCartItem(existingItem, variant, product);
                const updatedLines = existingItem ? currentCart.lines.map((item)=>item.merchandise.id === variant.id ? updatedItem : item) : [
                    ...currentCart.lines,
                    updatedItem
                ];
                return {
                    ...currentCart,
                    ...updateCartTotals(updatedLines),
                    lines: updatedLines
                };
            }
        default:
            return currentCart;
    }
}
function CartProvider({ children, cartPromise }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartPromise
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/cart-context.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c = CartProvider;
function useCart() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    const initialCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(context.cartPromise);
    const [optimisticCart, updateOptimisticCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(initialCart, cartReducer);
    const updateCartItem = (merchandiseId, updateType)=>{
        updateOptimisticCart({
            type: "UPDATE_ITEM",
            payload: {
                merchandiseId,
                updateType
            }
        });
    };
    const addCartItem = (variant, product)=>{
        updateOptimisticCart({
            type: "ADD_ITEM",
            payload: {
                variant,
                product
            }
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo": ()=>({
                cart: optimisticCart,
                updateCartItem,
                addCartItem
            })
    }["useCart.useMemo"], [
        optimisticCart
    ]);
}
_s(useCart, "FhDVAg31a3PNv/oUy93QbEiPOPY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/price.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
const Price = ({ amount, className, currencyCode = "USD", currencyCodeClassName })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        suppressHydrationWarning: true,
        className: className,
        children: [
            `${new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: currencyCode,
                currencyDisplay: "narrowSymbol"
            }).format(parseFloat(amount))}`,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ml-1 inline", currencyCodeClassName),
                children: `${currencyCode}`
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/price.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/price.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Price;
const __TURBOPACK__default__export__ = Price;
var _c;
__turbopack_context__.k.register(_c, "Price");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";
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
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[envVar]) {
            missingEnvironmentVariables.push(envVar);
        }
    });
    if (missingEnvironmentVariables.length) {
        throw new Error(`The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join("\n")}\n`);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHOPIFY_STORE_DOMAIN?.includes("[") || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHOPIFY_STORE_DOMAIN?.includes("]")) {
        throw new Error("Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/data:a726c2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0011237eb38c15241c714aee8cdfefd711b15b880f":"createCartAndSetCookie"},"OneDrive/Desktop/the-sanctum/components/cart/actions.ts",""] */ __turbopack_context__.s([
    "createCartAndSetCookie",
    ()=>createCartAndSetCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createCartAndSetCookie = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0011237eb38c15241c714aee8cdfefd711b15b880f", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCartAndSetCookie"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRBR1MgfSBmcm9tIFwibGliL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvQ2FydCxcclxuICBjcmVhdGVDYXJ0LFxyXG4gIGdldENhcnQsXHJcbiAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgdXBkYXRlQ2FydCxcclxufSBmcm9tIFwibGliL3Nob3BpZnlcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFnIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbShcclxuICBwcmV2U3RhdGU6IGFueSxcclxuICBzZWxlY3RlZFZhcmlhbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmICghc2VsZWN0ZWRWYXJpYW50SWQpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZDogc2VsZWN0ZWRWYXJpYW50SWQsIHF1YW50aXR5OiAxIH1dKTtcclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtKHByZXZTdGF0ZTogYW55LCBtZXJjaGFuZGlzZUlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiSXRlbSBub3QgZm91bmQgaW4gY2FydFwiO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBjYXJ0XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxyXG4gIHByZXZTdGF0ZTogYW55LFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG1lcmNoYW5kaXNlSWQ6IHN0cmluZztcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCB7IG1lcmNoYW5kaXNlSWQsIHF1YW50aXR5IH0gPSBwYXlsb2FkO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlQ2FydChbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBsaW5lSXRlbS5pZCxcclxuICAgICAgICAgICAgbWVyY2hhbmRpc2VJZCxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1YW50aXR5ID4gMCkge1xyXG4gICAgICAvLyBJZiB0aGUgaXRlbSBkb2Vzbid0IGV4aXN0IGluIHRoZSBjYXJ0IGFuZCBxdWFudGl0eSA+IDAsIGFkZCBpdFxyXG4gICAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZCwgcXVhbnRpdHkgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gXCJFcnJvciB1cGRhdGluZyBpdGVtIHF1YW50aXR5XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0NoZWNrb3V0KCkge1xyXG4gIGxldCBjYXJ0ID0gYXdhaXQgZ2V0Q2FydCgpO1xyXG4gIHJlZGlyZWN0KGNhcnQhLmNoZWNrb3V0VXJsKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcnRBbmRTZXRDb29raWUoKSB7XHJcbiAgbGV0IGNhcnQgPSBhd2FpdCBjcmVhdGVDYXJ0KCk7XHJcbiAgKGF3YWl0IGNvb2tpZXMoKSkuc2V0KFwiY2FydElkXCIsIGNhcnQuaWQhKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVVQXNHc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/data:35851d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0051bfc7da5ae4dcf848b4a327a4a47457a1e8db16":"redirectToCheckout"},"OneDrive/Desktop/the-sanctum/components/cart/actions.ts",""] */ __turbopack_context__.s([
    "redirectToCheckout",
    ()=>redirectToCheckout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var redirectToCheckout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0051bfc7da5ae4dcf848b4a327a4a47457a1e8db16", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "redirectToCheckout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRBR1MgfSBmcm9tIFwibGliL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvQ2FydCxcclxuICBjcmVhdGVDYXJ0LFxyXG4gIGdldENhcnQsXHJcbiAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgdXBkYXRlQ2FydCxcclxufSBmcm9tIFwibGliL3Nob3BpZnlcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFnIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbShcclxuICBwcmV2U3RhdGU6IGFueSxcclxuICBzZWxlY3RlZFZhcmlhbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmICghc2VsZWN0ZWRWYXJpYW50SWQpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZDogc2VsZWN0ZWRWYXJpYW50SWQsIHF1YW50aXR5OiAxIH1dKTtcclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtKHByZXZTdGF0ZTogYW55LCBtZXJjaGFuZGlzZUlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiSXRlbSBub3QgZm91bmQgaW4gY2FydFwiO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBjYXJ0XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxyXG4gIHByZXZTdGF0ZTogYW55LFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG1lcmNoYW5kaXNlSWQ6IHN0cmluZztcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCB7IG1lcmNoYW5kaXNlSWQsIHF1YW50aXR5IH0gPSBwYXlsb2FkO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlQ2FydChbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBsaW5lSXRlbS5pZCxcclxuICAgICAgICAgICAgbWVyY2hhbmRpc2VJZCxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1YW50aXR5ID4gMCkge1xyXG4gICAgICAvLyBJZiB0aGUgaXRlbSBkb2Vzbid0IGV4aXN0IGluIHRoZSBjYXJ0IGFuZCBxdWFudGl0eSA+IDAsIGFkZCBpdFxyXG4gICAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZCwgcXVhbnRpdHkgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gXCJFcnJvciB1cGRhdGluZyBpdGVtIHF1YW50aXR5XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0NoZWNrb3V0KCkge1xyXG4gIGxldCBjYXJ0ID0gYXdhaXQgZ2V0Q2FydCgpO1xyXG4gIHJlZGlyZWN0KGNhcnQhLmNoZWNrb3V0VXJsKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcnRBbmRTZXRDb29raWUoKSB7XHJcbiAgbGV0IGNhcnQgPSBhd2FpdCBjcmVhdGVDYXJ0KCk7XHJcbiAgKGF3YWl0IGNvb2tpZXMoKSkuc2V0KFwiY2FydElkXCIsIGNhcnQuaWQhKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1VQWlHc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/data:131b9f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60239f0a98253df29e0b00fa05488afb2fdb60c835":"removeItem"},"OneDrive/Desktop/the-sanctum/components/cart/actions.ts",""] */ __turbopack_context__.s([
    "removeItem",
    ()=>removeItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var removeItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60239f0a98253df29e0b00fa05488afb2fdb60c835", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "removeItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRBR1MgfSBmcm9tIFwibGliL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvQ2FydCxcclxuICBjcmVhdGVDYXJ0LFxyXG4gIGdldENhcnQsXHJcbiAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgdXBkYXRlQ2FydCxcclxufSBmcm9tIFwibGliL3Nob3BpZnlcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFnIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbShcclxuICBwcmV2U3RhdGU6IGFueSxcclxuICBzZWxlY3RlZFZhcmlhbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmICghc2VsZWN0ZWRWYXJpYW50SWQpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZDogc2VsZWN0ZWRWYXJpYW50SWQsIHF1YW50aXR5OiAxIH1dKTtcclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtKHByZXZTdGF0ZTogYW55LCBtZXJjaGFuZGlzZUlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiSXRlbSBub3QgZm91bmQgaW4gY2FydFwiO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBjYXJ0XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxyXG4gIHByZXZTdGF0ZTogYW55LFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG1lcmNoYW5kaXNlSWQ6IHN0cmluZztcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCB7IG1lcmNoYW5kaXNlSWQsIHF1YW50aXR5IH0gPSBwYXlsb2FkO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlQ2FydChbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBsaW5lSXRlbS5pZCxcclxuICAgICAgICAgICAgbWVyY2hhbmRpc2VJZCxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1YW50aXR5ID4gMCkge1xyXG4gICAgICAvLyBJZiB0aGUgaXRlbSBkb2Vzbid0IGV4aXN0IGluIHRoZSBjYXJ0IGFuZCBxdWFudGl0eSA+IDAsIGFkZCBpdFxyXG4gICAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZCwgcXVhbnRpdHkgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gXCJFcnJvciB1cGRhdGluZyBpdGVtIHF1YW50aXR5XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0NoZWNrb3V0KCkge1xyXG4gIGxldCBjYXJ0ID0gYXdhaXQgZ2V0Q2FydCgpO1xyXG4gIHJlZGlyZWN0KGNhcnQhLmNoZWNrb3V0VXJsKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcnRBbmRTZXRDb29raWUoKSB7XHJcbiAgbGV0IGNhcnQgPSBhd2FpdCBjcmVhdGVDYXJ0KCk7XHJcbiAgKGF3YWl0IGNvb2tpZXMoKSkuc2V0KFwiY2FydElkXCIsIGNhcnQuaWQhKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJUQThCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteItemButton",
    ()=>DeleteItemButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$131b9f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/data:131b9f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DeleteItemButton({ item, optimisticUpdate }) {
    _s();
    const [message, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$131b9f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["removeItem"], null);
    const merchandiseId = item.merchandise.id;
    const removeItemAction = formAction.bind(null, merchandiseId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: async ()=>{
            optimisticUpdate(merchandiseId, "delete");
            removeItemAction();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                "aria-label": "Remove cart item",
                className: "text-white/30 hover:text-red-400 p-1 transition-colors cursor-pointer bg-transparent focus:outline-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "aria-live": "polite",
                className: "sr-only",
                role: "status",
                children: message
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(DeleteItemButton, "MQo0X3viC0duAI2bqHKblW/NRvY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = DeleteItemButton;
var _c;
__turbopack_context__.k.register(_c, "DeleteItemButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/data:b900ac [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6097461361071d815e3d4136cc96b15ed26bad8b2b":"updateItemQuantity"},"OneDrive/Desktop/the-sanctum/components/cart/actions.ts",""] */ __turbopack_context__.s([
    "updateItemQuantity",
    ()=>updateItemQuantity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateItemQuantity = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6097461361071d815e3d4136cc96b15ed26bad8b2b", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateItemQuantity"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRBR1MgfSBmcm9tIFwibGliL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvQ2FydCxcclxuICBjcmVhdGVDYXJ0LFxyXG4gIGdldENhcnQsXHJcbiAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgdXBkYXRlQ2FydCxcclxufSBmcm9tIFwibGliL3Nob3BpZnlcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFnIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbShcclxuICBwcmV2U3RhdGU6IGFueSxcclxuICBzZWxlY3RlZFZhcmlhbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmICghc2VsZWN0ZWRWYXJpYW50SWQpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZDogc2VsZWN0ZWRWYXJpYW50SWQsIHF1YW50aXR5OiAxIH1dKTtcclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIGFkZGluZyBpdGVtIHRvIGNhcnRcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtKHByZXZTdGF0ZTogYW55LCBtZXJjaGFuZGlzZUlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiSXRlbSBub3QgZm91bmQgaW4gY2FydFwiO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBcIkVycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBjYXJ0XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxyXG4gIHByZXZTdGF0ZTogYW55LFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG1lcmNoYW5kaXNlSWQ6IHN0cmluZztcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCB7IG1lcmNoYW5kaXNlSWQsIHF1YW50aXR5IH0gPSBwYXlsb2FkO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcclxuXHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgcmV0dXJuIFwiRXJyb3IgZmV0Y2hpbmcgY2FydFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmVJdGVtID0gY2FydC5saW5lcy5maW5kKFxyXG4gICAgICAobGluZSkgPT4gbGluZS5tZXJjaGFuZGlzZS5pZCA9PT0gbWVyY2hhbmRpc2VJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGluZUl0ZW0gJiYgbGluZUl0ZW0uaWQpIHtcclxuICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoW2xpbmVJdGVtLmlkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlQ2FydChbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBsaW5lSXRlbS5pZCxcclxuICAgICAgICAgICAgbWVyY2hhbmRpc2VJZCxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1YW50aXR5ID4gMCkge1xyXG4gICAgICAvLyBJZiB0aGUgaXRlbSBkb2Vzbid0IGV4aXN0IGluIHRoZSBjYXJ0IGFuZCBxdWFudGl0eSA+IDAsIGFkZCBpdFxyXG4gICAgICBhd2FpdCBhZGRUb0NhcnQoW3sgbWVyY2hhbmRpc2VJZCwgcXVhbnRpdHkgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhZyhUQUdTLmNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gXCJFcnJvciB1cGRhdGluZyBpdGVtIHF1YW50aXR5XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0NoZWNrb3V0KCkge1xyXG4gIGxldCBjYXJ0ID0gYXdhaXQgZ2V0Q2FydCgpO1xyXG4gIHJlZGlyZWN0KGNhcnQhLmNoZWNrb3V0VXJsKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcnRBbmRTZXRDb29raWUoKSB7XHJcbiAgbGV0IGNhcnQgPSBhd2FpdCBjcmVhdGVDYXJ0KCk7XHJcbiAgKGF3YWl0IGNvb2tpZXMoKSkuc2V0KFwiY2FydElkXCIsIGNhcnQuaWQhKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1VQXFEc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditItemQuantityButton",
    ()=>EditItemQuantityButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$b900ac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/data:b900ac [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SubmitButton({ type }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "submit",
        "aria-label": type === "plus" ? "Increase item quantity" : "Reduce item quantity",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ease flex h-full p-1.5 items-center justify-center transition-all duration-200 hover:bg-white/5 text-skims-sand hover:text-white cursor-pointer focus:outline-hidden", {
            "border-r border-white/10": type === "minus",
            "border-l border-white/10": type === "plus"
        }),
        children: type === "plus" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-2.5 h-2.5"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
            className: "w-2.5 h-2.5"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SubmitButton;
function EditItemQuantityButton({ item, type, optimisticUpdate }) {
    _s();
    const [message, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$b900ac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateItemQuantity"], null);
    const payload = {
        merchandiseId: item.merchandise.id,
        quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1
    };
    const updateItemQuantityAction = formAction.bind(null, payload);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: async ()=>{
            optimisticUpdate(payload.merchandiseId, type);
            updateItemQuantityAction();
        },
        className: "h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                type: type
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "aria-live": "polite",
                className: "sr-only",
                role: "status",
                children: message
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(EditItemQuantityButton, "MQo0X3viC0duAI2bqHKblW/NRvY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c1 = EditItemQuantityButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubmitButton");
__turbopack_context__.k.register(_c1, "EditItemQuantityButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/open-cart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpenCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
function OpenCart({ className, quantity }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative p-2 rounded-full hover:bg-white/5 hover:text-white transition-all cursor-pointer", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                className: "w-4 h-4 text-skims-accent"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/open-cart.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            quantity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-0.5 -right-0.5 bg-[#C5A880] text-black text-[7.5px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold border border-[#0B0A09]",
                children: quantity
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/open-cart.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/open-cart.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = OpenCart;
var _c;
__turbopack_context__.k.register(_c, "OpenCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/price.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-dom-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$a726c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/data:a726c2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$35851d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/data:35851d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$delete$2d$item$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/delete-item-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$edit$2d$item$2d$quantity$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/edit-item-quantity-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$open$2d$cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/open-cart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
// Inline Mock Products for "Complete the Look" fallback
const MOCK_RECS = [
    {
        id: "SKM-M-01",
        handle: "onyx-ribbed-boxer-brief",
        title: "Ribbed Boxer Brief",
        price: "28.00",
        imgUrl: "https://images.unsplash.com/photo-1582830359871-d915b3997841?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "SKM-M-02",
        handle: "sands-stretch-muscle-tank",
        title: "Stretch Muscle Tank",
        price: "36.00",
        imgUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400&auto=format&fit=crop"
    }
];
function CartModal() {
    _s();
    const { cart, updateCartItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const quantityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cart?.totalQuantity);
    const openCart = ()=>setIsOpen(true);
    const closeCart = ()=>setIsOpen(false);
    const cartTotal = Number(cart?.cost?.subtotalAmount?.amount || 0);
    const FREE_SHIPPING_THRESHOLD = 150;
    const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
    const freeShippingProgress = Math.min(100, cartTotal / FREE_SHIPPING_THRESHOLD * 100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": ()=>{
            if (!cart) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$a726c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCartAndSetCookie"])();
            }
        }
    }["CartModal.useEffect"], [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": ()=>{
            if (cart?.totalQuantity && cart?.totalQuantity !== quantityRef.current && cart?.totalQuantity > 0) {
                if (!isOpen) {
                    setIsOpen(true);
                }
                quantityRef.current = cart?.totalQuantity;
            }
        }
    }["CartModal.useEffect"], [
        isOpen,
        cart?.totalQuantity,
        quantityRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Open cart",
                onClick: openCart,
                className: "focus:outline-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$open$2d$cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    quantity: cart?.totalQuantity
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                show: isOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    onClose: closeCart,
                    className: "relative z-50 font-sans",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "transition-all ease-in-out duration-300",
                            enterFrom: "opacity-0 backdrop-blur-none",
                            enterTo: "opacity-100 backdrop-blur-[2px]",
                            leave: "transition-all ease-in-out duration-200",
                            leaveFrom: "opacity-100 backdrop-blur-[2px]",
                            leaveTo: "opacity-0 backdrop-blur-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/60",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "transition-all ease-in-out duration-300",
                            enterFrom: "translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition-all ease-in-out duration-200",
                            leaveFrom: "translate-x-0",
                            leaveTo: "translate-x-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-white/10 bg-[#0D0C0B] p-6 text-white shadow-2xl md:w-[450px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pb-4 border-b border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                        className: "w-5 h-5 text-skims-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-serif text-lg tracking-[3px] uppercase text-white font-medium",
                                                        children: "Your Bag"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-skims-sand/50",
                                                        children: [
                                                            "(",
                                                            cart?.totalQuantity || 0,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "Close cart",
                                                onClick: closeCart,
                                                className: "text-skims-sand/60 hover:text-white p-2 transition-colors cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    cart && cart.lines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-4 border-b border-white/5 text-[9px] tracking-[2px] uppercase",
                                        children: [
                                            amountToFreeShipping > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-skims-sand/80",
                                                children: [
                                                    "You are ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-skims-accent font-bold",
                                                        children: [
                                                            "$",
                                                            amountToFreeShipping.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 31
                                                    }, this),
                                                    " away from Free Shipping!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-green-400 font-bold",
                                                children: "✓ Congratulations! You qualify for Free Shipping."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-white/10 h-1 rounded-none overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-skims-accent h-full transition-all duration-500",
                                                    style: {
                                                        width: `${freeShippingProgress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    !cart || cart.lines.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-20 flex w-full flex-col items-center justify-center overflow-hidden text-center gap-4 opacity-55",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "w-12 h-12 text-skims-sand/30 stroke-[1px]"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] tracking-[3px] uppercase text-skims-sand",
                                                children: "Your shopping bag is empty."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: closeCart,
                                                className: "mt-2 px-6 py-2 border border-skims-sand/20 hover:border-skims-accent text-skims-sand hover:text-white text-[9px] uppercase tracking-[2px] cursor-pointer",
                                                children: "Continue Shopping"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full flex-col justify-between overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "grow overflow-auto py-4 pr-1 space-y-6 no-scrollbar",
                                                children: [
                                                    cart.lines.sort((a, b)=>a.merchandise.product.title.localeCompare(b.merchandise.product.title)).map((item, i)=>{
                                                        const merchandiseSearchParams = {};
                                                        item.merchandise.selectedOptions.forEach(({ name, value })=>{
                                                            if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OPTION"]) {
                                                                merchandiseSearchParams[name.toLowerCase()] = value;
                                                            }
                                                        });
                                                        const merchandiseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUrl"])(`/product/${item.merchandise.product.handle}`, new URLSearchParams(merchandiseSearchParams));
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex w-full flex-col border-b border-white/5 pb-6 items-stretch",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative flex w-full flex-row justify-between items-stretch",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative h-20 w-16 overflow-hidden border border-white/10 bg-black flex-shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "h-full w-full object-cover",
                                                                                    width: 64,
                                                                                    height: 80,
                                                                                    alt: item.merchandise.product.featuredImage.altText || item.merchandise.product.title,
                                                                                    src: item.merchandise.product.featuredImage.url
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                    lineNumber: 182,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 181,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col justify-between text-left",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                href: merchandiseUrl,
                                                                                                onClick: closeCart,
                                                                                                className: "font-serif text-sm tracking-wide text-white uppercase font-light hover:text-skims-accent transition-colors",
                                                                                                children: item.merchandise.product.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 198,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            item.merchandise.title !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OPTION"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[8.5px] tracking-[1px] text-skims-sand/40 uppercase mt-1",
                                                                                                children: item.merchandise.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 206,
                                                                                                columnNumber: 39
                                                                                            }, this) : null
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                        lineNumber: 197,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center border border-white/10 bg-black/40 w-fit mt-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$edit$2d$item$2d$quantity$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditItemQuantityButton"], {
                                                                                                item: item,
                                                                                                type: "minus",
                                                                                                optimisticUpdate: updateCartItem
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 214,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] px-2 text-white font-bold min-w-4 text-center",
                                                                                                children: item.quantity
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 219,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$edit$2d$item$2d$quantity$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditItemQuantityButton"], {
                                                                                                item: item,
                                                                                                type: "plus",
                                                                                                optimisticUpdate: updateCartItem
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 222,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                        lineNumber: 213,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col justify-between items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$delete$2d$item$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteItemButton"], {
                                                                                item: item,
                                                                                optimisticUpdate: updateCartItem
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 232,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                className: "text-right text-xs text-white",
                                                                                amount: item.cost.totalAmount.amount,
                                                                                currencyCode: item.cost.totalAmount.currencyCode
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 236,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 27
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-6 border-t border-white/5 space-y-4 font-sans",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8.5px] text-skims-accent tracking-[2px] uppercase font-bold",
                                                                        children: "Complete the Look"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[7.5px] text-skims-sand/35 tracking-[1px] uppercase",
                                                                        children: "Suggested For You"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: MOCK_RECS.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-white/[0.02] border border-white/5 p-3 flex gap-3 items-center justify-between hover:border-white/10 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-3 items-center text-left",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-16 bg-black border border-white/5 overflow-hidden flex-shrink-0 relative",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: rec.imgUrl,
                                                                                            alt: rec.title,
                                                                                            className: "w-full h-full object-cover"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                            lineNumber: 265,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "font-serif text-[11px] text-white uppercase tracking-wide font-light",
                                                                                                children: rec.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 268,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[9px] text-skims-accent mt-0.5",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    rec.price
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                                lineNumber: 269,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                        lineNumber: 267,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 263,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: `/product/${rec.handle}`,
                                                                                onClick: closeCart,
                                                                                className: "px-3.5 py-1.5 border border-skims-accent/40 text-skims-accent hover:border-skims-accent hover:bg-skims-accent hover:text-black text-[8px] tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer",
                                                                                children: "VIEW"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                                lineNumber: 272,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, rec.id, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 border-t border-white/10 bg-[#0D0C0B]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 mb-6 text-[10px] uppercase tracking-[2px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-skims-sand/60",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "Taxes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "text-right text-white",
                                                                        amount: cart.cost.totalTaxAmount.amount,
                                                                        currencyCode: cart.cost.totalTaxAmount.currencyCode
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-skims-sand/60",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "Shipping"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-right",
                                                                        children: "Calculated at checkout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-t border-white/5 pt-3 flex justify-between text-white font-bold text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "text-right text-skims-accent font-bold",
                                                                        amount: cart.cost.totalAmount.amount,
                                                                        currencyCode: cart.cost.totalAmount.currencyCode
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        action: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$data$3a$35851d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["redirectToCheckout"],
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutButton, {}, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CartModal, "Us2sNzCTXLkAPBx1Q/bYvY7QwyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartModal;
function CheckoutButton() {
    _s1();
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "w-full py-4 bg-skims-accent hover:bg-white text-black font-sans font-bold text-[10px] tracking-[3px] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(197,168,128,0.25)]",
        type: "submit",
        disabled: pending,
        children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-3.5 h-3.5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
                    lineNumber: 334,
                    columnNumber: 11
                }, this),
                "PROCEEDING..."
            ]
        }, void 0, true) : "PROCEED TO CHECKOUT"
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s1(CheckoutButton, "ChN3pfldoIBH4a0f1nBGB7ED+p0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"]
    ];
});
_c1 = CheckoutButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "CartModal");
__turbopack_context__.k.register(_c1, "CheckoutButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/components/cart/modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const [activeAnn, setActiveAnn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const announcements = [
        "FREE SHIPPING ON ALL ORDERS OVER $150",
        "THE GIRAGON COLLECTION | CORE FOUNDATIONS AVAILABLE NOW",
        "SUBSCRIBE FOR EARLY ACCESS TO NEW RELEASES"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const timer = setInterval({
                "Header.useEffect.timer": ()=>{
                    setActiveAnn({
                        "Header.useEffect.timer": (prev)=>(prev + 1) % announcements.length
                    }["Header.useEffect.timer"]);
                }
            }["Header.useEffect.timer"], 5000);
            return ({
                "Header.useEffect": ()=>clearInterval(timer)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const navLinks = [
        {
            label: "Shop All",
            shortLabel: "SHOP",
            href: "/"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-50 bg-[#C5A880] text-black py-2 text-[7.5px] font-sans tracking-[4px] uppercase text-center font-bold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 4
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -4
                        },
                        transition: {
                            duration: 0.25
                        },
                        children: announcements[activeAnn]
                    }, activeAnn, false, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none flex flex-col items-center gap-1 opacity-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo_3.png",
                                alt: "KSHADP outline",
                                className: "w-5 h-5 animate-float"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-[12px] text-white tracking-[6px] uppercase font-medium",
                                children: "KSHADP"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans text-[6px] text-skims-accent tracking-[3px] uppercase",
                        children: "Atelier Cores"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    initial: {
                        y: 50,
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 26
                    },
                    className: "glass-panel rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between sm:justify-start gap-4 sm:gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.85)] border border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-4",
                            children: navLinks.map((link)=>{
                                const isActive = pathname === link.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "relative px-2.5 py-1.5 transition-all text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline font-sans text-[9px] tracking-[2px] uppercase text-skims-sand/65 hover:text-white font-medium transition-colors",
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline sm:hidden font-sans text-[8.5px] tracking-[1px] uppercase text-skims-sand/65 hover:text-white font-bold transition-colors",
                                            children: link.shortLabel
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "dockActiveIndicator",
                                            className: "absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5",
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[1px] h-6 bg-white/15 hidden sm:block"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "group flex items-center justify-center p-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        rotate: 180,
                                        scale: 1.1
                                    },
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeInOut"
                                    },
                                    className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-skims-accent/30 bg-black/40 flex items-center justify-center overflow-hidden hover:border-skims-accent/80 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo_3.png",
                                        alt: "Brand Mark",
                                        className: "w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-80 group-hover:opacity-100 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 right-0 w-1.5 h-1.5 bg-skims-accent rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 right-0 w-1.5 h-1.5 bg-skims-accent rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[1px] h-6 bg-white/15"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 sm:gap-2 text-skims-sand",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSearchOpen(!searchOpen),
                                    className: `p-2 rounded-full hover:bg-white/5 hover:text-white transition-all cursor-pointer ${searchOpen ? "bg-white/10 text-white" : ""}`,
                                    "aria-label": "Toggle search console",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/account",
                                    className: "p-2 rounded-full hover:bg-white/5 hover:text-white transition-all hidden sm:block",
                                    "aria-label": "Access client account",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$components$2f$cart$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setSearchOpen(false),
                            className: "fixed inset-0 z-30 bg-black/60 backdrop-blur-md"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 15
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 15
                            },
                            className: "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg glass-panel-accent p-4 rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-black/40 border border-white/10 px-4 py-2.5 rounded-full hover:border-skims-accent/40 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-skims-sand/40 mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" && searchQuery.trim()) {
                                                setSearchOpen(false);
                                                window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
                                            }
                                        },
                                        placeholder: "Search products, hoodies, compression...",
                                        className: "flex-grow bg-transparent border-none text-[10px] font-sans tracking-widest text-white focus:outline-none placeholder:text-skims-sand/30 uppercase"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(""),
                                        className: "text-white/40 hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                            lineNumber: 183,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[6.5px] font-sans text-white/25 tracking-[1px]",
                                        children: "KSHADP System"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/Header.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "fozNTQONksYl11P48dhGzACJU5c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/SovereignWebGLStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SovereignWebGLStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SovereignWebGLStage({ isLowPerformance = false }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 800,
        height: 800
    });
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const lastMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const mouseVelocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollSpeedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothScrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const depthScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SovereignWebGLStage.useEffect": ()=>{
            const handleResize = {
                "SovereignWebGLStage.useEffect.handleResize": ()=>{
                    if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const scale = isLowPerformance ? 0.5 : 0.85;
                        setDimensions({
                            width: Math.max(200, Math.round(rect.width * scale)),
                            height: Math.max(200, Math.round(rect.height * scale))
                        });
                    }
                }
            }["SovereignWebGLStage.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            const handleMouseMove = {
                "SovereignWebGLStage.useEffect.handleMouseMove": (e)=>{
                    const xNorm = e.clientX / window.innerWidth - 0.5;
                    const yNorm = e.clientY / window.innerHeight - 0.5;
                    mouseRef.current = {
                        x: xNorm,
                        y: yNorm
                    };
                }
            }["SovereignWebGLStage.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            const handleScroll = {
                "SovereignWebGLStage.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
                    scrollProgressRef.current = Math.min(1.0, Math.max(0.0, scrollY / maxScroll));
                    const diff = Math.abs(scrollY - lastScrollYRef.current);
                    scrollSpeedRef.current = scrollSpeedRef.current * 0.84 + diff * 0.16;
                    lastScrollYRef.current = scrollY;
                }
            }["SovereignWebGLStage.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "SovereignWebGLStage.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("scroll", handleScroll);
                }
            })["SovereignWebGLStage.useEffect"];
        }
    }["SovereignWebGLStage.useEffect"], [
        isLowPerformance
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_s1({
        "SovereignWebGLStage.useEffect": ()=>{
            _s1();
            const canvas = canvasRef.current;
            if (!canvas) return;
            const gl = canvas.getContext("webgl", {
                alpha: true
            });
            if (!gl) {
                console.warn("WebGL not supported.");
                return;
            }
            const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
            const fsSource = `
      ${isLowPerformance ? "precision mediump float;" : "precision highp float;"}
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      uniform float u_mouse_velocity;
      uniform float u_scroll_speed;
      uniform float u_depth_scale;

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv - 0.5;
        p.x *= u_resolution.x / u_resolution.y;

        vec2 mouseOffset = u_mouse * 0.1;
        float driftAngle = u_time * 0.05;
        vec2 drift = vec2(sin(driftAngle), cos(driftAngle)) * 0.02;
        p += mouseOffset + drift;

        float r = length(p);
        float theta = atan(p.y, p.x);

        float kineticImpact = mix(u_mouse_velocity * 0.4, u_scroll_speed * 0.8, 0.4);
        float accelerationFactor = clamp(kineticImpact * 0.1, 0.0, 0.6);

        // Starfield
        float stars = 0.0;
        vec2 st1 = p * 12.0;
        vec2 ip1 = floor(st1);
        vec2 fp1 = fract(st1) - 0.5;
        float h1 = noise(ip1);
        if (h1 > 0.92) {
          float twinkle = sin(u_time * 1.2 + h1 * 6.28) * 0.5 + 0.5;
          stars += smoothstep(0.04, 0.0, length(fp1)) * twinkle * 0.25;
        }

        vec2 st2 = p * 24.0;
        vec2 ip2 = floor(st2);
        vec2 fp2 = fract(st2) - 0.5;
        float h2 = noise(ip2 + vec2(37.4, 82.1));
        if (h2 > 0.96) {
          float twinkle = sin(u_time * 2.2 + h2 * 6.28) * 0.5 + 0.5;
          stars += smoothstep(0.08, 0.0, length(fp2)) * twinkle * 0.4;
        }

        // Concentric Blueprint Circles representing technical design grid
        float orbit1 = smoothstep(0.0015, 0.0, abs(r - 0.18));
        float orbit2 = smoothstep(0.0012, 0.0, abs(r - 0.35));
        float orbit3 = smoothstep(0.0009, 0.0, abs(r - 0.52));
        float orbits = (orbit1 * 0.06) + (orbit2 * 0.04) + (orbit3 * 0.03);

        // Planetary Glowing Nodes
        vec2 planetPos1 = vec2(cos(u_time * 0.25) * 0.18, sin(u_time * 0.25) * 0.18);
        float planetGlow1 = 0.0008 / (length(p - planetPos1) + 0.001);

        vec2 planetPos2 = vec2(cos(-u_time * 0.15 + 2.0) * 0.35, sin(-u_time * 0.15 + 2.0) * 0.35);
        float planetGlow2 = 0.0012 / (length(p - planetPos2) + 0.001);

        vec2 planetPos3 = vec2(cos(u_time * 0.08 + 4.0) * 0.52, sin(u_time * 0.08 + 4.0) * 0.52);
        float planetGlow3 = 0.0018 / (length(p - planetPos3) + 0.0012);

        float allPlanets = planetGlow1 + planetGlow2 + planetGlow3;
        float depthCue = smoothstep(1.2, 0.05, r);

        // Tonal color palette: Cocoa Red / Muted Sand Gold
        vec3 colCocoa = vec3(0.36, 0.31, 0.27);  // Muted Cocoa
        vec3 colSand = vec3(0.77, 0.73, 0.69);   // Sand / Clay
        vec3 colAccent = vec3(0.77, 0.66, 0.50); // Muted Gold

        vec3 currentSecColor;
        if (u_scroll < 0.5) {
          float t = u_scroll / 0.5;
          currentSecColor = mix(colCocoa, colSand, t);
        } else {
          float t = (u_scroll - 0.5) / 0.5;
          currentSecColor = mix(colSand, colAccent, t);
        }

        float solarCore = 0.004 / (r + 0.002);
        float volumetricDrift = noise(uv * 6.0 + vec2(0.0, u_time * 0.2)) * 0.008 * (1.0 - r);

        float spaceStructures = stars * 1.2 + orbits * 1.0 + allPlanets;
        vec3 combinedColor = currentSecColor * spaceStructures + currentSecColor * (solarCore + volumetricDrift);

        float baseOpacity = 0.008 + (0.01 * (1.0 - accelerationFactor));
        float finalAlpha = baseOpacity * depthCue;

        gl_FragColor = vec4(combinedColor, finalAlpha);
      }
    `;
            const compileShader = {
                "SovereignWebGLStage.useEffect.compileShader": (source, type)=>{
                    const shader = gl.createShader(type);
                    if (!shader) return null;
                    gl.shaderSource(shader, source);
                    gl.compileShader(shader);
                    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
                        gl.deleteShader(shader);
                        return null;
                    }
                    return shader;
                }
            }["SovereignWebGLStage.useEffect.compileShader"];
            const vs = compileShader(vsSource, gl.VERTEX_SHADER);
            const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
            if (!vs || !fs) return;
            const program = gl.createProgram();
            if (!program) return;
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error("WebGL linkage failed:", gl.getProgramInfoLog(program));
                return;
            }
            gl.useProgram(program);
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            const positions = new Float32Array([
                -1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1,
                1
            ]);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
            const positionLoc = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLoc);
            gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
            const resLoc = gl.getUniformLocation(program, "u_resolution");
            const timeLoc = gl.getUniformLocation(program, "u_time");
            const mouseLoc = gl.getUniformLocation(program, "u_mouse");
            const scrollLoc = gl.getUniformLocation(program, "u_scroll");
            const mVelLoc = gl.getUniformLocation(program, "u_mouse_velocity");
            const sSpdLoc = gl.getUniformLocation(program, "u_scroll_speed");
            const depthScaleLoc = gl.getUniformLocation(program, "u_depth_scale");
            let animId;
            let startTime = Date.now();
            const render = {
                "SovereignWebGLStage.useEffect.render": ()=>{
                    const mX = mouseRef.current.x;
                    const mY = mouseRef.current.y;
                    const dx = mX - lastMouseRef.current.x;
                    const dy = mY - lastMouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    mouseVelocityRef.current = mouseVelocityRef.current * 0.94 + dist * 0.06;
                    lastMouseRef.current = {
                        x: mX,
                        y: mY
                    };
                    scrollSpeedRef.current *= 0.94;
                    const targetDepthScale = 1.0 + scrollProgressRef.current * 2.0;
                    const kLerp = Math.max(0.005, Math.min(0.15, 0.05 - mouseVelocityRef.current * 0.2));
                    depthScaleRef.current = depthScaleRef.current * (1.0 - kLerp) + targetDepthScale * kLerp;
                    const targetScroll = scrollProgressRef.current;
                    const scrollLerp = Math.max(0.01, Math.min(0.15, 0.06 - mouseVelocityRef.current * 0.15));
                    smoothScrollProgressRef.current = smoothScrollProgressRef.current * (1.0 - scrollLerp) + targetScroll * scrollLerp;
                    gl.viewport(0, 0, dimensions.width, dimensions.height);
                    gl.clear(gl.COLOR_BUFFER_BIT);
                    gl.uniform2f(resLoc, dimensions.width, dimensions.height);
                    gl.uniform1f(timeLoc, (Date.now() - startTime) * 0.001);
                    gl.uniform2f(mouseLoc, mX, mY);
                    gl.uniform1f(scrollLoc, smoothScrollProgressRef.current);
                    gl.uniform1f(mVelLoc, mouseVelocityRef.current);
                    gl.uniform1f(sSpdLoc, Math.min(scrollSpeedRef.current * 0.06, 3.5));
                    gl.uniform1f(depthScaleLoc, depthScaleRef.current);
                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                    animId = requestAnimationFrame(render);
                }
            }["SovereignWebGLStage.useEffect.render"];
            render();
            return ({
                "SovereignWebGLStage.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    gl.deleteBuffer(positionBuffer);
                    gl.deleteProgram(program);
                }
            })["SovereignWebGLStage.useEffect"];
        }
    }["SovereignWebGLStage.useEffect"], "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true), [
        dimensions,
        isLowPerformance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-10 opacity-70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            width: dimensions.width,
            height: dimensions.height,
            className: "w-full h-full pointer-events-none block"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/the-sanctum/components/SovereignWebGLStage.tsx",
            lineNumber: 284,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/the-sanctum/components/SovereignWebGLStage.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s(SovereignWebGLStage, "WhOlOZ5N7hrt1C8Ezsu4uX/AH84=");
_c = SovereignWebGLStage;
var _c;
__turbopack_context__.k.register(_c, "SovereignWebGLStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/the-sanctum/components/welcome-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeToast",
    ()=>WelcomeToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/the-sanctum/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WelcomeToast() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomeToast.useEffect": ()=>{
            // ignore if screen height is too small
            if (window.innerHeight < 650) return;
            if (!document.cookie.includes("welcome-toast=2")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("🛍️ Welcome to Next.js Commerce!", {
                    id: "welcome-toast",
                    duration: Infinity,
                    onDismiss: {
                        "WelcomeToast.useEffect": ()=>{
                            document.cookie = "welcome-toast=2; max-age=31536000; path=/";
                        }
                    }["WelcomeToast.useEffect"],
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "This is a high-performance, SSR storefront powered by Shopify, Next.js, and Vercel.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$the$2d$sanctum$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://vercel.com/templates/next.js/nextjs-commerce",
                                className: "text-blue-600 hover:underline",
                                target: "_blank",
                                children: "Deploy your own"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/the-sanctum/components/welcome-toast.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true)
                });
            }
        }
    }["WelcomeToast.useEffect"], []);
    return null;
}
_s(WelcomeToast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WelcomeToast;
var _c;
__turbopack_context__.k.register(_c, "WelcomeToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_the-sanctum_372a9a90._.js.map