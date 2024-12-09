import {
  move,
  negishutPos,
  sidebar,
  statement,
  lang,
  paragraphStatement,
  grayScale,
  invertColors,
  brightness,
  sepia,
  saturate,
  sepiaHue,
  closeBtn,
  moveBox,
  moveHeader,
  hyperBold,
  textReset,
  textBigger,
  font,
  headersBold,
  pauseAnimate,
  speaker,
  textSmaller,
  focus,
  closeStateBtn,
  openStateBtn,
  guide,
} from "./elements";
import { jsToStyle, openSideBar, pushStyle, readMe } from "./func";
import { FilterStrengthKeys, JsEl } from "./global";
import { translate } from "./lang";
const style = document.createElement("style");

const filterStrength: Record<
  FilterStrengthKeys,
  { btn: HTMLElement; strength: number; addition?: string }
> = {
  grayscale: { btn: grayScale, strength: 100 },
  invert: { btn: invertColors, strength: 100 },
  brightness: { btn: brightness, strength: 150 },
  sepia: { btn: sepia, strength: 80 },
  saturate: { btn: saturate, strength: 800 },
  sepiaHue: { btn: sepiaHue, strength: 80, addition: "hue-rotate(200deg)" },
};

let chosen: FilterStrengthKeys | null = null; // for letting the user choose only one option
const chooseOnlyMe = (event: MouseEvent) => {
  const eventBtn = event.target as HTMLButtonElement;
  const { id } = eventBtn;
  if (chosen && id != chosen) {
    filterStrength[chosen]["btn"].click();
  }
  if (preStyle.filter == "") {
    chosen = id as FilterStrengthKeys;
    preStyle["filter"] = `html{filter:${id == "sepiaHue" ? "sepia" : id}(${
      filterStrength[id as FilterStrengthKeys]["strength"]
    }%) ${
      filterStrength[id as FilterStrengthKeys]["addition"] ?? ""
    } !important;}`;
    negishutPos["filter"] = id;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    delete negishutPos["filter"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
    preStyle["filter"] = "";
    chosen = null;
  }
  pushStyle(style, preStyle);
  eventBtn.classList.toggle("checkedByNegishut");
};

let textSize = 10;
const preStyle = {
  text: "",
  hyper: "",
  headers: "",
  filter: "",
  font: "",
  pauseAnimate: "",
  checkedByNegishut: `
    .checkedByNegishut{
    background: rgb(82, 192, 212) !important;
    } 
    `,
  focus: "",
  draggableButton: `
  .draggableButtonNegishut:hover {
  background: rgba(42, 119, 191, 0.5) !important;
}`,
  addition: `
.hoverByMe {
  --color: #2e42ff;
  padding: 0.8em;
  //  2em;
  background-color: transparent;
  border-radius: 0.6em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  font-size: 17px;
  border: 2px solid var(--color);
  font-family: inherit;
  text-transform: uppercase;
  text-align:center;
  z-index: 1;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hoverByMe::before,
.hoverByMe::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 0.7s ease-in-out;
}

.hoverByMe::before {
  top: -1em;
  left: -1em;
}

.hoverByMe::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}

.hoverByMe:hover::before,
.hoverByMe:hover::after {
  height: 410px;
  width: 410px;
}

.hoverByMe:hover {
  background: linear-gradient(135deg, #2e42ff, #6a75ff);
  color: #ffffff;
  border-color: #6a75ff;
  box-shadow: 0 6px 15px rgba(46, 66, 255, 0.4),
    0 8px 24px rgba(46, 66, 255, 0.2);
  transform: translateY(-3px);

.hoverByMe:active {
  transform: scale(0.97);
  filter: brightness(0.85);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #2e42ff, #5c6bff);
}

.hoverByMe:focus {
  outline: none;
  border-color: #7289da;
  background:rgba(255,255,255,0.8) !important;
  box-shadow: 0 0 0 4px rgba(46, 66, 255, 0.3);
}
.hoverNegishut:hover{
  background: rgba(255,255,255,0.8) !important;
}
.hoverNegishut:focus{
  background: rgba(255,255,255,0.8) !important;
}
@keyframes dissapeareToAppeare{
from{opacity:0%}
to{opacity:100%}
}
#statement,#negishutDragBtn{
animation:dissapeareToAppeare;
animation-duration:1s;
}
`,
};
pushStyle(style, preStyle);
const sidebarOpt: JsEl = {
  id: "sidebar",
  ariaLabel: translate[lang].sideBarLabel,
  style: {
    display: "none",
    position: "fixed",
    top: "0",
    left: `min(-380px,-100vw)`,
    width: "min(380px,100vw)",
    height: "100%",
    backgroundColor: "rgba(200,200,200,0.5)",
    backdropFilter: "blur(8px)",
    color: "black",
    transition: "left 0.3s ease-in-out",
    overflowX: "auto",
    overflowY: "auto",
    paddingLeft: "2px",
    paddingRight: "2px",
    scrollbarWidth: "none",
  },
};
jsToStyle(sidebar, sidebarOpt);
sidebar.tabIndex = 0;
const uniqueName = (cssOpt: any, name: string, id: string) => {
  cssOpt["innerHTML"] = name;
  cssOpt["id"] = id;
  return cssOpt;
};
// Create a close button
closeBtn.style.overflow = "auto";
const btnOpt: JsEl = {
  className: "hoverByMe",
  type: "button",
  style: {
    flex: "1",
    // width: "100%",
    aspectRatio: "1/1",
    background: "rgba(255,255,255,0.3)",
    // backdropFilter: "blur(10px)",
    border: "1px solid skyblue",
    borderRadius: "5%",
    margin: "2px",
  },
};
const closeBtnOpt: JsEl = {
  innerText: translate[lang].closeText,
  className: "hoverNegishut",
  style: {
    top: "10px",
    right: "10px",
    fontSize: "18px",
    border: "1px solid skyblue",
    cursor: "pointer",
    background: "rgba(255,255,255,0.3)",
    borderRadius: "10%",
    padding: "10px",
  },
};
const rowOpt: JsEl = {
  style: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
};
const moveOpt: JsEl = {
  style: {
    color: "black",
    position: "absolute",
    bottom: "10%",
    width: "90%",
    height: "40%",
    border: "1px solid skyblue",
    background: "rgba(255,255,255,0.3)",
    padding: "2px",
    textAlign: "center",
    borderRadius: "10%",
  },
};

const moveBoxOpt: JsEl = {
  style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    font: "bold",
  },
};
const moveHeaderOpt: JsEl = {
  innerText: translate[lang].moveHeaderText,
  tabIndex: 0,
  style: {
    position: "absolute",
    top: "10%",
    font: "bold",
    fontSize: "large",
  },
};
jsToStyle(moveBox, {
  ...btnOpt,
  style: { ...btnOpt["style"], ...moveBoxOpt["style"] },
});
jsToStyle(moveHeader, moveHeaderOpt);
moveBox.append(moveHeader, move);

