import { wheel } from "./elements";
import { jsToStyle } from "./func";
import { JsEl } from "./global";

export const cases = document.createElement("div");
cases.style.position = "absolute";
cases.style.top = "10%";
cases.style.left = "10%";
cases.style.width = "100%";
cases.style.height = "100%";
const backHandle = document.createElement("div");
const back = document.createElement("div");
const handle = document.createElement("div");
const innerWheel = document.createElement("div");
const line = document.createElement("div");
const line2 = document.createElement("div");

const leg = document.createElement("div");
const foot = document.createElement("div");
const backHandleOpt: JsEl = {
  style: {
    width: "20%",
    left: "0%",
    height: "5%",
    backgroundColor: "black",
    position: "absolute",
  },
};
const backOpt: JsEl = {
  style: {
    width: "5%",
    height: "35%",
    left: "20%",
    transform: "rotate(-15deg)",
    backgroundColor: "black",
    position: "absolute",
  },
};
const handleOpt: JsEl = {
  style: {
    width: "15%",
    height: "5%",
    top: "15%",
    left: "23%",
    // transform: "translateX(4.5px) translateY(4px)",
    backgroundColor: "black",
    position: "absolute",
  },
};

const wheelOpt: JsEl = {
  style: {
    width: "40%",
    // height: "20%",
    aspectRatio: "1/1",
    top: "33%",
    left: "13%",
    // transform: "translateX(4px) translateY(8px)",
    border: "1px solid black",
    borderRadius: "100%",
    position: "absolute",
  },
};
const innerWheelOpt: JsEl = {
  style: {
    width: "80%",
    // height: "80%",
    aspectRatio: "1/1",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    border: "1px solid black",
    borderRadius: "100%",
    position: "absolute",
  },
};
const lineOpt: JsEl = {
  style: {
    width: "100%",
    height: "1px",
    top: "50%",
    // transform: "translateX(2px) translateY(4.5px)",
    backgroundColor: "black",
    position: "absolute",
  },
};
const line2Opt: JsEl = {
  style: {
    width: "1px",
    height: "100%",
    left: "50%",
    // transform: "translateX(4.5px) translateY(2px)",
    backgroundColor: "black",
    position: "absolute",
  },
};

const legOpt: JsEl = {
  style: {
    width: "20%",
    height: "5%",
    top: "48%",
    left: "52%",
    // transform: "translateX(14px) translateY(10px)",
    backgroundColor: "black",
    position: "absolute",
  },
};
const footOpt: JsEl = {
  style: {
    width: "5%",
    height: "15%",
    top: "49%",
    left: "70%",
    transform: "rotate(-25deg)",
    backgroundColor: "black",
    position: "absolute",
  },
};
jsToStyle(backHandle, backHandleOpt);
jsToStyle(back, backOpt);
jsToStyle(handle, handleOpt);
jsToStyle(wheel, wheelOpt);
jsToStyle(innerWheel, innerWheelOpt);
jsToStyle(line, lineOpt);
jsToStyle(line, lineOpt);
jsToStyle(line2, line2Opt);
jsToStyle(leg, legOpt);
jsToStyle(foot, footOpt);
cases.append(backHandle, back, handle, wheel, leg, foot);
wheel.append(innerWheel, line, line2);
