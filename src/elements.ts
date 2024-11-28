export const sidebar = document.createElement("div");
export const draggableButton = document.createElement("button");
export const wheel = document.createElement("div");
export const road1 = document.createElement("div");
export const road2 = document.createElement("div");
export const road3 = document.createElement("div");
export const road4 = document.createElement("div");
export const negishutPos =
  JSON.parse(localStorage.getItem("NegishutPos")) ?? {};
export let buttonSize = 70;
let isDragged: boolean = false;
export const getIsDragged = () => isDragged;
export const setIsDragged = (changeTo: boolean) => {
  isDragged = changeTo;
};
export const move = document.createElement("select");
