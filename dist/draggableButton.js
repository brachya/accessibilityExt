import { buttonSize, draggableButton, negishutPos, road1, road2, road3, road4, setIsDragged, } from "./elements";
import { jsToStyle, openSideBar, resetBtnPos } from "./func";
import { cases } from "./wheelChair";
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
        width: `${buttonSize}px`,
        aspectRatio: "1/1",
        position: "fixed",
        border: "3px solid white",
        left: `${"x" in negishutPos ? negishutPos["x"] : "90"}px`,
        top: `${"y" in negishutPos ? negishutPos["y"] : window.innerHeight - 70}px`,
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
jsToStyle(draggableButton, dragBtnOpt);
jsToStyle(image, imageOpt);
jsToStyle(road1, roadOpt);
jsToStyle(road2, roadOpt);
jsToStyle(road3, roadOpt);
jsToStyle(road4, roadOpt);
image.appendChild(cases);
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
    setIsDragged(true);
    // Get the mouse position
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    // Calculate new position
    xForBackup = clientX - offsetX;
    yForBackup = clientY - offsetY;
    // Move the button to the new position
    //   draggableButton.style.position = "fixed"; // Make sure the button is fixed positioned
    draggableButton.style.left = `${xForBackup}px`;
    draggableButton.style.top = `${yForBackup}px`;
};
// Stop dragging when mouse up or touch end
const stopDrag = () => {
    if (!isDragging)
        return;
    negishutPos["x"] = xForBackup;
    negishutPos["y"] = yForBackup;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
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
addEventListener("keydown", (event) => {
    if (event.altKey && event.code == "KeyA") {
        event.preventDefault();
        draggableButton.click();
    }
});
// Add event listeners to start dragging on mouse down or touch start
draggableButton.addEventListener("mousedown", startDrag);
draggableButton.addEventListener("touchstart", startDrag);
draggableButton.addEventListener("click", openSideBar);
draggableButton.addEventListener("touchstart", openSideBar);
addEventListener("resize", resetBtnPos);
export default draggableButton;
