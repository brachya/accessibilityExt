import type { languages } from "./global";
import type { NegishutDir } from "./dir";

export type NegishutColorScheme = "light" | "dark";

export type NegishutTheme = {
  accent?: string;
  accentHover?: string;
  accentStrong?: string;
  onAccent?: string;
  surface?: string;
  surfaceMuted?: string;
  text?: string;
  border?: string;
  checked?: string;
  radius?: string;
  font?: string;
  backdrop?: string;
  fabBorder?: string;
  fabRadius?: string;
  icon?: string;
  colorScheme?: NegishutColorScheme;
};

export type NegishutOptions = {
  language?: languages | string;
  dir?: NegishutDir | string;
  theme?: NegishutTheme;
  zIndex?: number;
};

export const DEFAULT_Z_INDEX = 10000;

export const DEFAULT_THEME: Required<NegishutTheme> = {
  accent: "#007BFF",
  accentHover: "rgba(42, 119, 191, 0.5)",
  accentStrong: "#2e42ff",
  onAccent: "#ffffff",
  surface: "rgba(200, 200, 200, 0.5)",
  surfaceMuted: "rgba(255, 255, 255, 0.3)",
  text: "black",
  border: "skyblue",
  checked: "rgb(82, 192, 212)",
  radius: "5px",
  font: "inherit",
  backdrop: "rgb(0 0 0 / 0.45)",
  fabBorder: "#ffffff",
  fabRadius: "5px",
  icon: "black",
  colorScheme: "light",
};

const STYLE_ID = "negishut-chrome";

let theme: Required<NegishutTheme> = { ...DEFAULT_THEME };
let zIndex = DEFAULT_Z_INDEX;

function definedOnly<T extends object>(value: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as Partial<T>;
}

export function resolveOptions(
  languageOrOptions: languages | NegishutOptions | undefined,
): NegishutOptions {
  if (languageOrOptions && typeof languageOrOptions === "object") {
    return languageOrOptions;
  }
  return { language: languageOrOptions ?? "he" };
}

function chromeCss(): string {
  return `:root {
  --negishut-accent: ${theme.accent};
  --negishut-accent-hover: ${theme.accentHover};
  --negishut-accent-strong: ${theme.accentStrong};
  --negishut-on-accent: ${theme.onAccent};
  --negishut-surface: ${theme.surface};
  --negishut-surface-muted: ${theme.surfaceMuted};
  --negishut-text: ${theme.text};
  --negishut-border: ${theme.border};
  --negishut-checked: ${theme.checked};
  --negishut-radius: ${theme.radius};
  --negishut-font: ${theme.font};
  --negishut-backdrop: ${theme.backdrop};
  --negishut-fab-border: ${theme.fabBorder};
  --negishut-fab-radius: ${theme.fabRadius};
  --negishut-icon: ${theme.icon};
  --negishut-color-scheme: ${theme.colorScheme};
  --negishut-z-panel: ${zIndex};
  --negishut-z-button: ${zIndex + 10};
  --negishut-z-dialog: ${zIndex + 30};
}

#negishutStatement::backdrop {
  background: var(--negishut-backdrop);
}

#sidebar {
  left: 0;
  right: auto;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  color-scheme: var(--negishut-color-scheme);
}

#sidebar select {
  appearance: none;
  -webkit-appearance: none;
  color: var(--negishut-text);
  background-color: color-mix(in srgb, var(--negishut-text) 14%, var(--negishut-surface));
  border: 1px solid color-mix(in srgb, var(--negishut-text) 28%, transparent);
  border-radius: var(--negishut-radius);
  font: inherit;
  font-family: var(--negishut-font);
  color-scheme: var(--negishut-color-scheme);
  cursor: pointer;
  padding-block: 0.2em;
  padding-inline: 0.45em 1.55em;
  text-align: center;
  background-image: linear-gradient(45deg, transparent 50%, var(--negishut-text) 50%),
    linear-gradient(135deg, var(--negishut-text) 50%, transparent 50%);
  background-position:
    calc(100% - 13px) calc(50% - 1px),
    calc(100% - 8px) calc(50% - 1px);
  background-size: 5px 5px;
  background-repeat: no-repeat;
}

#sidebar[dir="rtl"] select {
  padding-inline: 1.55em 0.45em;
  background-position:
    8px calc(50% - 1px),
    13px calc(50% - 1px);
}

#sidebar select:focus {
  outline: none;
  border-color: var(--negishut-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--negishut-accent) 35%, transparent);
}

#sidebar select option {
  color: var(--negishut-text);
  background-color: color-mix(in srgb, var(--negishut-text) 10%, var(--negishut-surface));
}

#sidebar[dir="rtl"] {
  left: auto;
  right: 0;
  transform: translateX(100%);
}

#sidebar.negishut-open,
#sidebar[dir="rtl"].negishut-open {
  transform: translateX(0);
}

@media print {
  body > #sidebar,
  #negishutStatement,
  #negishutDragBtn.draggableButtonNegishut {
    display: none !important;
  }
}
`;
}

export function applyChrome(
  options?: Pick<NegishutOptions, "theme" | "zIndex">,
): void {
  if (typeof document === "undefined") {
    return;
  }
  if (options?.theme) {
    theme = { ...theme, ...definedOnly(options.theme) } as Required<NegishutTheme>;
  }
  if (options?.zIndex != null && Number.isFinite(options.zIndex)) {
    zIndex = options.zIndex;
  }

  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.append(el);
  }
  el.textContent = chromeCss();
}

export function setTheme(next: NegishutTheme): void {
  applyChrome({ theme: next });
}

export function setZIndex(next: number): void {
  applyChrome({ zIndex: next });
}
