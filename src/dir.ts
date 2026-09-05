import { draggableButton, lang, sidebar, statement } from "./elements";

export type NegishutDir = "rtl" | "ltr";

let currentDir: NegishutDir | null = null;
let dirObserver: MutationObserver | null = null;

export function resolveDir(
  explicit?: string,
  language?: string,
): NegishutDir {
  if (explicit === "rtl" || explicit === "ltr") {
    return explicit;
  }

  if (typeof document !== "undefined") {
    const htmlDir = document.documentElement.getAttribute("dir")?.toLowerCase();
    if (htmlDir === "rtl" || htmlDir === "ltr") {
      return htmlDir;
    }
  }

  const code = String(language || lang || "").toLowerCase();
  if (code.startsWith("he")) {
    return "rtl";
  }
  if (code) {
    return "ltr";
  }

  return "rtl";
}

export function applySidebarDock(open: boolean): void {
  sidebar.style.transform = "";
  sidebar.style.left = "";
  sidebar.style.right = "";
  sidebar.style.insetInlineStart = "";
  sidebar.classList.toggle("negishut-open", open);
}

export function applyDir(dir: NegishutDir): void {
  currentDir = dir;
  sidebar.dir = dir;
  statement.dir = dir;
  draggableButton.dir = dir;
}

export function setDir(dir: NegishutDir): void {
  applyDir(dir);
}

export function getDir(): NegishutDir {
  return currentDir ?? resolveDir();
}

export function watchDocumentDir(): void {
  if (typeof document === "undefined" || dirObserver) {
    return;
  }

  dirObserver = new MutationObserver(() => {
    applyDir(resolveDir());
  });
  dirObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir"],
  });
}
