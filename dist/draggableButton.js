"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("./func");
const draggableButton = document.createElement("button");
const image = document.createElement("img");
const road1 = document.createElement("div");
const road2 = document.createElement("div");
const road3 = document.createElement("div");
const road4 = document.createElement("div");
let offsetX = 0; // X offset between cursor and button
let offsetY = 0; // Y offset between cursor and button
let isDragging = false; // Whether the button is being dragged
const dragBtnOpt = {
    type: "button",
    ariaLabel: "כפתור נגישות",
    style: {
        width: "70px",
        position: "fixed",
        right: "90px",
        top: `${window.innerHeight - 70}px`,
        backgroundColor: "#007BFF",
        color: "white",
        borderRadius: "5px",
        cursor: "grab",
        zIndex: "9999999",
        overflow: "hidden",
    },
    draggable: true,
};
const imageOpt = {
    src: "./assets/wheel.svg",
    style: {
        width: "100%",
        margin: "0px",
    },
};
const roadOpt = {
    style: {
        width: "15px",
        height: "2px",
        left: "75px",
        backgroundColor: "white",
        borderRadius: "20%",
        position: "absolute",
        bottom: "1px",
    },
};
let roadMove = 0;
setInterval(() => {
    road1.style.transform = `translateX(${roadMove}px)`;
    road2.style.transform = `translateX(${(roadMove - 22) % 90}px)`;
    road3.style.transform = `translateX(${(roadMove - 45) % 90}px)`;
    road4.style.transform = `translateX(${(roadMove - 68) % 90}px)`;
    roadMove = (roadMove - 2) % 90;
}, 100);
(0, func_1.js2Style)(draggableButton, dragBtnOpt);
(0, func_1.js2Style)(image, imageOpt);
(0, func_1.js2Style)(road1, roadOpt);
(0, func_1.js2Style)(road2, roadOpt);
(0, func_1.js2Style)(road3, roadOpt);
(0, func_1.js2Style)(road4, roadOpt);
draggableButton.append(image);
draggableButton.append(road1, road2, road3, road4);
const startDrag = (event) => {
    // Prevent the default action, like text selection
    event.preventDefault();
    // Get the initial mouse position
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    // Set the initial offsets for dragging
    offsetX = clientX - draggableButton.getBoundingClientRect().left;
    offsetY = clientY - draggableButton.getBoundingClientRect().top;
    // Set dragging to true and change cursor style
    isDragging = true;
    draggableButton.style.cursor = "grabbing";
    // Attach mousemove/touchmove and mouseup/touchend listeners
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", stopDrag);
};
// Drag the button by updating its position
const drag = (event) => {
    if (!isDragging)
        return;
    // Get the mouse position
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    // Calculate new position
    const x = clientX - offsetX;
    const y = clientY - offsetY;
    // Move the button to the new position
    //   draggableButton.style.position = "fixed"; // Make sure the button is fixed positioned
    draggableButton.style.left = `${x}px`;
    draggableButton.style.top = `${y}px`;
};
// Stop dragging when mouse up or touch end
const stopDrag = () => {
    if (!isDragging)
        return;
    // Reset dragging flag
    isDragging = false;
    // Remove event listeners for dragging
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", stopDrag);
    // Reset cursor to default
    draggableButton.style.cursor = "grab";
};
// Add event listeners to start dragging on mouse down or touch start
draggableButton.addEventListener("mousedown", startDrag);
draggableButton.addEventListener("touchstart", startDrag);
draggableButton.addEventListener("click", func_1.openSidBar);
draggableButton.addEventListener("touchstart", func_1.openSidBar);
addEventListener("resize", func_1.resetBtnPos);
exports.default = draggableButton;
