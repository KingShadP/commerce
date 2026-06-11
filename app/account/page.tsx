"use client";

import React, { useState } from "react";
import { User, ShoppingBag, MapPin, Key, Award, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "address" | "keys">("orders");

  const historicalOrders = [
    {
      id: "ORD-88294",
      date: "May 16, 2026",
      total: "$152.00",
      status: "Delivered",
      items: [
        { name: "Ribbed Boxer Brief", size: "M", color: "Onyx", qty: 2, price: "$56.00" },
        { name: "Fleece Lounge Hoodie", size: "M", color: "Cocoa", qty: 1, price: "$88.00" }
      ]
    },
    {
      id: "ORD-11928",
      date: "May 12, 2026",
      total: "$70.00",
      status: "Delivered",
      items: [
        { name: "Stretch Muscle Tank", size: "L", color: "Sand", qty: 1, price: "$36.00" },
        { name: "Lounge Crewneck Tee", size: "L", color: "Clay", qty: 1, price: "$34.00" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-12 font-sans select-none text-left">
      
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-8 gap-6 text-left relative">
        <div className="absolute top-0 right-0 w-24 h-[1px] bg-skims-accent/30" />
        <div className="space-y-3">
          <span className="text-[8px] text-skims-accent tracking-[3px] uppercase block">
            Patron Account Dashboard
          </span>
          <h1 className="font-serif text-3xl md:text-4.5xl text-white uppercase tracking-wider font-light">
            My Account
          </h1>
          <p className="font-sans text-xs text-skims-sand/55 leading-relaxed font-light">
            Welcome back to the Sanctum. You are logged in as a <span className="text-white font-bold">Patron Member</span>.
          </p>
        </div>

        <div className="text-right text-[8.5px] text-skims-sand/40 uppercase tracking-[2px]">
          <div>Customer ID: <span className="text-white">KSD-PATRON-09827</span></div>
          <div className="mt-1">Member Class: <span className="text-skims-accent font-bold">VIP Elite</span></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Navigation Links & Profile Summary */}
        <div className="w-full lg:w-[32%] space-y-8">
          <div className="glass-panel border border-white/10 p-6 space-y-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-skims-accent/30 rounded-full flex items-center justify-center bg-black/40 relative">
                <User className="w-5 h-5 text-skims-accent" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black" />
              </div>
              <div className="text-left">
                <h3 className="text-[12px] text-white font-bold uppercase">Patron Member</h3>
                <span className="text-[9px] text-skims-sand/40 select-text">patron@thesanctum.com</span>
              </div>
            </div>

            <div className="h-[1px] bg-white/5" />

            {/* Profile Tab Navigation */}
            <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[1.5px]">
              {[
                { id: "orders", label: "Order History", icon: ShoppingBag },
                { id: "address", label: "Shipping Address", icon: MapPin },
                { id: "keys", label: "Account Credentials", icon: Key }
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-3 p-3.5 border transition-all cursor-pointer rounded-xl font-bold text-left ${
                      isSelected
                        ? "border-skims-accent bg-skims-accent/5 text-skims-accent shadow-[0_0_8px_rgba(197,168,128,0.2)]"
                        : "border-transparent text-skims-sand/55 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Security alert ledger */}
          <div className="border border-skims-accent/20 bg-[#0D0C0B]/60 p-5 space-y-2.5 text-[10px] rounded-2xl">
            <div className="flex items-center gap-2 text-skims-accent font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>Customer Information Security</span>
            </div>
            <p className="font-sans text-white/45 leading-relaxed font-light select-text">
              Your connection is encrypted with active SSL certificates. All personal data and payment records are secure. To update your profile or edit order parameters, please contact customer support.
            </p>
          </div>
        </div>

        {/* Right Side: Tab Contents */}
        <div className="w-full lg:w-[68%] glass-panel border border-white/10 p-6 md:p-8 min-h-[420px] rounded-3xl shadow-xl">
          
          {/* ORDERS LOG TAB */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 className="text-[10px] uppercase tracking-[2.5px] text-white font-bold flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-skims-accent" />
                  Order Registry
                </h2>
                <span className="text-[7.5px] text-white/20 tracking-[1px]">Active Orders</span>
              </div>

              <div className="space-y-6">
                {historicalOrders.map((order) => (
                  <div key={order.id} className="border border-white/5 p-5 bg-black/40 space-y-4 rounded-xl">
                    <div className="flex flex-wrap justify-between items-center text-[10.5px] gap-3 border-b border-white/5 pb-3">
                      <div>
                        <span className="text-white/30 font-bold uppercase">Order ID:</span>{" "}
                        <span className="text-white font-bold">{order.id}</span>
                      </div>
                      <div className="text-white/30 font-bold uppercase">
                        Date: <span className="text-white font-medium">{order.date}</span>
                      </div>
                      <div>
                        Status: <span className="text-green-400 font-bold">{order.status}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                          <div className="text-left">
                            <h4 className="font-serif text-white uppercase font-light text-[12px]">{item.name}</h4>
                            <p className="text-[8px] text-skims-sand/40 uppercase mt-0.5 tracking-[1px]">
                              Size: {item.size} / Color: {item.color} / Qty: {item.qty}
                            </p>
                          </div>
                          <span className="text-white font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-white/5 pt-3 flex justify-between items-center text-xs font-bold">
                      <span className="text-white/30 uppercase tracking-[1.5px]">Amount Paid</span>
                      <span className="text-skims-accent">{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADDRESS REGISTRY LOG TAB */}
          {activeTab === "address" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 className="text-[10px] uppercase tracking-[2.5px] text-white font-bold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-skims-accent" />
                  Primary Shipping Address
                </h2>
                <span className="text-[7.5px] text-white/20 tracking-[1px]">Primary Location</span>
              </div>

              <div className="border border-white/5 p-5 bg-black/40 space-y-4 max-w-md rounded-xl">
                <div className="flex justify-between items-center text-[9px] font-bold">
                  <span className="text-skims-accent tracking-[2px] uppercase">Default Shipping Address</span>
                </div>
                
                <div className="text-[11px] space-y-1.5 text-white/70 text-left font-sans font-light leading-relaxed select-text">
                  <p className="font-bold text-white uppercase tracking-[1px]">Patron Member</p>
                  <p>108 Cliffside Ridge Way</p>
                  <p>Miami, Florida 33139</p>
                  <p>United States</p>
                </div>

                <div className="pt-2">
                  <button className="px-4 py-2 border border-white/10 hover:border-skims-accent text-skims-sand hover:text-white text-[8.5px] uppercase tracking-[2px] transition-all duration-300 cursor-pointer rounded-full bg-black/20 font-bold">
                    Edit Address Coordinates
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CREDENTIAL KEYS LOG TAB */}
          {activeTab === "keys" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 className="text-[10px] uppercase tracking-[2.5px] text-white font-bold flex items-center gap-2">
                  <Key className="w-3.5 h-3.5 text-skims-accent" />
                  Secure Account Tokens
                </h2>
                <span className="text-[7.5px] text-white/20 tracking-[1px]">Auth Details</span>
              </div>

              <div className="space-y-4">
                <div className="border border-white/5 p-4 bg-black/40 flex justify-between items-center text-[10px] rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-skims-accent" />
                    <div>
                      <span className="font-bold text-white block uppercase tracking-[1px]">Patron Digital Certificate</span>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mt-0.5">Verified active member ticket signature validated</span>
                    </div>
                  </div>
                  <span className="text-green-400 font-bold uppercase text-[9px]">ACTIVE</span>
                </div>

                <div className="border border-white/5 p-4 bg-black/40 flex justify-between items-center text-[10px] rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-skims-accent" />
                    <div>
                      <span className="font-bold text-white block uppercase tracking-[1px]">Shopify API Gate token</span>
                      <span className="text-[7.5px] text-white/30 uppercase tracking-widest block mt-0.5">Secure storefront connection endpoint validated</span>
                    </div>
                  </div>
                  <span className="text-green-400 font-bold uppercase text-[9px]">ACTIVE</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
