/**
 * @description an init function to add the button and sidebar to body
 * @example Negishut()
 * @example for NextJs wrap it in useEffect
 */
export default async function Negishut() {
  if (document.readyState !== "complete") {
    await new Promise<void>((resolve) => {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") resolve();
      });
    });
  }
  const { default: draggableButton } = await import("./draggableButton");
  const { default: sidebar } = await import("./sidebar");
  if (!document.getElementById("negishutDragBtn")) {
    document.body.append(draggableButton);
    document.body.append(sidebar);
  }
}
