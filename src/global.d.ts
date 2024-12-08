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
