"use server";

import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  verifyAdminPasscode,
} from "lib/admin-auth";
import {
  defaultSiteDesign,
  saveSiteDesignSettings,
  type SiteDesignSettings,
} from "lib/site-design";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const colorPattern = /^#[0-9a-f]{6}$/i;

function text(formData: FormData, key: string, fallback: string) {
  const value = formData.get(key)?.toString().trim();
  return value || fallback;
}

function number(
  formData: FormData,
  key: string,
  fallback: number,
  min: number,
  max: number,
) {
  const value = Number(formData.get(key));
  return Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;
}

function color(formData: FormData, key: string, fallback: string) {
  const value = formData.get(key)?.toString() || "";
  return colorPattern.test(value) ? value.toUpperCase() : fallback;
}

function imageUrl(formData: FormData, key: string, fallback: string) {
  const value = formData.get(key)?.toString().trim() || "";
  return value.startsWith("/") || value.startsWith("https://")
    ? value
    : fallback;
}

export async function loginAdmin(formData: FormData) {
  const passcode = formData.get("passcode")?.toString() || "";

  if (!verifyAdminPasscode(passcode)) {
    redirect("/admin/login?error=invalid");
  }

  await createAdminSession();
  redirect("/admin/design");
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}

export type SaveDesignState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function saveDesign(
  _previousState: SaveDesignState,
  formData: FormData,
): Promise<SaveDesignState> {
  if (!(await isAdminAuthenticated())) {
    return { status: "error", message: "Your admin session expired." };
  }

  const settings: SiteDesignSettings = {
    brandName: text(formData, "brandName", defaultSiteDesign.brandName),
    brandDescriptor: text(
      formData,
      "brandDescriptor",
      defaultSiteDesign.brandDescriptor,
    ),
    announcement: text(
      formData,
      "announcement",
      defaultSiteDesign.announcement,
    ),
    accentColor: color(
      formData,
      "accentColor",
      defaultSiteDesign.accentColor,
    ),
    backgroundColor: color(
      formData,
      "backgroundColor",
      defaultSiteDesign.backgroundColor,
    ),
    foregroundColor: color(
      formData,
      "foregroundColor",
      defaultSiteDesign.foregroundColor,
    ),
    heroImageOpacity: number(
      formData,
      "heroImageOpacity",
      defaultSiteDesign.heroImageOpacity,
      0,
      0.8,
    ),
    overlayStrength: number(
      formData,
      "overlayStrength",
      defaultSiteDesign.overlayStrength,
      0.25,
      0.95,
    ),
    motionIntensity: number(
      formData,
      "motionIntensity",
      defaultSiteDesign.motionIntensity,
      0,
      1.5,
    ),
    fogEnabled: formData.get("fogEnabled") === "on",
    lightSweepEnabled: formData.get("lightSweepEnabled") === "on",
    floorReflectionEnabled:
      formData.get("floorReflectionEnabled") === "on",
    grainEnabled: formData.get("grainEnabled") === "on",
    roomImages: [
      imageUrl(
        formData,
        "roomImage0",
        defaultSiteDesign.roomImages[0],
      ),
      imageUrl(
        formData,
        "roomImage1",
        defaultSiteDesign.roomImages[1],
      ),
      imageUrl(
        formData,
        "roomImage2",
        defaultSiteDesign.roomImages[2],
      ),
    ],
    updatedAt: new Date().toISOString(),
  };

  try {
    await saveSiteDesignSettings(settings);
    revalidatePath("/", "layout");
    return { status: "success", message: "Storefront design published." };
  } catch (error) {
    console.error("Unable to save site design", error);
    return {
      status: "error",
      message:
        "Design could not be saved. Check the configured storage connection.",
    };
  }
}

