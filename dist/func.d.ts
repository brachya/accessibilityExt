import { JsEl } from "./global";
export declare const jsToStyle: (el: HTMLElement, js: JsEl, sub?: null | string) => void;
export declare const pushStyle: (styleEl: HTMLStyleElement, styleObj: {
    [key: string]: string;
}) => void;
export declare let sidebarOpen: boolean;
export declare const openSideBar: () => void;
export declare const resetBtnPos: () => void;
export declare const createOptionsEl: (elOptions: {
    value: string;
    textContent: string;
}[]) => HTMLOptionElement[];
export declare const readMe: (event: any) => void;
