import {
  buttonSize,
  draggableButton,
  getIsDragged,
  move,
  road1,
  road2,
  road3,
  road4,
  setIsDragged,
  sidebar,
  statement,
  wheel,
} from "./elements";
import { JsEl } from "./global";

export const jsToStyle = (
  el: HTMLElement,
  js: JsEl,
  sub: null | string = null
) => {
  Object.keys(js).forEach((key) => {
    const typedKey = key as keyof JsEl;
    if (js[typedKey] instanceof Object) {
      jsToStyle(el, js[typedKey] as any, typedKey);
    } else if (sub == null) {
      (el as any)[typedKey] = js[typedKey];
    } else {
      (el as any)[sub][typedKey] = js[typedKey];
    }
  });
};
export const pushStyle = (
  styleEl: HTMLStyleElement,
  styleObj: { [key: string]: string }
) => {
  styleEl.innerHTML = Object.values(styleObj).join(" ");
};

let deg = 0;
let roadMove = 0;
let modalNotReady = document.getElementById("negishutStatement") == null;
setInterval(() => {
  if (modalNotReady) {
    console.log(statement);
    console.log(document.getElementById("negishutStatement"));
    if (document.getElementById("negishutStatement") != null) {
      modalNotReady = false;
    } else {
      document.body.append(statement);
    }
  }
  if (sidebarOpen) {
    wheel.style.transform = `rotate(${deg}deg)`;
    deg = (deg + 10) % 359;

    road1.style.transform = `translateX(${roadMove}px)`;
    road2.style.transform = `translateX(${
      (roadMove - buttonSize * 0.25) % buttonSize
    }px)`;
    road3.style.transform = `translateX(${
      (roadMove - buttonSize * 0.5) % buttonSize
    }px)`;
    road4.style.transform = `translateX(${
      (roadMove - buttonSize * 0.75) % buttonSize
    }px)`;
    roadMove = (roadMove - buttonSize * 0.04) % buttonSize;
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
const focusableElements = sidebar.querySelectorAll(
  "button, a, select, [tabindex]"
);
export let sidebarOpen = false;
export const openSideBar = () => {
  if (getIsDragged()) {
    setIsDragged(false);
    return;
  }
  if (!sidebarOpen) {
    sidebar.style.display = "block";
    setTimeout(() => {
      sidebar.style.left = "0"; // Slide in the sidebar
      sidebarOpen = true;
    }, 100);

    move.innerHTML = "";
    move.append(...(createOptionsEl(moveOptions) as HTMLOptionElement[]));
    (sidebar.children[0] as HTMLButtonElement).focus();
  } else {
    sidebar.style.left = `-${sidebar.offsetWidth}px`; // Hide the sidebar
    sidebarOpen = false;
    setTimeout(() => {
      sidebar.style.display = "none";
    }, 300);
  }
};
export const resetBtnPos = () => {
  draggableButton.style.left = "20px";
  draggableButton.style.top = `${window.innerHeight - 90}px`;
};
export const createOptionsEl = (
  elOptions: { value: string; textContent: string }[]
) => {
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

const detectLanguage = (text: string): string => {
  if (/[\u0590-\u05FF]/.test(text)) {
    return "he-IL";
  } else if (/[a-zA-Z]/.test(text)) {
    return "en-US";
  }
  return "unknown";
};
const speaker = new SpeechSynthesisUtterance();
const voices = speechSynthesis.getVoices();
const getVoiceByLang = (lang: string) => {
  const matchVoice = voices.find((voice) => voice.lang == lang);
  if (matchVoice) {
    return matchVoice;
  }
  return null;
};
const readText = (text: string) => {
  speaker.text = text;
  speaker.lang = detectLanguage(text);
  speaker.voice = getVoiceByLang(speaker.lang);
  speaker.rate = 1;
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  speechSynthesis.speak(speaker);
};
const getElementText = (element: HTMLElement): string => {
  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    return (
      (element as HTMLTextAreaElement).value ||
      (element as HTMLInputElement).placeholder ||
      "אין טקסט"
    );
  }

  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("alt") ||
    element.innerText ||
    element.textContent ||
    "אין טקסט"
  );
};
export const readMe = (event: FocusEvent): void => {
  readText(getElementText(event.target as HTMLElement));
};
