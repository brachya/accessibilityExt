export type FilterStrengthKeys =
  | "grayscale"
  | "invert"
  | "brightness"
  | "sepia"
  | "saturate"
  | "sepiaHue";

export interface JsEl {
  tabIndex?: number;
  dir?: string;
  type?: string;
  draggable?: boolean;
  ariaLabel?: string;
  style?: Partial<CSSStyleDeclaration>;
  innerHTML?: string;
  innerText?: string;
  className?: string;
  id?: string;
}

export type languages = "he" | "en";
export type labels =
  | "accessibilityBtn"
  | "closeText"
  | "sideBarLabel"
  | "moveHeaderText"
  | "top"
  | "header"
  | "nav"
  | "main"
  | "h1"
  | "h2"
  | "middle"
  | "bottom"
  | "textBiggerLabel"
  | "textSmallerLabel"
  | "textResetLabel"
  | "hyperText"
  | "headerText"
  | "colorBlindText"
  | "invertText"
  | "brightnessText"
  | "blueLightText"
  | "warmColorsText"
  | "coldColorsText"
  | "focusBorderText"
  | "fontChangerText"
  | "pauseAnimateText"
  | "speakerText"
  | "statementBtnText"
  | "statementText"
  | "guideText"
  | "developerText"
  | "noTextError";
