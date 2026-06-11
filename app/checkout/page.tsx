"use client";

import React, { useState } from "react";
import { useCart } from "components/cart/cart-context";
import { CreditCard, Truck, ShieldCheck, ShoppingBag, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const cartLines = cart?.lines || [];
  const cartTotal = Number(cart?.cost?.totalAmount?.amount || 0);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      const generatedId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsProcessing(false);
      setIsComplete(true);
      
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.65 },
        colors: ["#C5A880", "#EAE6DF", "#5C4F44", "#12100E"]
      });
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center font-sans select-none">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="glass-panel border border-skims-accent/30 p-8 md:p-12 space-y-6 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-skims-accent" />
          
          <CheckCircle2 className="w-12 h-12 text-skims-accent mx-auto" />
          
          <div className="space-y-2">
            <span className="text-[8.5px] text-skims-accent tracking-[5px] uppercase block">
              Order Confirmed
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-wider font-light">
              Acquisition Logged
            </h2>
          </div>

          <div className="bg-black/40 border border-white/5 p-5 space-y-3 text-[10.5px]">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-white/30 font-bold uppercase tracking-[1.5px]">Order ID</span>
              <span className="text-white">{orderId}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-white/30 font-bold uppercase tracking-[1.5px]">Status</span>
              <span className="text-green-400 font-bold">Preparing for shipment</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/30 font-bold uppercase tracking-[1.5px]">Email Address</span>
              <span className="text-white">{form.email}</span>
            </div>
          </div>

          <p className="font-sans text-[12px] text-skims-sand/50 leading-relaxed font-light select-text">
            Your order has been securely processed and scheduled in the shipping queue. A confirmation email with real-time tracking metrics has been sent to <span className="text-white font-medium">{form.email}</span>. Thank you for shopping at KSHADP.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-10 py-4.5 bg-skims-accent hover:bg-white text-black font-sans font-bold text-[9.5px] tracking-[3px] uppercase transition-all duration-300 rounded-full hover:scale-[1.02]"
            >
              Return to Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-12 font-sans select-none text-left">
      
      {/* Page Title */}
      <div className="border-b border-white/5 pb-6 relative flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="absolute top-0 right-0 w-24 h-[1px] bg-skims-accent/20" />
        <div className="space-y-2">
          <span className="text-[8.5px] text-skims-accent tracking-[4px] uppercase block">
            03 | Checkout Process
          </span>
          <h1 className="font-serif text-3xl md:text-4.5xl text-white uppercase tracking-wider font-light">
            Secure Checkout
          </h1>
        </div>
        <div className="text-[7.5px] text-skims-sand/25 tracking-[2.5px] uppercase">
          Shopify Secure Gateway Enabled
        </div>
      </div>

      {cartLines.length === 0 ? (
        <div className="text-center py-24 space-y-6">
          <ShoppingBag className="w-12 h-12 text-skims-sand/20 mx-auto stroke-[1px]" />
          <p className="text-skims-sand/40 text-xs tracking-[2px] uppercase">Your shopping bag is empty.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-skims-accent text-black font-sans font-bold text-[9px] tracking-[3px] uppercase hover:bg-white transition-colors rounded-full"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Shipping & Card Billing Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-[58%] space-y-10">
            
            {/* 1. Contact / Logistics Destination */}
            <div className="space-y-5">
              <h3 className="text-[10px] uppercase tracking-[3px] text-skims-accent font-bold flex items-center gap-2 border-b border-white/5 pb-3">
                <Truck className="w-4 h-4 text-skims-accent" />
                Shipping Information
              </h3>
              
              <div className="space-y-4 text-[10px]">
                <div className="flex flex-col gap-2">
                  <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                    Email Address *
                  </label>
                  <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                    <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address..."
                      className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      First Name *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name..."
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      Last Name *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name..."
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                    Shipping Address *
                  </label>
                  <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                    <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                    <input
                      type="text"
                      name="address"
                      required
                      value={form.address}
                      onChange={handleInputChange}
                      placeholder="Street address..."
                      className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      City *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="city"
                        required
                        value={form.city}
                        onChange={handleInputChange}
                        placeholder="City..."
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      ZIP / Postal Code *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={form.zipCode}
                        onChange={handleInputChange}
                        placeholder="ZIP Code..."
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Encrypted Payment Vault */}
            <div className="space-y-5">
              <h3 className="text-[10px] uppercase tracking-[3px] text-skims-accent font-bold flex items-center gap-2 border-b border-white/5 pb-3">
                <CreditCard className="w-4 h-4 text-skims-accent" />
                Payment Information
              </h3>

              <div className="space-y-4 text-[10px]">
                <div className="flex flex-col gap-2">
                  <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                    Card Number *
                  </label>
                  <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                    <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      value={form.cardNumber}
                      onChange={handleInputChange}
                      placeholder="•••• •••• •••• ••••"
                      className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      Expiry Date *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="cardExpiry"
                        required
                        value={form.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM / YY"
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="uppercase tracking-[2px] text-skims-sand/40 font-bold">
                      CVC *
                    </label>
                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3.5 focus-within:border-skims-accent transition-colors">
                      <span className="text-skims-accent mr-2 font-bold">&gt;</span>
                      <input
                        type="text"
                        name="cardCvc"
                        required
                        value={form.cardCvc}
                        onChange={handleInputChange}
                        placeholder="•••"
                        className="w-full bg-transparent border-none text-white placeholder:text-white/10 focus:outline-none uppercase tracking-widest text-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit clearance logs button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isProcessing}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4.5 bg-skims-accent hover:bg-white text-black font-sans font-bold text-[9.5px] tracking-[3px] uppercase transition-all duration-500 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed shadow-xl hover:shadow-[0_4px_30px_rgba(197,168,128,0.25)] rounded-full"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Complete Order / ${cartTotal.toFixed(2)}
                  </>
                )}
              </motion.button>
            </div>

          </form>

          {/* Right Side: Invoice Summary */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-24 glass-panel border border-white/10 p-6 md:p-8 space-y-6 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <h3 className="text-[10px] uppercase tracking-[3px] text-white font-bold flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5 text-skims-accent" />
                Order Summary
              </h3>
            </div>

            {/* Item listing */}
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartLines.map((item, idx) => {
                const img = item.merchandise.product.featuredImage?.url || "";
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-stretch text-[10.5px] border-b border-white/5 pb-4 gap-4"
                  >
                    <div className="flex gap-3 text-left">
                      <div className="w-10 h-14 bg-black border border-white/5 overflow-hidden flex-shrink-0 relative">
                        {img && <img src={img} alt={item.merchandise.product.title} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-white uppercase text-[11px] font-light leading-snug">
                            {item.merchandise.product.title}
                          </h4>
                          <p className="text-[7.5px] text-skims-sand/40 uppercase tracking-[1px] mt-0.5 font-sans">
                            Options: {item.merchandise.title}
                          </p>
                        </div>
                        <span className="text-[7.5px] text-skims-accent/80 font-sans">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between items-end">
                      <span className="text-white font-sans">
                        ${Number(item.cost.totalAmount.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ledger Balance */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-[10px] uppercase tracking-[2px]">
              <div className="flex justify-between text-skims-sand/40">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-skims-sand/40">
                <span>Shipping</span>
                <span className="text-green-400 font-bold">Free</span>
              </div>
              <div className="border-t border-white/5 pt-3 flex justify-between text-white font-bold text-xs">
                <span>Total</span>
                <span className="text-skims-accent">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            {/* System key readouts */}
            <div className="pt-2 border-t border-white/5 text-center text-[7.5px] text-skims-sand/30 uppercase tracking-[1px]">
              Secure checkout processed via Shopify gateway
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