jsToStyle(closeBtn, closeBtnOpt);
closeBtn.autofocus = true;
// Add event listener to close button
closeBtn.addEventListener("click", openSideBar);

// Append close button and menu to sidebar

jsToStyle(textBigger, uniqueName(btnOpt, "+", "textSizeBigger"));
textBigger.ariaLabel = translate[lang].textBiggerLabel;
textBigger.addEventListener("click", () => {
  preStyle["text"] = `* {
    font-size: ${++textSize}px !important;
  }
  `;
  negishutPos["text"] = textSize;
  localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  pushStyle(style, preStyle);
});
jsToStyle(textSmaller, uniqueName(btnOpt, "-", "textSizeSmaller"));
textSmaller.ariaLabel = translate[lang].textSmallerLabel;
textSmaller.addEventListener("click", () => {
  preStyle["text"] = `* {
    font-size: ${--textSize}px !important;
  }
  `;
  negishutPos["text"] = textSize;
  localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  pushStyle(style, preStyle);
});
jsToStyle(textReset, uniqueName(btnOpt, "X", "textSizeReset"));
textReset.ariaLabel = translate[lang].textResetLabel;
textReset.addEventListener("click", () => {
  preStyle["text"] = "";
  delete negishutPos["text"];
  localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  pushStyle(style, preStyle);
});

