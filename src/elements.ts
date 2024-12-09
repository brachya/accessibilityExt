import { languages } from "./global";
import { translate } from "./lang";

export const sidebar = document.createElement("div");

export const draggableButton = document.createElement("button");

export const wheel = document.createElement("div");
export const road1 = document.createElement("div");
export const road2 = document.createElement("div");
export const road3 = document.createElement("div");
export const road4 = document.createElement("div");

export const closeBtn = document.createElement("button");
export const textBigger = document.createElement("button");
export const textSmaller = document.createElement("button");
export const textReset = document.createElement("button");
export const hyperBold = document.createElement("button");
export const headersBold = document.createElement("button");
export const grayScale = document.createElement("button");
export const invertColors = document.createElement("button");
export const brightness = document.createElement("button");
export const sepia = document.createElement("button");
export const saturate = document.createElement("button");
export const sepiaHue = document.createElement("button");
export const focus = document.createElement("button");
export const moveBox = document.createElement("label");
export const moveHeader = document.createElement("span");
export const move = document.createElement("select");
export const font = document.createElement("button");
export const pauseAnimate = document.createElement("button");
export const speaker = document.createElement("button");
export const statement = document.createElement("dialog");
export const paragraphStatement = document.createElement("p");
export const openStateBtn = document.createElement("button");
export const closeStateBtn = document.createElement("button");
export const guide = document.createElement("span");

export const negishutPos = JSON.parse(
  localStorage.getItem("NegishutPos") ?? "{}"
);
export let buttonSize = 70;
let isDragged: boolean = false;
export const getIsDragged = () => isDragged;
export const setIsDragged = (changeTo: boolean) => {
  isDragged = changeTo;
};
export let lang: languages;
export const setLang = (language: languages) => {
  lang = language;
};

export const resetLang = () => {
  draggableButton.ariaLabel = translate[lang].accessibilityBtn;
  sidebar.ariaLabel = translate[lang].sideBarLabel;
  closeBtn.innerText = translate[lang].closeText;
  moveHeader.innerText = translate[lang].moveHeaderText;
  textBigger.ariaLabel = translate[lang].textBiggerLabel;
  textSmaller.ariaLabel = translate[lang].textSmallerLabel;
  textReset.ariaLabel = translate[lang].textResetLabel;
  hyperBold.innerText = translate[lang].hyperText;
  headersBold.innerText = translate[lang].headerText;
  grayScale.innerText = translate[lang].colorBlindText;
  invertColors.innerText = translate[lang].invertText;
  brightness.innerText = translate[lang].brightnessText;
  sepia.innerText = translate[lang].blueLightText;
  sepiaHue.innerText = translate[lang].coldColorsText;
  saturate.innerText = translate[lang].warmColorsText;
  focus.innerText = translate[lang].focusBorderText;
  font.innerText = translate[lang].fontChangerText;
  pauseAnimate.innerText = translate[lang].pauseAnimateText;
  speaker.innerText = translate[lang].speakerText;
  paragraphStatement.innerText = translate[lang].statementText;
  openStateBtn.innerText = translate[lang].statementBtnText;
  closeStateBtn.innerText = translate[lang].closeText;
  guide.innerText =
    translate[lang].guideText + "\n" + translate[lang].developerText;
};
