import type { languages } from "./global";
import { applyDir, resolveDir, setDir, watchDocumentDir } from "./dir";
import { setLang, resetLang } from "./elements";
import {
  applyChrome,
  resolveOptions,
  setTheme,
  setZIndex,
  type NegishutOptions,
} from "./theme";

export type { NegishutDir } from "./dir";
export type { NegishutColorScheme, NegishutOptions, NegishutTheme } from "./theme";
export { resolveDir, setDir };
export { setTheme, setZIndex };

/**
 * Map BCP-47 tags (`he-IL`, `en-US`) onto the widget's `he` | `en` catalogs.
 * Host apps must stay free to pass either form.
 */
export function resolveLanguage(language?: string): languages {
  const candidates = [
    language,
    typeof document !== "undefined" ? document.documentElement.lang : "",
  ];

  for (const candidate of candidates) {
    const raw = String(candidate || "").trim().toLowerCase();
    if (raw.startsWith("he")) return "he";
    if (raw.startsWith("en")) return "en";
  }

  return "he";
}

/**
 * @description an init function to add the button and sidebar to body
 * @example Negishut()
 * @example Negishut({ language: "en", theme: { accent: "#d4af37" }, zIndex: 10000 })
 * @example for NextJs wrap it in useEffect
 */
export default async function Negishut(
  languageOrOptions: languages | NegishutOptions = "he",
) {
  if (typeof document === "undefined") {
    return;
  }

  if (document.readyState !== "complete") {
    await new Promise<void>((resolve) => {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") resolve();
      });
    });
  }

  const options = resolveOptions(languageOrOptions);
  applyChrome({ theme: options.theme, zIndex: options.zIndex });

  const { setLang } = await import("./elements");
  setLang(resolveLanguage(options.language));
  applyDir(resolveDir(options.dir, options.language));
  const { default: draggableButton } = await import("./draggableButton");
  const { default: sidebar } = await import("./sidebar");
  applyDir(resolveDir(options.dir, options.language));
  watchDocumentDir();
  if (!document.getElementById("negishutDragBtn")) {
    document.body.append(draggableButton);
    document.body.append(sidebar);
  }
}
export const setLanguage = (language: languages) => {
  setLang(resolveLanguage(language));
  resetLang();
  applyDir(resolveDir(undefined, language));
};
