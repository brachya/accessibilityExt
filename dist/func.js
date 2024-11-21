"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOptionsEl = exports.resetBtnPos = exports.openSidBar = exports.sidebarOpen = exports.pushStyle = exports.js2Style = void 0;
const draggableButton_1 = __importDefault(require("./draggableButton"));
const sidebar_1 = __importDefault(require("./sidebar"));
HTMLElement;
const js2Style = (el, js, sub = null) => {
    Object.keys(js).forEach((key) => {
        const typedKey = key;
        if (js[typedKey] instanceof Object) {
            (0, exports.js2Style)(el, js[typedKey], typedKey);
        }
        else if (sub == null) {
            el[typedKey] = js[typedKey];
        }
        else {
            el[sub][typedKey] = js[typedKey];
        }
    });
};
exports.js2Style = js2Style;
const pushStyle = (styleEl, styleObj) => {
    styleEl.innerHTML = Object.values(styleObj).join(" ");
};
exports.pushStyle = pushStyle;
exports.sidebarOpen = false;
const openSidBar = () => {
    if (!exports.sidebarOpen) {
        sidebar_1.default.style.left = "0"; // Slide in the sidebar
        exports.sidebarOpen = true;
    }
    else {
        sidebar_1.default.style.left = `-${sidebar_1.default.offsetWidth}px`; // Hide the sidebar
        exports.sidebarOpen = false;
    }
};
exports.openSidBar = openSidBar;
const resetBtnPos = () => {
    draggableButton_1.default.style.right = "5px";
    draggableButton_1.default.style.top = `${window.innerHeight - 70}px`;
};
exports.resetBtnPos = resetBtnPos;
const createOptionsEl = (elOptions) => {
    return elOptions.map((el) => {
        const opt = document.createElement("option");
        opt.value = el.value;
        opt.textContent = el.textContent;
        return opt;
    });
};
exports.createOptionsEl = createOptionsEl;
