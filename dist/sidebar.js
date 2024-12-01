"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = require("./elements");
const func_1 = require("./func");
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
const moveBox = document.createElement("label");
const moveHeader = document.createElement("span");
const font = document.createElement("button");
const pauseAnimate = document.createElement("button");
const speaker = document.createElement("button");
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
    const eventBtn = event.target;
    const { id } = eventBtn;
    if (chosen && id != chosen) {
        filterStrength[chosen]["btn"].click();
    }
    if (preStyle.filter == "") {
        chosen = id;
        preStyle["filter"] = `html{filter:${id == "sepiaHue" ? "sepia" : id}(${filterStrength[id]["strength"]}%) ${filterStrength[id]["addition"] ?? ""} !important;}`;
        elements_1.negishutPos["filter"] = id;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        delete elements_1.negishutPos["filter"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
        preStyle["filter"] = "";
        chosen = null;
    }
    (0, func_1.pushStyle)(style, preStyle);
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
  padding: 0.8em 2em;
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
}

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
(0, func_1.pushStyle)(style, preStyle);
const sidebarOpt = {
    id: "sidebar",
    style: {
        display: "none",
        position: "fixed",
        top: "0",
        left: `min(-380px,-100vw)`,
        width: "min(380px,100vw)",
        height: "100%",
        backgroundColor: "transparent",
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
(0, func_1.jsToStyle)(elements_1.sidebar, sidebarOpt);
elements_1.sidebar.tabIndex = 0;
const uniqueName = (cssOpt, name, id) => {
    cssOpt["innerHTML"] = name;
    cssOpt["id"] = id;
    return cssOpt;
};
// Create a close button
closeBtn.style.overflow = "auto";
const btnOpt = {
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
const closeBtnOpt = {
    innerText: "סגור",
    className: "hoverNegishut",
    style: {
        top: "10px",
        right: "10px",
        fontSize: "18px",
        border: "1px solid skyblue",
        cursor: "pointer",
        background: "rgba(255,255,255,0.3)",
        borderRadius: "10%",
        padding: "2px",
    },
};
const rowOpt = {
    style: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },
};
const moveOpt = {
    ariaLabel: "ניווט בדף",
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
const moveBoxOpt = {
    style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        font: "bold",
    },
};
const moveHeaderOpt = {
    innerText: "ניווט",
    style: {
        position: "absolute",
        top: "10%",
        font: "bold",
        fontSize: "large",
    },
};
(0, func_1.jsToStyle)(moveBox, {
    ...btnOpt,
    style: { ...btnOpt["style"], ...moveBoxOpt["style"] },
});
(0, func_1.jsToStyle)(moveHeader, moveHeaderOpt);
moveBox.append(moveHeader, elements_1.move);
(0, func_1.jsToStyle)(closeBtn, closeBtnOpt);
closeBtn.autofocus = true;
// Add event listener to close button
closeBtn.addEventListener("click", func_1.openSideBar);
// Append close button and menu to sidebar
(0, func_1.jsToStyle)(textBigger, uniqueName(btnOpt, "+", "textSizeBigger"));
textBigger.ariaLabel = "הגדלת טקסט";
textBigger.addEventListener("click", () => {
    preStyle["text"] = `* {
    font-size: ${++textSize}px !important;
  }
  `;
    elements_1.negishutPos["text"] = textSize;
    localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.jsToStyle)(textSmaller, uniqueName(btnOpt, "-", "textSizeSmaller"));
textSmaller.ariaLabel = "הקטנת טקסט";
textSmaller.addEventListener("click", () => {
    preStyle["text"] = `* {
    font-size: ${--textSize}px !important;
  }
  `;
    elements_1.negishutPos["text"] = textSize;
    localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.jsToStyle)(textReset, uniqueName(btnOpt, "X", "textSizeReset"));
textReset.ariaLabel = "איפוס גודל טקסט";
textReset.addEventListener("click", () => {
    preStyle["text"] = "";
    delete elements_1.negishutPos["text"];
    localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.jsToStyle)(hyperBold, uniqueName(btnOpt, "קישור", "hyperBold"));
hyperBold.addEventListener("click", () => {
    if (preStyle.hyper == "") {
        preStyle["hyper"] = `a{
    font-weight:900 !important;
    border:2px solid red !important;
    }`;
        (0, func_1.pushStyle)(style, preStyle);
        hyperBold.classList.add("checkedByNegishut");
        elements_1.negishutPos["hyper"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        preStyle["hyper"] = "";
        (0, func_1.pushStyle)(style, preStyle);
        hyperBold.classList.remove("checkedByNegishut");
        delete elements_1.negishutPos["hyper"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
});
(0, func_1.jsToStyle)(headersBold, uniqueName(btnOpt, "כותרת", "headersBold"));
headersBold.addEventListener("click", () => {
    if (preStyle.headers == "") {
        preStyle["headers"] = `h1,h2,h3,h4,h5,h6,h7{
      font-weight:900 !important;
    border:2px solid red !important;}`;
        (0, func_1.pushStyle)(style, preStyle);
        headersBold.classList.add("checkedByNegishut");
        elements_1.negishutPos["headers"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        preStyle["headers"] = "";
        (0, func_1.pushStyle)(style, preStyle);
        delete elements_1.negishutPos["headers"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
        headersBold.classList.remove("checkedByNegishut");
    }
});
(0, func_1.jsToStyle)(grayScale, uniqueName(btnOpt, "עיוור צבעים", "grayscale"));
grayScale.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(invertColors, uniqueName(btnOpt, "כבדי ראיה", "invert"));
invertColors.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(brightness, uniqueName(btnOpt, "בהירות גבוהה", "brightness"));
brightness.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(sepia, uniqueName(btnOpt, "אור כחול", "sepia"));
sepia.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(saturate, uniqueName(btnOpt, "צבעים עזים", "saturate"));
saturate.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(sepiaHue, uniqueName(btnOpt, "צבעים קרים", "sepiaHue"));
sepiaHue.addEventListener("click", chooseOnlyMe);
(0, func_1.jsToStyle)(focus, uniqueName(btnOpt, "הדגשה", "focus"));
focus.addEventListener("click", (event) => {
    const eventBtn = event.target;
    if (preStyle["focus"] == "") {
        preStyle["focus"] = `
    *:focus-visible,
    *:focus {
        border: 4px solid red !important;
        }`;
        eventBtn.classList.add("checkedByNegishut");
        elements_1.negishutPos["focus"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        preStyle["focus"] = "";
        delete elements_1.negishutPos["focus"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
        eventBtn.classList.remove("checkedByNegishut");
    }
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.jsToStyle)(font, uniqueName(btnOpt, "שינוי פונט", "font"));
font.addEventListener("click", (event) => {
    const eventBtn = event.target;
    if (preStyle["font"] == "") {
        preStyle["font"] = `
    *{
    font-family: Arial, Helvetica, sans-serif !important;
    }`;
        eventBtn.classList.add("checkedByNegishut");
        elements_1.negishutPos["font"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        preStyle["font"] = "";
        eventBtn.classList.remove("checkedByNegishut");
        delete elements_1.negishutPos["font"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    (0, func_1.pushStyle)(style, preStyle);
});
(0, func_1.jsToStyle)(pauseAnimate, uniqueName(btnOpt, "השהה אנימציות", "pauseAnimate"));
pauseAnimate.addEventListener("click", (event) => {
    const eventBtn = event.target;
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
        elements.forEach((element) => {
            const computedStyle = window.getComputedStyle(element);
            const transform = computedStyle.transform;
            const el = element;
            // הפסקת האנימציה
            el.style.animation = "none";
            // החלת מצב הסופי
            if (transform !== "none") {
                el.style.transform = transform;
            }
        });
        elements_1.negishutPos["pauseAnimate"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    else {
        preStyle["pauseAnimate"] = "";
        eventBtn.classList.remove("checkedByNegishut");
        delete elements_1.negishutPos["pauseAnimate"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
    (0, func_1.pushStyle)(style, preStyle);
});
let readActive = false;
(0, func_1.jsToStyle)(speaker, uniqueName(btnOpt, "קורא מסך", "speaker"));
speaker.addEventListener("click", (event) => {
    const eventBtn = event.target;
    if (readActive) {
        removeEventListener("focusin", func_1.readMe);
        delete elements_1.negishutPos["speaker"];
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
        readActive = false;
        eventBtn.classList.remove("checkedByNegishut");
    }
    else {
        addEventListener("focusin", func_1.readMe);
        readActive = true;
        eventBtn.classList.add("checkedByNegishut");
        elements_1.negishutPos["speaker"] = true;
        localStorage.setItem("NegishutPos", JSON.stringify(elements_1.negishutPos));
    }
});
const intoRow = (...elements) => {
    const row = document.createElement("div");
    (0, func_1.jsToStyle)(row, rowOpt);
    elements.forEach((el) => {
        row.appendChild(el);
    });
    return row;
};
(0, func_1.jsToStyle)(elements_1.move, moveOpt);
elements_1.move.addEventListener("change", (event) => {
    const eventSelect = event.target;
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
const statementOpt = {
    id: "statement",
    style: {
        borderRadius: "5%",
        backdropFilter: "blur(10px)",
        border: "2px solid skyblue",
        background: "rgba(255,255,255,0.3)",
        width: "50%",
        padding: "10px",
    },
};
const statement = document.createElement("dialog");
const paragraphStatement = document.createElement("p");
const openStateBtn = document.createElement("button");
const closeStateBtn = document.createElement("button");
paragraphStatement.style.textAlign = "center";
paragraphStatement.innerText = `
אתר זה רואה חשיבות רבה בהנגשתו לכלל האוכלוסייה ופועל כדי לאפשר לאנשים עם מוגבלות חוויית שימוש נוחה ונגישה בתכניו.

במסגרת מאמצי ההנגשה, האתר עובר התאמות ועומד בתקני הנגישות העדכניים ביותר. עם זאת, ייתכנו חלקים באתר או תכנים המוצעים על ידי גורמי צד שלישי, כגון סרטונים מוטמעים או קבצים חיצוניים, שאינם נגישים במלואם.

אנו שואפים לשפר את הנגישות באופן מתמיד ולהבטיח חוויית גלישה טובה לכל המשתמשים. במידה ונתקלתם בקושי או בבעיה בנגישות האתר, נשמח אם תפנו אלינו על מנת שנוכל לטפל בכך בהקדם האפשרי.
`;
closeStateBtn.autofocus = true;
openStateBtn.addEventListener("click", () => {
    statement.showModal();
});
closeStateBtn.addEventListener("click", () => {
    statement.close();
});
(0, func_1.jsToStyle)(statement, statementOpt);
(0, func_1.jsToStyle)(openStateBtn, uniqueName(closeBtnOpt, "הצהרת נגישות", "openStateBtn"));
(0, func_1.jsToStyle)(closeStateBtn, uniqueName(closeBtnOpt, "סגור", "closeStateBtn"));
statement.append(closeStateBtn, paragraphStatement);
document.body.append(statement);
document.head.append(style);
const guide = document.createElement("span");
guide.innerText = `
ALT+A לפתיחת וסגירת החלון נגישות
פותח על ידי ברכיה יצחק שושן`;
guide.style.fontSize = "large";
elements_1.sidebar.appendChild(intoRow(closeBtn, openStateBtn));
elements_1.sidebar.appendChild(intoRow(hyperBold, headersBold, font));
elements_1.sidebar.appendChild(intoRow(grayScale, invertColors, brightness));
elements_1.sidebar.appendChild(intoRow(saturate, sepiaHue, sepia));
elements_1.sidebar.appendChild(intoRow(textBigger, textSmaller, textReset));
elements_1.sidebar.appendChild(intoRow(focus, moveBox, pauseAnimate));
elements_1.sidebar.appendChild(intoRow(speaker));
elements_1.sidebar.appendChild(intoRow(guide));
const remember = () => {
    if (elements_1.negishutPos["text"]) {
        textSize = elements_1.negishutPos["text"];
        preStyle["text"] = `* {
      font-size: ${textSize}px !important;
    }
    `;
        (0, func_1.pushStyle)(style, preStyle);
    }
    if (elements_1.negishutPos["headers"]) {
        headersBold.click();
    }
    if (elements_1.negishutPos["hyper"]) {
        hyperBold.click();
    }
    if (elements_1.negishutPos["font"]) {
        font.click();
    }
    if (elements_1.negishutPos["filter"]) {
        filterStrength[elements_1.negishutPos["filter"]].btn.click();
    }
    if (elements_1.negishutPos["pauseAnimate"]) {
        pauseAnimate.click();
    }
    if (elements_1.negishutPos["focus"]) {
        focus.click();
    }
    if (elements_1.negishutPos["speaker"]) {
        speaker.click();
    }
};
remember();
exports.default = elements_1.sidebar;
