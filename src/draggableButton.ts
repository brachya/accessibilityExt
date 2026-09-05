import {
  buttonSize,
  draggableButton,
  negishutPos,
  road1,
  road2,
  road3,
  road4,
  setIsDragged,
} from "./elements";
import { jsToStyle, openSideBar, resetBtnPos } from "./func";
import type { JsEl } from "./global";
import { cases } from "./wheelChair";
const image = document.createElement("div");
let offsetX = 0; // X offset between cursor and button
let offsetY = 0; // Y offset between cursor and button
let isDragging = false; // Whether the button is being dragged
let xForBackup: number;
let yForBackup: number;
const savedFabLeft =
  "x" in negishutPos ? `${negishutPos["x"]}px` : undefined;

const dragBtnOpt: JsEl = {
  type: "button",
  ariaLabel: "כפתור נגישות",
  className: "draggableButtonNegishut",
  id: "negishutDragBtn",
  style: {
    width: `${buttonSize}px`,
    aspectRatio: "1/1",
    position: "fixed",
    border: "3px solid var(--negishut-fab-border)",
    ...(savedFabLeft
      ? { left: savedFabLeft }
      : { insetInlineStart: "90px" }),
    top: `${"y" in negishutPos ? negishutPos["y"] : window.innerHeight - 70}px`,
    backgroundColor: "var(--negishut-accent)",
    color: "var(--negishut-on-accent)",
    borderRadius: "var(--negishut-fab-radius)",
    cursor: "grab",
    zIndex: "var(--negishut-z-button)",
    overflow: "hidden",
  },
  draggable: true,
};

const imageOpt: JsEl = {
  dir: "ltr",
  style: {
    width: "100%",
    margin: "0px",
  },
};
const roadOpt: JsEl = {
  style: {
    width: "20%",
    height: "3%",
    left: "100%",
    backgroundColor: "var(--negishut-on-accent)",
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
function pointerClient(event: TouchEvent | MouseEvent) {
  const touch = "touches" in event ? event.touches[0] : undefined;
  return {
    clientX: touch?.clientX ?? ("clientX" in event ? event.clientX : 0),
    clientY: touch?.clientY ?? ("clientY" in event ? event.clientY : 0),
  };
}

const startDrag = (event: TouchEvent | MouseEvent) => {
  // Prevent the default action, like text selection
  event.preventDefault();
  // Get the initial mouse position
  const { clientX, clientY } = pointerClient(event);
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
const drag = (event: TouchEvent | MouseEvent) => {
  if (!isDragging) return;
  setIsDragged(true);

  // Get the mouse position
  const { clientX, clientY } = pointerClient(event);

  // Calculate new position
  xForBackup = clientX - offsetX;
  yForBackup = clientY - offsetY;
  // Move the button to the new position
  //   draggableButton.style.position = "fixed"; // Make sure the button is fixed positioned
  draggableButton.style.insetInlineStart = "";
  draggableButton.style.right = "";
  draggableButton.style.left = `${xForBackup}px`;
  draggableButton.style.top = `${yForBackup}px`;
};

// Stop dragging when mouse up or touch end
const stopDrag = () => {
  if (!isDragging) return;
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

addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.altKey && event.code == "KeyA") {
    event.preventDefault();
    draggableButton.click();
  }
});

// Add event listeners to start dragging on mouse down or touch start
draggableButton.addEventListener("mousedown", startDrag);
draggableButton.addEventListener("touchstart", startDrag, { passive: false });
draggableButton.addEventListener("click", openSideBar);
draggableButton.addEventListener("touchstart", openSideBar, { passive: false });
addEventListener("resize", resetBtnPos);

export default draggableButton;
