export type FilterStrengthKeys =
  | grayscale
  | invert
  | brightness
  | sepia
  | saturate
  | sepiaHue;

declare module "*.svg" {
  const content: string;
  export default content;
}
