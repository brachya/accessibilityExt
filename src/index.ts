import { languages } from "./global";
import { setLang, resetLang } from "./elements";

/**
 * @description an init function to add the button and sidebar to body
 * @example Negishut()
 * @example for NextJs wrap it in useEffect
 */
export default async function Negishut(language: languages = "he") {
  if (document.readyState !== "complete") {
    await new Promise<void>((resolve) => {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") resolve();
      });
    });
  }
  const { setLang } = await import("./elements");
  setLang(document.documentElement.lang as languages);
  const { default: draggableButton } = await import("./draggableButton");
  const { default: sidebar } = await import("./sidebar");
  if (!document.getElementById("negishutDragBtn")) {
    document.body.append(draggableButton);
    document.body.append(sidebar);
  }
}
export const setLanguage = (language: languages) => {
  setLang(language);
  resetLang();
};
