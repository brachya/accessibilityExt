var _a;
export const sidebar = document.createElement("div");
export const draggableButton = document.createElement("button");
export const wheel = document.createElement("div");
export const road1 = document.createElement("div");
export const road2 = document.createElement("div");
export const road3 = document.createElement("div");
export const road4 = document.createElement("div");
export const negishutPos = (_a = JSON.parse(localStorage.getItem("NegishutPos"))) !== null && _a !== void 0 ? _a : {};
export let buttonSize = 70;
let isDragged = false;
export const getIsDragged = () => isDragged;
export const setIsDragged = (changeTo) => {
    isDragged = changeTo;
};
