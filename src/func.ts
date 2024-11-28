import {
  buttonSize,
  draggableButton,
  getIsDragged,
  road1,
  road2,
  road3,
  road4,
  setIsDragged,
  sidebar,
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
setInterval(() => {
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

export let sidebarOpen = false;
export const openSidBar = () => {
  if (getIsDragged()) {
    setIsDragged(false);
    return;
  }
  if (!sidebarOpen) {
    sidebar.style.left = "0"; // Slide in the sidebar
    sidebarOpen = true;
    sidebar.click();
  } else {
    sidebar.style.left = `-${sidebar.offsetWidth}px`; // Hide the sidebar
    sidebarOpen = false;
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
    opt.value = el.value;
    opt.textContent = el.textContent;
    return opt;
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
const getElementText = (element) => {
  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    return element.value || element.placeholder || null;
  }

  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("alt") ||
    element.innerText ||
    element.textContext ||
    "אין טקסט"
  );
};
export const readMe = (event) => {
  readText(getElementText(event.target));
};
