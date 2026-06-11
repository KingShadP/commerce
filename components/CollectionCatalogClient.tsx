"use client";

import React, { useState } from "react";
import { Product, ProductVariant } from "lib/shopify/types";
import { useCart } from "components/cart/cart-context";
import { addItem } from "components/cart/actions";
import ProductCard from "components/ProductCard";
import { Eye, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CollectionCatalogClientProps {
  products: Product[];
}

export default function CollectionCatalogClient({ products }: CollectionCatalogClientProps) {
  const { addCartItem } = useCart();
  const [viewMode, setViewMode] = useState<"photo" | "blueprint">("photo");
  const [tensionFilter, setTensionFilter] = useState<"all" | "base" | "sculpt" | "compress">("all");
  const [addedProductSize, setAddedProductSize] = useState<{ [key: string]: string }>({});

  // Filter items based on segment names / handles
  const filteredProducts = products.filter((p) => {
    if (tensionFilter === "all") return true;
    const handle = p.handle.toLowerCase();
    if (tensionFilter === "base") {
      return handle.includes("boxer") || handle.includes("underwear");
    }
    if (tensionFilter === "sculpt") {
      return handle.includes("hoodie") || handle.includes("pants") || handle.includes("tee");
    }
    if (tensionFilter === "compress") {
      return handle.includes("tank") || handle.includes("ls") || handle.includes("compression");
    }
    return true;
  });

  const handleBlueprintAdd = async (product: Product, size: string, color: string) => {
    // Find variant matching selected size and color
    const variant = product.variants.find((v) => {
      const isColorMatch = v.selectedOptions.some(
        (o) =>
          (o.name.toLowerCase() === "color" || o.name.toLowerCase() === "colour") &&
          o.value.toLowerCase() === color.toLowerCase()
      );
      const isSizeMatch = v.selectedOptions.some(
        (o) => o.name.toLowerCase() === "size" && o.value.toLowerCase() === size.toLowerCase()
      );
      return isColorMatch && isSizeMatch;
    });

    const targetVariant = variant || product.variants[0];
    if (targetVariant) {
      addCartItem(targetVariant, product);
      
      const key = `${product.id}-${size}`;
      setAddedProductSize((prev) => ({ ...prev, [key]: "VERIFIED" }));
      setTimeout(() => {
        setAddedProductSize((prev) => ({ ...prev, [key]: "" }));
      }, 1500);

      await addItem(null, targetVariant.id);
    }
  };

  // Helper to extract numeric tension values for blueprint display
  const getTensionScore = (handle: string) => {
    if (handle.includes("boxer") || handle.includes("underwear")) return "80G/SQ_CM";
    if (handle.includes("hoodie") || handle.includes("pants") || handle.includes("tee")) return "120G/SQ_CM";
    return "320G/SQ_CM";
  };

  return (
    <div className="space-y-10 font-sans">
      
      {/* Dynamic System OS Control Center Toggles */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 border border-white/5 select-none">
        
        {/* Left: Tension Filter Segment tabs */}
        <div className="flex flex-wrap gap-2 text-[8.5px] tracking-[2px] uppercase font-bold">
          {[
            { id: "all", label: "ALL UNITS" },
            { id: "base", label: "BASE / LOW TENSION" },
            { id: "sculpt", label: "SCULPT / MID RECOVERY" },
            { id: "compress", label: "COMPRESS / HIGH SHAPE" }
          ].map((tab) => {
            const isSelected = tensionFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setTensionFilter(tab.id as any)}
                className={`px-3 py-2 border rounded-full transition-all cursor-pointer ${
                  isSelected 
                    ? "border-skims-accent bg-skims-accent/5 text-skims-accent shadow-[0_0_8px_rgba(197,168,128,0.25)]" 
                    : "border-white/5 text-skims-sand/55 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right: Interactive Layout View Toggle */}
        <div className="flex gap-2 bg-black/40 p-1 border border-white/10 rounded-full text-[8.5px] tracking-[1.5px] uppercase font-bold">
          <button
            onClick={() => setViewMode("photo")}
            className={`px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === "photo" ? "bg-skims-accent text-black" : "text-skims-sand/40 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Photo Deck</span>
          </button>
          <button
            onClick={() => setViewMode("blueprint")}
            className={`px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === "blueprint" ? "bg-skims-accent text-black" : "text-skims-sand/40 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Blueprint Data</span>
          </button>
        </div>
      </div>

      {/* Grid Canvas */}
      <AnimatePresence mode="wait">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 text-center text-[9px] text-skims-sand/30 tracking-[3px] uppercase font-sans"
          >
            No products found matching this filter
          </motion.div>
        ) : viewMode === "photo" ? (
          /* Standard 3D card deck grid layout */
          <motion.div
            key="photo-deck"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          /* Wireframe Blueprint structural specs grid layout */
          <motion.div
            key="blueprint-deck"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[10px] font-sans"
          >
            {filteredProducts.map((product) => {
              // Extract colors from options
              const colorOption = product.options.find(
                (o) => o.name.toLowerCase() === "color" || o.name.toLowerCase() === "colour"
              );
              const specColor = colorOption ? colorOption.values[0] || "Onyx" : "Onyx";
              
              // Extract sizes
              const sizeOption = product.options.find((o) => o.name.toLowerCase() === "size");
              const specSizes = sizeOption ? sizeOption.values : ["S", "M", "L", "XL"];

              const specPrice = product.priceRange.minVariantPrice.amount;

              return (
                <div
                  key={product.id}
                  className="bg-black/60 border border-skims-accent/20 p-5 rounded-2xl relative flex flex-col justify-between aspect-[3/4] text-left hover:border-skims-accent transition-colors shadow-2xl overflow-hidden font-sans"
                >
                  {/* Fine HUD Grid Backdrop */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />
                  
                  {/* Corner styling reticles */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20 pointer-events-none" />

                  {/* Top HUD values */}
                  <div className="flex justify-between items-center text-[7px] text-skims-sand/30 tracking-[2px] uppercase">
                    <span>SKU: {product.id}</span>
                    <span className="text-skims-accent">Tension: {getTensionScore(product.handle)}</span>
                  </div>

                  {/* Product title specs */}
                  <div className="space-y-4 pt-4">
                    <div className="space-y-1">
                      <h3 className="font-serif text-[15px] font-light text-white tracking-wide uppercase leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-[8px] text-skims-accent uppercase tracking-[1px]">
                        Color: {specColor.toUpperCase()}
                      </p>
                    </div>

                    {/* Spec log details block */}
                    <div className="bg-white/[0.02] border border-white/5 p-3 space-y-2 text-[8px] text-skims-sand/50 uppercase tracking-[1px]">
                      <div>Material: Woven Modal stretch blend</div>
                      <div>Seams: Double-stitched flatlock</div>
                      <div>Stretch: 2.5x stretch retention</div>
                      <div>Weight: {product.handle.includes("hoodie") ? "420 GSM" : "180 GSM"}</div>
                    </div>
                  </div>

                  {/* Size registry buttons */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <span className="text-[7.5px] text-white/30 uppercase tracking-[2px] block">
                      Select Sizing:
                    </span>
                    <div className="grid grid-cols-4 gap-1.5 text-[8.5px]">
                      {specSizes.map((size) => {
                        const statusKey = `${product.id}-${size}`;
                        const isAdded = addedProductSize[statusKey] === "VERIFIED";
                        return (
                          <button
                            key={size}
                            onClick={() => handleBlueprintAdd(product, size, specColor)}
                            className={`py-2 border transition-all text-center font-bold cursor-pointer rounded ${
                              isAdded 
                                ? "bg-green-400 border-green-400 text-black" 
                                : "border-white/10 text-white hover:border-skims-accent/60 hover:bg-skims-accent/5"
                            }`}
                          >
                            {isAdded ? "✓" : size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price log */}
                  <div className="flex justify-between items-end pt-4">
                    <div>
                      <span className="text-[7px] text-white/20 uppercase block">Price</span>
                      <span className="text-white text-[13px] font-bold">${specPrice}</span>
                    </div>
                    <span className="text-[6.5px] text-skims-sand/20 tracking-[1.5px] uppercase">
                      In Stock
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
