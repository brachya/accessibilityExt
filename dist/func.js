import { buttonSize, draggableButton, getIsDragged, road1, road2, road3, road4, setIsDragged, sidebar, wheel, } from "./elements";
export const jsToStyle = (el, js, sub = null) => {
    Object.keys(js).forEach((key) => {
        const typedKey = key;
        if (js[typedKey] instanceof Object) {
            jsToStyle(el, js[typedKey], typedKey);
        }
        else if (sub == null) {
            el[typedKey] = js[typedKey];
        }
        else {
            el[sub][typedKey] = js[typedKey];
        }
    });
};
export const pushStyle = (styleEl, styleObj) => {
    styleEl.innerHTML = Object.values(styleObj).join(" ");
};
let deg = 0;
let roadMove = 0;
setInterval(() => {
    if (sidebarOpen) {
        wheel.style.transform = `rotate(${deg}deg)`;
        deg = (deg + 10) % 360;
        road1.style.transform = `translateX(${roadMove}px)`;
        road2.style.transform = `translateX(${(roadMove - buttonSize * 0.25) % buttonSize}px)`;
        road3.style.transform = `translateX(${(roadMove - buttonSize * 0.5) % buttonSize}px)`;
        road4.style.transform = `translateX(${(roadMove - buttonSize * 0.75) % buttonSize}px)`;
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
    }
    else {
        sidebar.style.left = `-${sidebar.offsetWidth}px`; // Hide the sidebar
        sidebarOpen = false;
    }
};
export const resetBtnPos = () => {
    draggableButton.style.left = "20px";
    draggableButton.style.top = `${window.innerHeight - 90}px`;
};
export const createOptionsEl = (elOptions) => {
    return elOptions.map((el) => {
        const opt = document.createElement("option");
        opt.value = el.value;
        opt.textContent = el.textContent;
        return opt;
    });
};
