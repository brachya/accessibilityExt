"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("./func");
const sidebar = document.createElement("div");
const style = document.createElement("style");
const closeBtn = document.createElement("button");
const textBigger = document.createElement("button");
const textSmaller = document.createElement("button");
const textReset = document.createElement("button");
const hyperBold = document.createElement("button");
const headersBold = document.createElement("button");
const grayScale = document.createElement("button");
const invertColors = document.createElement("button");
const brightness = document.createElement("button");
const sepia = document.createElement("button");
const saturate = document.createElement("button");
const sepiaHue = document.createElement("button");
const focus = document.createElement("button");
const move = document.createElement("select");
const filterStrength = {
    grayscale: { btn: grayScale, strength: 100 },
    invert: { btn: invertColors, strength: 100 },
    brightness: { btn: brightness, strength: 150 },
    sepia: { btn: sepia, strength: 80 },
    saturate: { btn: saturate, strength: 800 },
    sepiaHue: { btn: sepiaHue, strength: 80, addition: "hue-rotate(200deg)" },
};
let chosen = null; // for letting the user choose only one option
const chooseOnlyMe = (event) => {
    var _a;
    const eventBtn = event.target;
    const { id } = eventBtn;
    if (chosen && id != chosen) {
        filterStrength[chosen]["btn"].click();
    }
    if (preStyle.filter == "") {
        chosen = id;
        preStyle["filter"] = `html{filter:${id == "sepiaHue" ? "sepia" : id}(${filterStrength[id]["strength"]}%) ${(_a = filterStrength[id]["addition"]) !== null && _a !== void 0 ? _a : ""} !important;}`;
    }
    else {
        preStyle["filter"] = "";
        chosen = null;
    }
    (0, func_1.pushStyle)(style, preStyle);
    eventBtn.classList.toggle("checked");
};
// Create the sidebar element
let textSize = 10;
const preStyle = {
    text: "",
    hyper: "",
    headers: "",
    filter: "",
    checked: ".checked{background: rgb(82, 192, 212);}",
    focus: "",
};
const sidebarOpt = {
    id: "sidebar",
    style: {
        position: "fixed",
        top: "0",
        left: "-250px",
        width: "250px",
        height: "100%",
        backgroundColor: "#333",
        color: "white",
        transition: "left 0.3s ease-in-out",
        overflowX: "hidden",
        overflowY: "auto",
    },
};
(0, func_1.js2Style)(sidebar, sidebarOpt);
const uniqueName = (cssOpt, name, id) => {
    cssOpt["innerHTML"] = name;
    cssOpt["id"] = id;
    return cssOpt;
};
// Create a close button
closeBtn.style.overflow = "auto";
const btnOpt = {
    style: {
        width: "100%",
        aspectRatio: "1/1",
    },
};
const closeBtnOpt = {
    innerText: "Close",
    style: {
        top: "10px",
        right: "10px",
        fontSize: "18px",
        cursor: "pointer",
    },
};
const rowOpt = {
    style: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },
};
(0, func_1.js2Style)(closeBtn, closeBtnOpt);
// Add event listener to close button
closeBtn.addEventListener("click", func_1.openSidBar);
// Append close button and menu to sidebar
(0, func_1.js2Style)(textBigger, uniqueName(btnOpt, "+", "textSizeBigger"));
textBigger.ariaLabel = "הגדלת טקסט";
textBigger.addEventListener("click", () => {
    preStyle["text"] = `* {
    font-size: ${++textSize}px !important;
  }
  `;
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.js2Style)(textSmaller, uniqueName(btnOpt, "-", "textSizeSmaller"));
textSmaller.ariaLabel = "הקטנת טקסט";
textSmaller.addEventListener("click", () => {
    preStyle["text"] = `* {
    font-size: ${--textSize}px !important;
  }
  `;
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.js2Style)(textReset, uniqueName(btnOpt, "X", "textSizeReset"));
textReset.ariaLabel = "איפוס גודל טקסט";
textReset.addEventListener("click", () => {
    preStyle["text"] = "";
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.js2Style)(hyperBold, uniqueName(btnOpt, "קישור", "hyperBold"));
hyperBold.addEventListener("click", () => {
    if (preStyle.hyper == "") {
        preStyle["hyper"] = `a{
    font-weight:900 !important;
    border:2px solid red !important;
    }`;
        (0, func_1.pushStyle)(style, preStyle);
        hyperBold.classList.add("checked");
    }
    else {
        preStyle["hyper"] = "";
        (0, func_1.pushStyle)(style, preStyle);
        hyperBold.classList.remove("checked");
    }
});
(0, func_1.js2Style)(headersBold, uniqueName(btnOpt, "כותרת", "headersBold"));
headersBold.addEventListener("click", () => {
    if (preStyle.headers == "") {
        preStyle["headers"] = `h1,h2,h3,h4,h5,h6,h7{
      font-weight:900 !important;
    border:2px solid red !important;}`;
        (0, func_1.pushStyle)(style, preStyle);
        headersBold.classList.add("checked");
    }
    else {
        preStyle["headers"] = "";
        (0, func_1.pushStyle)(style, preStyle);
        headersBold.classList.remove("checked");
    }
});
(0, func_1.js2Style)(grayScale, uniqueName(btnOpt, "עיוור צבעים", "grayscale"));
grayScale.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(invertColors, uniqueName(btnOpt, "כבדי ראיה", "invert"));
invertColors.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(brightness, uniqueName(btnOpt, "בהירות גבוהה", "brightness"));
brightness.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(sepia, uniqueName(btnOpt, "אור כחול", "sepia"));
sepia.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(saturate, uniqueName(btnOpt, "צבעים עזים", "saturate"));
saturate.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(sepiaHue, uniqueName(btnOpt, "צבעים קרים", "sepiaHue"));
sepiaHue.addEventListener("click", chooseOnlyMe);
(0, func_1.js2Style)(focus, uniqueName(btnOpt, "הדגשה", "focus"));
focus.addEventListener("click", (event) => {
    const eventBtn = event.target;
    if (preStyle["focus"] == "") {
        preStyle["focus"] = `
    *:focus-visible,
    *:focus {
        border: 4px solid red !important;
        }`;
        eventBtn.classList.add("checked");
    }
    else {
        preStyle["focus"] = "";
        eventBtn.classList.remove("checked");
    }
    (0, func_1.pushStyle)(style, preStyle);
});
const intoRow = (...elements) => {
    const row = document.createElement("div");
    (0, func_1.js2Style)(row, rowOpt);
    elements.forEach((el) => {
        row.appendChild(el);
    });
    return row;
};
const moveOptions = [
    { value: "top", textContent: "ראש הדף" },
    { value: "main", textContent: "מרכז" },
    { value: "bottom", textContent: "תחתית הדף" },
];
(0, func_1.js2Style)(move, { style: { width: "100%" } });
move.append(...(0, func_1.createOptionsEl)(moveOptions));
move.addEventListener("change", (event) => {
    const eventSelect = event.target;
    const { value } = eventSelect;
    const find = document.querySelector(value);
    console.log(document.body.offsetHeight);
    console.log(document.body.offsetHeight / 2);
    switch (value) {
        case "top": {
            scrollTo({ top: 0, behavior: "smooth" });
            break;
        }
        case "main": {
            scrollTo({ top: document.body.offsetHeight / 2, behavior: "smooth" });
            break;
        }
        case "bottom": {
            scrollTo({ top: document.body.offsetHeight, behavior: "smooth" });
            break;
        }
    }
});
document.head.append(style);
sidebar.appendChild(intoRow(closeBtn));
sidebar.appendChild(intoRow(hyperBold, headersBold));
sidebar.appendChild(intoRow(grayScale, invertColors));
sidebar.appendChild(intoRow(brightness, sepia));
sidebar.appendChild(intoRow(saturate, sepiaHue));
sidebar.appendChild(intoRow(textBigger, textSmaller, textReset));
sidebar.appendChild(intoRow(focus, move));
exports.default = sidebar;
