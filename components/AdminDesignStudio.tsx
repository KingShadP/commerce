"use client";

import {
  Eye,
  ImageIcon,
  LogOut,
  Palette,
  RotateCcw,
  Save,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import type { SiteDesignSettings } from "lib/site-design";
import { useActionState, useState } from "react";
import {
  logoutAdmin,
  saveDesign,
  type SaveDesignState,
} from "app/admin/actions";

const initialActionState: SaveDesignState = {
  status: "idle",
  message: "",
};

function Toggle({
  name,
  label,
  checked,
  onChange,
}: {
  name: keyof SiteDesignSettings;
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-black/20 px-4 py-3">
      <span className="text-[9px] uppercase tracking-[0.18em] text-white/65">
        {label}
      </span>
      <span className="relative h-6 w-11">
        <input
          className="peer sr-only"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="absolute inset-0 rounded-full bg-white/10 transition peer-checked:bg-skims-accent" />
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 peer-checked:bg-black" />
      </span>
    </label>
  );
}

export default function AdminDesignStudio({
  initialSettings,
  storageMode,
}: {
  initialSettings: SiteDesignSettings;
  storageMode: "Vercel Blob" | "Local development";
}) {
  const [settings, setSettings] =
    useState<SiteDesignSettings>(initialSettings);
  const [state, action, pending] = useActionState(
    saveDesign,
    initialActionState,
  );

  const update = <Key extends keyof SiteDesignSettings>(
    key: Key,
    value: SiteDesignSettings[Key],
  ) => setSettings((current) => ({ ...current, [key]: value }));

  const updateRoom = (index: number, value: string) => {
    setSettings((current) => {
      const roomImages = [...current.roomImages] as [
        string,
        string,
        string,
      ];
      roomImages[index] = value;
      return { ...current, roomImages };
    });
  };

  return (
    <div className="relative z-40 min-h-screen bg-[#090807]/92 px-4 pb-28 pt-14 text-white backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.4em] text-skims-accent">
              Authorized workspace
            </p>
            <h1 className="mt-3 font-serif text-3xl uppercase tracking-[0.08em] sm:text-4xl">
              Storefront Design Studio
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
              Edit the global visual system, review it live, and publish one
              consistent design document across the storefront.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-white/45">
              Storage: {storageMode}
            </span>
            <form action={logoutAdmin}>
              <button className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-white/60 transition hover:border-white/30 hover:text-white">
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </button>
            </form>
          </div>
        </header>

        <form action={action} className="mt-8 grid gap-8 xl:grid-cols-[460px_1fr]">
          <div className="space-y-5">
            <section className="rounded-3xl border border-white/10 bg-[#11100e]/90 p-5 shadow-2xl">
              <h2 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]">
                <Palette className="h-4 w-4 text-skims-accent" />
                Brand and palette
              </h2>
              <div className="mt-5 grid gap-4">
                {[
                  ["brandName", "Brand name"],
                  ["brandDescriptor", "Brand descriptor"],
                  ["announcement", "Announcement bar"],
                ].map(([name, label]) => (
                  <label key={name}>
                    <span className="mb-2 block text-[8px] uppercase tracking-[0.2em] text-white/45">
                      {label}
                    </span>
                    <input
                      name={name}
                      value={String(settings[name as keyof SiteDesignSettings])}
                      onChange={(event) =>
                        update(
                          name as
                            | "brandName"
                            | "brandDescriptor"
                            | "announcement",
                          event.target.value,
                        )
                      }
                      className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm outline-none transition focus:border-skims-accent"
                    />
                  </label>
                ))}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["accentColor", "Accent"],
                    ["backgroundColor", "Canvas"],
                    ["foregroundColor", "Text"],
                  ].map(([name, label]) => (
                    <label key={name}>
                      <span className="mb-2 block text-[8px] uppercase tracking-[0.16em] text-white/45">
                        {label}
                      </span>
                      <input
                        name={name}
                        type="color"
                        value={String(
                          settings[name as keyof SiteDesignSettings],
                        )}
                        onChange={(event) =>
                          update(
                            name as
                              | "accentColor"
                              | "backgroundColor"
                              | "foregroundColor",
                            event.target.value,
                          )
                        }
                        className="h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-black/30 p-1"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#11100e]/90 p-5">
              <h2 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]">
                <SlidersHorizontal className="h-4 w-4 text-skims-accent" />
                Atmosphere
              </h2>
              <div className="mt-5 space-y-5">
                {[
                  [
                    "heroImageOpacity",
                    "Campaign image opacity",
                    0,
                    0.8,
                    0.01,
                  ],
                  [
                    "overlayStrength",
                    "Text safety overlay",
                    0.25,
                    0.95,
                    0.01,
                  ],
                  ["motionIntensity", "Motion intensity", 0, 1.5, 0.05],
                ].map(([name, label, min, max, step]) => (
                  <label key={String(name)} className="block">
                    <span className="mb-2 flex justify-between text-[8px] uppercase tracking-[0.18em] text-white/45">
                      <span>{label}</span>
                      <span className="text-white/70">
                        {Number(
                          settings[name as keyof SiteDesignSettings],
                        ).toFixed(2)}
                      </span>
                    </span>
                    <input
                      name={String(name)}
                      type="range"
                      min={Number(min)}
                      max={Number(max)}
                      step={Number(step)}
                      value={Number(
                        settings[name as keyof SiteDesignSettings],
                      )}
                      onChange={(event) =>
                        update(
                          name as
                            | "heroImageOpacity"
                            | "overlayStrength"
                            | "motionIntensity",
                          Number(event.target.value),
                        )
                      }
                      className="w-full accent-[#C5A880]"
                    />
                  </label>
                ))}
                <div className="grid gap-2 sm:grid-cols-2">
                  <Toggle
                    name="fogEnabled"
                    label="Smoky fog"
                    checked={settings.fogEnabled}
                    onChange={(value) => update("fogEnabled", value)}
                  />
                  <Toggle
                    name="lightSweepEnabled"
                    label="Gold light sweep"
                    checked={settings.lightSweepEnabled}
                    onChange={(value) => update("lightSweepEnabled", value)}
                  />
                  <Toggle
                    name="floorReflectionEnabled"
                    label="Floor reflection"
                    checked={settings.floorReflectionEnabled}
                    onChange={(value) =>
                      update("floorReflectionEnabled", value)
                    }
                  />
                  <Toggle
                    name="grainEnabled"
                    label="Film grain"
                    checked={settings.grainEnabled}
                    onChange={(value) => update("grainEnabled", value)}
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#11100e]/90 p-5">
              <h2 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]">
                <ImageIcon className="h-4 w-4 text-skims-accent" />
                Architectural rooms
              </h2>
              <div className="mt-5 space-y-4">
                {["Entry gallery", "Circular salon", "Archive portal"].map(
                  (label, index) => (
                    <label key={label}>
                      <span className="mb-2 block text-[8px] uppercase tracking-[0.18em] text-white/45">
                        {label}
                      </span>
                      <input
                        name={`roomImage${index}`}
                        value={settings.roomImages[index]}
                        onChange={(event) =>
                          updateRoom(index, event.target.value)
                        }
                        className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-xs outline-none transition focus:border-skims-accent"
                      />
                    </label>
                  ),
                )}
              </div>
            </section>

            <div className="sticky bottom-4 flex gap-3 rounded-2xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setSettings(initialSettings)}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 text-[8px] uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Revert
              </button>
              <button
                disabled={pending}
                className="flex h-11 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-skims-accent text-[8px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:opacity-60"
              >
                <Save className="h-3.5 w-3.5" />
                {pending ? "Publishing..." : "Publish design"}
              </button>
            </div>
            {state.message ? (
              <p
                className={`text-xs ${
                  state.status === "success" ? "text-green-300" : "text-red-300"
                }`}
              >
                {state.message}
              </p>
            ) : null}
          </div>

          <aside className="xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)]">
            <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/60">
                  <Eye className="h-4 w-4 text-skims-accent" />
                  Live design preview
                </span>
                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  Unpublished
                </span>
              </div>
              <div
                className="relative min-h-[620px] flex-1 overflow-hidden"
                style={{
                  color: settings.foregroundColor,
                  backgroundColor: settings.backgroundColor,
                }}
              >
                <img
                  src={settings.roomImages[0]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black"
                  style={{ opacity: settings.overlayStrength }}
                />
                {settings.fogEnabled ? (
                  <div className="absolute inset-x-[-15%] bottom-[5%] h-[42%] bg-[radial-gradient(ellipse_at_center,rgba(225,210,192,0.2),transparent_62%)] blur-2xl" />
                ) : null}
                {settings.lightSweepEnabled ? (
                  <div
                    className="absolute inset-y-[-15%] left-[12%] w-[30%] rotate-[-12deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
                    style={{ color: settings.accentColor }}
                  />
                ) : null}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, ${settings.backgroundColor}77, transparent 35%, ${settings.backgroundColor}aa)`,
                  }}
                />
                <div
                  className="absolute left-0 right-0 top-0 h-7 text-center text-[7px] font-bold uppercase tracking-[0.35em] text-black"
                  style={{ backgroundColor: settings.accentColor }}
                >
                  <span className="inline-flex h-full items-center">
                    {settings.announcement}
                  </span>
                </div>
                <div className="absolute left-1/2 top-12 -translate-x-1/2 text-center">
                  <p className="font-serif text-sm tracking-[0.45em]">
                    {settings.brandName}
                  </p>
                  <p
                    className="mt-1 text-[6px] uppercase tracking-[0.32em]"
                    style={{ color: settings.accentColor }}
                  >
                    {settings.brandDescriptor}
                  </p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
                  <p
                    className="text-[8px] uppercase tracking-[0.4em]"
                    style={{ color: settings.accentColor }}
                  >
                    The Dragon Series
                  </p>
                  <h2 className="mt-5 max-w-2xl font-serif text-3xl uppercase tracking-[0.08em] sm:text-5xl">
                    Architectural luxury, engineered for motion.
                  </h2>
                  <div className="mt-8 flex gap-3">
                    <span
                      className="px-8 py-4 text-[8px] font-bold uppercase tracking-[0.24em] text-black"
                      style={{ backgroundColor: settings.accentColor }}
                    >
                      Shop collection
                    </span>
                    <span className="border border-white/20 bg-black/40 px-8 py-4 text-[8px] uppercase tracking-[0.24em]">
                      Explore atelier
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

