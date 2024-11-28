import draggableButton from "./draggableButton";
import sidebar from "./sidebar";
/**
 * @description an init function to add the button and sidebar to body
 * @example initiate()
 */
export const initiate = () => {
  document.body.append(draggableButton);
  document.body.append(sidebar);
};
export const next = () => [draggableButton, sidebar];
