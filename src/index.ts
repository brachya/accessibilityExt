import draggableButton from "./draggableButton";
import sidebar from "./sidebar";
/**
 * @description an init function to add the button and sidebar to body
 * @example Negishut()
 */
export default function Negishut() {
  document.body.append(draggableButton);
  document.body.append(sidebar);
}
