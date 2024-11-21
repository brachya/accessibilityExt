interface jsEl {
    style?: Partial<CSSStyleDeclaration>;
    innerHTML?: string;
    id?: string;
}
export declare const js2Style: (el: HTMLElement, js: jsEl, sub?: null | string) => void;
export declare const pushStyle: (styleEl: HTMLStyleElement, styleObj: {
    [key: string]: string;
}) => void;
export declare let sidebarOpen: boolean;
export declare const openSidBar: () => void;
export declare const resetBtnPos: () => void;
export declare const createOptionsEl: (elOptions: {
    value: string;
    textContent: string;
}[]) => HTMLOptionElement[];
export {};
