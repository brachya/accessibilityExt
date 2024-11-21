import draggableButton from "./draggableButton";
import sidebar from "./sidebar";
HTMLElement;
interface jsEl {
  style?: Partial<CSSStyleDeclaration>;
  innerHTML?: string;
  id?: string;
}
export const js2Style = (
  el: HTMLElement,
  js: jsEl,
  sub: null | string = null
) => {
  Object.keys(js).forEach((key) => {
    const typedKey = key as keyof jsEl;
    if (js[typedKey] instanceof Object) {
      js2Style(el, js[typedKey] as any, typedKey);
    } else if (sub == null) {
      (el as any)[typedKey] = js[typedKey];
    } else {
      ((el as any)[sub] as any)[typedKey] = js[typedKey];
    }
  });
};
export const pushStyle = (
  styleEl: HTMLStyleElement,
  styleObj: { [key: string]: string }
) => {
  styleEl.innerHTML = Object.values(styleObj).join(" ");
};
export let sidebarOpen = false;
export const openSidBar = () => {
  if (!sidebarOpen) {
    sidebar.style.left = "0"; // Slide in the sidebar
    sidebarOpen = true;
  } else {
    sidebar.style.left = `-${sidebar.offsetWidth}px`; // Hide the sidebar
    sidebarOpen = false;
  }
};
export const resetBtnPos = () => {
  draggableButton.style.right = "5px";
  draggableButton.style.top = `${window.innerHeight - 70}px`;
};
export const createOptionsEl = (
  elOptions: { value: string; textContent: string }[]
) => {
  return elOptions.map((el) => {
    const opt = document.createElement("option");
    opt.value = el.value;
    opt.textContent = el.textContent;
    return opt;
  });
};
