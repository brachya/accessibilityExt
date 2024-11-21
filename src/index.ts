import draggableButton from "./draggableButton";
import sidebar from "./sidebar";

export function init() {
  document.body.append(draggableButton);
  document.body.appendChild(sidebar);
}
