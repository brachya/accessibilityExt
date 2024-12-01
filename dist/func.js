"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMe = exports.createOptionsEl = exports.resetBtnPos = exports.openSideBar = exports.sidebarOpen = exports.pushStyle = exports.jsToStyle = void 0;
const elements_1 = require("./elements");
const jsToStyle = (el, js, sub = null) => {
    Object.keys(js).forEach((key) => {
        const typedKey = key;
        if (js[typedKey] instanceof Object) {
            (0, exports.jsToStyle)(el, js[typedKey], typedKey);
        }
        else if (sub == null) {
            el[typedKey] = js[typedKey];
        }
        else {
            el[sub][typedKey] = js[typedKey];
        }
    });
};
exports.jsToStyle = jsToStyle;
const pushStyle = (styleEl, styleObj) => {
    styleEl.innerHTML = Object.values(styleObj).join(" ");
};
exports.pushStyle = pushStyle;
let deg = 0;
let roadMove = 0;
setInterval(() => {
    if (exports.sidebarOpen) {
        elements_1.wheel.style.transform = `rotate(${deg}deg)`;
        deg = (deg + 10) % 359;
        elements_1.road1.style.transform = `translateX(${roadMove}px)`;
        elements_1.road2.style.transform = `translateX(${(roadMove - elements_1.buttonSize * 0.25) % elements_1.buttonSize}px)`;
        elements_1.road3.style.transform = `translateX(${(roadMove - elements_1.buttonSize * 0.5) % elements_1.buttonSize}px)`;
        elements_1.road4.style.transform = `translateX(${(roadMove - elements_1.buttonSize * 0.75) % elements_1.buttonSize}px)`;
        roadMove = (roadMove - elements_1.buttonSize * 0.04) % elements_1.buttonSize;
    }
}, 100);
const moveOptions = [
    { value: "top", textContent: "ראש הדף" },
    { value: "header", textContent: "תפריט" },
    { value: "nav", textContent: "תפריט" },
    { value: "main", textContent: "תוכן" },
    { value: "h1", textContent: "כותרת ראשית" },
    { value: "h2", textContent: "כותרת משנית" },
    { value: "middle", textContent: "מרכז" },
    { value: "bottom", textContent: "תחתית הדף" },
];
const focusableElements = elements_1.sidebar.querySelectorAll("button, a, select, [tabindex]");
exports.sidebarOpen = false;
const openSideBar = () => {
    if ((0, elements_1.getIsDragged)()) {
        (0, elements_1.setIsDragged)(false);
        return;
    }
    if (!exports.sidebarOpen) {
        elements_1.sidebar.style.display = "block";
        setTimeout(() => {
            elements_1.sidebar.style.left = "0"; // Slide in the sidebar
            exports.sidebarOpen = true;
        }, 100);
        elements_1.move.innerHTML = "";
        elements_1.move.append(...(0, exports.createOptionsEl)(moveOptions));
        elements_1.sidebar.children[0].focus();
    }
    else {
        elements_1.sidebar.style.left = `-${elements_1.sidebar.offsetWidth}px`; // Hide the sidebar
        exports.sidebarOpen = false;
        setTimeout(() => {
            elements_1.sidebar.style.display = "none";
        }, 300);
    }
};
exports.openSideBar = openSideBar;
const resetBtnPos = () => {
    elements_1.draggableButton.style.left = "20px";
    elements_1.draggableButton.style.top = `${window.innerHeight - 90}px`;
};
exports.resetBtnPos = resetBtnPos;
const createOptionsEl = (elOptions) => {
    return elOptions.map((el) => {
        const opt = document.createElement("option");
        const find = document.querySelector(el.value);
        opt.value = el.value;
        opt.textContent = el.textContent;
        if (find || ["top", "middle", "bottom"].includes(el.value)) {
            return opt;
        }
    });
};
exports.createOptionsEl = createOptionsEl;
const detectLanguage = (text) => {
    if (/[\u0590-\u05FF]/.test(text)) {
        return "he-IL";
    }
    else if (/[a-zA-Z]/.test(text)) {
        return "en-US";
    }
    return "unknown";
};
const speaker = new SpeechSynthesisUtterance();
const voices = speechSynthesis.getVoices();
const getVoiceByLang = (lang) => {
    const matchVoice = voices.find((voice) => voice.lang == lang);
    if (matchVoice) {
        return matchVoice;
    }
    return null;
};
const readText = (text) => {
    speaker.text = text;
    speaker.lang = detectLanguage(text);
    speaker.voice = getVoiceByLang(speaker.lang);
    speaker.rate = 1;
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    speechSynthesis.speak(speaker);
};
const getElementText = (element) => {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        return (element.value ||
            element.placeholder ||
            "אין טקסט");
    }
    return (element.getAttribute("aria-label") ||
        element.getAttribute("alt") ||
        element.innerText ||
        element.textContent ||
        "אין טקסט");
};
const readMe = (event) => {
    readText(getElementText(event.target));
};
exports.readMe = readMe;