jsToStyle(
  hyperBold,
  uniqueName(btnOpt, translate[lang].hyperText, "hyperBold")
);
hyperBold.addEventListener("click", () => {
  if (preStyle.hyper == "") {
    preStyle["hyper"] = `a{
    font-weight:900 !important;
    border:2px solid red !important;
    }`;
    pushStyle(style, preStyle);
    hyperBold.classList.add("checkedByNegishut");
    negishutPos["hyper"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    preStyle["hyper"] = "";
    pushStyle(style, preStyle);
    hyperBold.classList.remove("checkedByNegishut");
    delete negishutPos["hyper"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  }
});
jsToStyle(
  headersBold,
  uniqueName(btnOpt, translate[lang].headerText, "headersBold")
);
headersBold.addEventListener("click", () => {
  if (preStyle.headers == "") {
    preStyle["headers"] = `h1,h2,h3,h4,h5,h6,h7{
      font-weight:900 !important;
    border:2px solid red !important;}`;
    pushStyle(style, preStyle);
    headersBold.classList.add("checkedByNegishut");
    negishutPos["headers"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    preStyle["headers"] = "";
    pushStyle(style, preStyle);
    delete negishutPos["headers"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
    headersBold.classList.remove("checkedByNegishut");
  }
});
jsToStyle(
  grayScale,
  uniqueName(btnOpt, translate[lang].colorBlindText, "grayscale")
);
grayScale.addEventListener("click", chooseOnlyMe);

jsToStyle(
  invertColors,
  uniqueName(btnOpt, translate[lang].invertText, "invert")
);
invertColors.addEventListener("click", chooseOnlyMe);

jsToStyle(
  brightness,
  uniqueName(btnOpt, translate[lang].brightnessText, "brightness")
);
brightness.addEventListener("click", chooseOnlyMe);

jsToStyle(sepia, uniqueName(btnOpt, translate[lang].blueLightText, "sepia"));
sepia.addEventListener("click", chooseOnlyMe);

jsToStyle(
  saturate,
  uniqueName(btnOpt, translate[lang].warmColorsText, "saturate")
);
saturate.addEventListener("click", chooseOnlyMe);

jsToStyle(
  sepiaHue,
  uniqueName(btnOpt, translate[lang].coldColorsText, "sepiaHue")
);
sepiaHue.addEventListener("click", chooseOnlyMe);

jsToStyle(focus, uniqueName(btnOpt, translate[lang].focusBorderText, "focus"));
focus.addEventListener("click", (event) => {
  const eventBtn = event.target as HTMLButtonElement;
  if (preStyle["focus"] == "") {
    preStyle["focus"] = `
    *:focus-visible,
    *:focus {
        border: 4px solid red !important;
        }`;
    eventBtn.classList.add("checkedByNegishut");
    negishutPos["focus"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    preStyle["focus"] = "";
    delete negishutPos["focus"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));

    eventBtn.classList.remove("checkedByNegishut");
  }
  pushStyle(style, preStyle);
});

jsToStyle(font, uniqueName(btnOpt, translate[lang].fontChangerText, "font"));
font.addEventListener("click", (event) => {
  const eventBtn = event.target as HTMLButtonElement;
  if (preStyle["font"] == "") {
    preStyle["font"] = `
    *{
    font-family: Arial, Helvetica, sans-serif !important;
    }`;
    eventBtn.classList.add("checkedByNegishut");
    negishutPos["font"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    preStyle["font"] = "";
    eventBtn.classList.remove("checkedByNegishut");
    delete negishutPos["font"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  }
  pushStyle(style, preStyle);
});

jsToStyle(
  pauseAnimate,
  uniqueName(btnOpt, translate[lang].pauseAnimateText, "pauseAnimate")
);
pauseAnimate.addEventListener("click", (event) => {
  const eventBtn = event.target as HTMLButtonElement;
  if (preStyle["pauseAnimate"] == "") {
    preStyle["pauseAnimate"] = `
    * {
    animation-play-state: paused !important;
    transition: none !important;
    animation:none !important;
    }
    `;
    eventBtn.classList.add("checkedByNegishut");
    const elements = document.querySelectorAll(".element");

    elements.forEach((element: Element) => {
      const computedStyle = window.getComputedStyle(element);
      const transform = computedStyle.transform;
      const el = element as HTMLElement;
      // הפסקת האנימציה
      el.style.animation = "none";

      // החלת מצב הסופי
      if (transform !== "none") {
        el.style.transform = transform;
      }
    });
    negishutPos["pauseAnimate"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  } else {
    preStyle["pauseAnimate"] = "";
    eventBtn.classList.remove("checkedByNegishut");
    delete negishutPos["pauseAnimate"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  }
  pushStyle(style, preStyle);
});
let readActive = false;
jsToStyle(speaker, uniqueName(btnOpt, translate[lang].speakerText, "speaker"));
speaker.style.aspectRatio = "";
speaker.addEventListener("click", (event) => {
  const eventBtn = event.target as HTMLButtonElement;
  if (readActive) {
    removeEventListener("focusin", readMe);
    delete negishutPos["speaker"];
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
    readActive = false;
    eventBtn.classList.remove("checkedByNegishut");
  } else {
    addEventListener("focusin", readMe);
    readActive = true;
    eventBtn.classList.add("checkedByNegishut");
    negishutPos["speaker"] = true;
    localStorage.setItem("NegishutPos", JSON.stringify(negishutPos));
  }
});

const intoRow = (...elements: HTMLElement[]) => {
  const row = document.createElement("div");

  jsToStyle(row, rowOpt);
  elements.forEach((el) => {
    row.appendChild(el);
  });
  return row;
};

jsToStyle(move, moveOpt);

move.addEventListener("change", (event) => {
  const eventSelect = event.target as HTMLSelectElement;
  const { value } = eventSelect;
  const find = document.querySelector(value);
  switch (value) {
    case "top": {
      scrollTo({ top: 0, behavior: "smooth" });
      break;
    }
    case "middle": {
      scrollTo({ top: document.body.offsetHeight / 2, behavior: "smooth" });
      break;
    }
    case "bottom": {
      scrollTo({ top: document.body.offsetHeight, behavior: "smooth" });
      break;
    }
    default: {
      if (find) {
        scrollTo({ top: find.clientTop, behavior: "smooth" });
        break;
      }
    }
  }
});
const statementOpt: JsEl = {
  id: "negishutStatement",
  style: {
    borderRadius: "5%",
    backdropFilter: "blur(10px)",
    border: "2px solid skyblue",
    background: "rgba(255,255,255,0.3)",
    width: "50%",
    padding: "10px",
  },
};

paragraphStatement.style.textAlign = "center";
paragraphStatement.tabIndex = 0;
paragraphStatement.innerText = translate[lang].statementText;
closeStateBtn.autofocus = true;
openStateBtn.addEventListener("click", () => {
  statement.showModal();
});
closeStateBtn.addEventListener("click", () => {
  statement.close();
});
jsToStyle(statement, statementOpt);
jsToStyle(
  openStateBtn,
  uniqueName(closeBtnOpt, translate[lang].statementBtnText, "openStateBtn")
);
jsToStyle(
  closeStateBtn,
  uniqueName(closeBtnOpt, translate[lang].closeText, "closeStateBtn")
);
statement.append(closeStateBtn, paragraphStatement);
document.body.append(statement);

document.head.append(style);
const guideOpt: JsEl = {
  innerText: translate[lang].guideText + "\n" + translate[lang].developerText,
  tabIndex: 0,
  style: {
    textAlign: "start",
    fontSize: "large",
    fontFamily: "fantasy",
    paddingBottom: "3px",
  },
};
jsToStyle(guide, guideOpt);
sidebar.appendChild(intoRow(closeBtn, openStateBtn));
sidebar.appendChild(intoRow(hyperBold, headersBold, font));
sidebar.appendChild(intoRow(grayScale, invertColors, brightness));
sidebar.appendChild(intoRow(saturate, sepiaHue, sepia));
sidebar.appendChild(intoRow(textBigger, textSmaller, textReset));
sidebar.appendChild(intoRow(focus, moveBox, pauseAnimate));
sidebar.appendChild(intoRow(speaker));
sidebar.appendChild(intoRow(guide));

const remember = () => {
  if (negishutPos["text"]) {
    textSize = negishutPos["text"];
    preStyle["text"] = `* {
      font-size: ${textSize}px !important;
    }
    `;
    pushStyle(style, preStyle);
  }
  if (negishutPos["headers"]) {
    headersBold.click();
  }
  if (negishutPos["hyper"]) {
    hyperBold.click();
  }
  if (negishutPos["font"]) {
    font.click();
  }
  if (negishutPos["filter"]) {
    filterStrength[negishutPos["filter"] as FilterStrengthKeys].btn.click();
  }
  if (negishutPos["pauseAnimate"]) {
    pauseAnimate.click();
  }
  if (negishutPos["focus"]) {
    focus.click();
  }
  if (negishutPos["speaker"]) {
    speaker.click();
  }
};
remember();
export default sidebar;
