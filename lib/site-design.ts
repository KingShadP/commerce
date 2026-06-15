import { list, put } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";
import { promises as fs } from "node:fs";
import path from "node:path";

export type SiteDesignSettings = {
  brandName: string;
  brandDescriptor: string;
  announcement: string;
  accentColor: string;
  backgroundColor: string;
  foregroundColor: string;
  heroImageOpacity: number;
  overlayStrength: number;
  motionIntensity: number;
  fogEnabled: boolean;
  lightSweepEnabled: boolean;
  floorReflectionEnabled: boolean;
  grainEnabled: boolean;
  roomImages: [string, string, string];
  updatedAt: string;
};

export const defaultSiteDesign: SiteDesignSettings = {
  brandName: "KSHADP",
  brandDescriptor: "Atelier Cores",
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
    "/cinematic_room_3.jpg",
  ],
  updatedAt: new Date(0).toISOString(),
};

const blobPath = "settings/site-design.json";
const localPath = path.join(process.cwd(), ".data", "site-design.json");

function normalizeSettings(input: Partial<SiteDesignSettings>) {
  return {
    ...defaultSiteDesign,
    ...input,
    roomImages: [
      input.roomImages?.[0] || defaultSiteDesign.roomImages[0],
      input.roomImages?.[1] || defaultSiteDesign.roomImages[1],
      input.roomImages?.[2] || defaultSiteDesign.roomImages[2],
    ] as [string, string, string],
  };
}

async function readBlobSettings() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  const result = await list({ prefix: blobPath, limit: 1 });
  const blob = result.blobs.find((item) => item.pathname === blobPath);
  if (!blob) return null;

  const response = await fetch(blob.url, { cache: "no-store" });
  if (!response.ok) return null;
  return normalizeSettings(
    (await response.json()) as Partial<SiteDesignSettings>,
  );
}

async function readLocalSettings() {
  try {
    const value = await fs.readFile(localPath, "utf8");
    return normalizeSettings(
      JSON.parse(value) as Partial<SiteDesignSettings>,
    );
  } catch {
    return null;
  }
}

export async function getSiteDesignSettings() {
  noStore();

  try {
    const persisted = process.env.BLOB_READ_WRITE_TOKEN
      ? await readBlobSettings()
      : await readLocalSettings();
    return persisted || defaultSiteDesign;
  } catch (error) {
    console.error("Unable to load site design settings", error);
    return defaultSiteDesign;
  }
}

export async function saveSiteDesignSettings(
  settings: SiteDesignSettings,
) {
  const normalized = normalizeSettings(settings);

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(blobPath, JSON.stringify(normalized), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 0,
      contentType: "application/json",
    });
    return normalized;
  }

  await fs.mkdir(path.dirname(localPath), { recursive: true });
  await fs.writeFile(localPath, JSON.stringify(normalized, null, 2), "utf8");
  return normalized;
}

