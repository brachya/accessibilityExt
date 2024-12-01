"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = require("./elements");
const func_1 = require("./func");
const wheelChair_1 = require("./wheelChair");
const image = document.createElement("div");
let offsetX = 0; // X offset between cursor and button
let offsetY = 0; // Y offset between cursor and button
let isDragging = false; // Whether the button is being dragged
let xForBackup;
let yForBackup;
const dragBtnOpt = {
    dir: "ltr",
    type: "button",
    ariaLabel: "כפתור נגישות",
    className: "draggableButtonNegishut",
    id: "negishutDragBtn",
    style: {
        width: `${elements_1.buttonSize}px`,
        aspectRatio: "1/1",
        position: "fixed",
        border: "3px solid white",
        left: `${"x" in elements_1.negishutPos ? elements_1.negishutPos["x"] : "90"}px`,
        top: `${"y" in elements_1.negishutPos ? elements_1.negishutPos["y"] : window.innerHeight - 70}px`,
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
    style: {
        width: "100%",
        margin: "0px",
    },
};
const roadOpt = {
    style: {
        width: "20%",
        height: "3%",
        left: "100%",
        backgroundColor: "white",
        borderRadius: "20%",
        position: "absolute",
        bottom: "13%",
    },
};
(0, func_1.jsToStyle)(elements_1.draggableButton, dragBtnOpt);
(0, func_1.jsToStyle)(image, imageOpt);
(0, func_1.jsToStyle)(elements_1.road1, roadOpt);
(0, func_1.jsToStyle)(elements_1.road2, roadOpt);
(0, func_1.jsToStyle)(elements_1.road3, roadOpt);
(0, func_1.jsToStyle)(elements_1.road4, roadOpt);
image.appendChild(wheelChair_1.cases);
elements_1.draggableButton.append(image);
elements_1.draggableButton.append(elements_1.road1, elements_1.road2, elements_1.road3, elements_1.road4);
const startDrag = (event) => {
    // Prevent the default action, like text selection
    event.preventDefault();
    // Get the initial mouse position
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    // Set the initial offsets for dragging
    offsetX = clientX - elements_1.draggableButton.getBoundingClientRect().left;
    offsetY = clientY - elements_1.draggableButton.getBoundingClientRect().top;
    // Set dragging to true and change cursor style
    isDragging = true;
    elements_1.draggableButton.style.cursor = "grabbing";
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
    (0, elements_1.setIsDragged)(true);
    // Get the mouse position
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    // Calculate new position
    xForBackup = clientX - offsetX;
    yForBackup = clientY - offsetY;
    // Move the button to the new position
    //   draggableButton.style.position = "fixed"; // Make sure the button is fixed positioned
    elements_1.draggableButton.style.left = `${xForBackup}px`;
    elements_1.draggableButton.style.top = `${yForBackup}px`;
};
// Stop dragging when mouse up or touch end
const stopDrag = () => {
    if (!isDragging)
        return;
    elements_1.negishutPos["x"] = xForBackup;
    elements_1.negishutPos["y"] = yForBackup;
    localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    // Reset dragging flag
    isDragging = false;
    // Remove event listeners for dragging
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", stopDrag);
    // Reset cursor to default
    elements_1.draggableButton.style.cursor = "grab";
};
addEventListener("keydown", (event) => {
    if (event.altKey && event.code == "KeyA") {
        event.preventDefault();
        elements_1.draggableButton.click();
    }
});
// Add event listeners to start dragging on mouse down or touch start
elements_1.draggableButton.addEventListener("mousedown", startDrag);
elements_1.draggableButton.addEventListener("touchstart", startDrag);
elements_1.draggableButton.addEventListener("click", func_1.openSideBar);
elements_1.draggableButton.addEventListener("touchstart", func_1.openSideBar);
addEventListener("resize", func_1.resetBtnPos);
exports.default = elements_1.draggableButton;
